import { ContactObject } from '../../assets/contactObject';
import { Injectable, Inject, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { Subscription } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { env } from '../../assets/env';
import Peer from 'peerjs';

@Injectable({
  providedIn: 'root'
})
export class IpPhoneService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type':  'application/json'
    })
  };
  private falseIdKey: Boolean = false;
  private falseContactKey: Boolean = false;
  private peer: Peer;
  private dataConn;
  private callback: Peer;
  private callConnection;
  private callbackConnection;
  private voicemail: Boolean = false;
  @Output() openConnection = new EventEmitter<any>();
  @Output() endConnection = new EventEmitter<any>();
  public userInteraction = new EventEmitter<any>();;
  private userInteractionSub;
  private audioEl;
  private phoneTones;

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {
    this.audioEl = document.getElementsByTagName('audio')[0];
    this.phoneTones = document.getElementsByTagName('audio')[1];
  }

  getContacts(phoneNo: String) {
    return this.http.post<any[]>(env.backendURL+"/phone/contacts", phoneNo, this.httpOptions);
  }

  getCalls(phoneNo: String) {
    return this.http.post<any[]>(env.backendURL+"/phone/call_logs", phoneNo, this.httpOptions);
  }

  falsifyId(value: Boolean){
    this.falseIdKey = value;
  }

  falsifyContact(value: Boolean){
    this.falseContactKey = value;
  }

  //register with Peer Server
  connect(phoneNo: string){
    this.peer = new Peer(phoneNo, {host: env.PEERSERVERHOST, port: 9000, path: '/operator'});
    this.setupHandler(phoneNo);

    //manage incoming calls
    let my = this;
    let audioEl = this.audioEl;
    let phoneTones = this.phoneTones;
    let userInteraction = this.userInteraction;
    let userInteractionSub = this.userInteractionSub;
    let openConnection = this.openConnection;
    let endConnection = this.endConnection;

    this.peer.on('call', (call) => {

      //check if response to originated call
      if (!call.metadata.status && my.callConnection != null && call.metadata.command == 'INVITE'){
        console.log(JSON.stringify(call.metadata));

        console.log('i am busy, go away');
        call.answer(null);
        call.close();
        my.dataConn.send(JSON.stringify({command: 'ACK<SEND_TO_VOICEMAIL>', caller: call.metadata.caller}));
      }

      else if (!call.metadata.status && call.metadata.command == 'INVITE') {
        console.log(JSON.stringify(call.metadata));

        openConnection.emit({ringing: true, incoming: true, number: call});
        phoneTones.src = '../../assets/ringing_tone.mp3';
        phoneTones.play();

        call.on('close', function(){
          audioEl.srcObject = null;
          audioEl.pause();

          phoneTones.src = '../../assets/hang_up.wav';
          phoneTones.play();

          my.callConnection = null;
          endConnection.emit(null);
        });

        userInteractionSub = userInteraction.subscribe({
          next(interaction) {
            if (interaction == 'answer'){
              navigator.mediaDevices.getUserMedia({video: false, audio: true})
              .then(function(stream) {
                my.callConnection = call;

                phoneTones.pause();
                phoneTones.src = '';

                call.answer(stream); // Answer the call with an A/V stream.
                call.on('stream', (remoteStream) => {
                  openConnection.emit({ringing: false, incoming: true, number: call});
                  audioEl.srcObject = remoteStream;
                  audioEl.play();
                });

              })
              .catch(function(err) {
                phoneTones.pause();
                phoneTones.src = '';
                console.error('Failed to get local stream', err);
                endConnection.emit({err: 'Need access to microphone to make call.'});
              });
              userInteractionSub._subscriptions[0].unsubscribe();
            }

            else if (interaction == 'decline'){
              phoneTones.pause();
              phoneTones.src = '';
              call.answer(null);
              call.close();
              my.dataConn.send(JSON.stringify({command: 'ACK<SEND_TO_VOICEMAIL>', caller: call.metadata.caller}));
              userInteractionSub._subscriptions[0].unsubscribe();
            }
          }
        });
      }
      else{
        this.fullCircuit(call);
      }
    });
  }

  setupHandler(phoneNo){
    let peer = this.peer;
    let my = this;
    let ws = new WebSocket('ws://'+env.PEERSERVERHOST+':9001');
    this.dataConn = ws;
    ws.onmessage = function incoming(event) {

      if (event.data == 'register'){
        this.send(JSON.stringify({command: 'register', id: phoneNo}));
      }
      else if (event.data == 'false_key'){
        //falsified contact or id key
        my._snackBar.open('False user keys provided.', 'Dismiss', {
          duration: 10000,
        });

        console.error('FALSE KEYS');

        my.callConnection.close();
        my.callConnection = null;
        my.endConnection.emit(null);
      }
      else{
        let data = JSON.parse(event.data);
        if (data.command == 'BYE'){

          my.callConnection.close();
          if (my.callbackConnection != null){
            my.callbackConnection.close();
          }

        }
        else if (data.command == 'ACK<SEND_TO_VOICEMAIL>'){
          //for voicemail on decline call, busy, and timeout
          my.voicemail = true;
          my.openConnection.emit({ringing: false, incoming: false, number: my.callConnection});
          my.phoneTones.src = '../../assets/leave_a_message.wav';
          my.phoneTones.play();
        }
      }
    };
  }

  //make data connection
  dialOut(phoneNo: string, myCid: string, myNumber: string, id_key: string, contact_key: string, target_contact_key: string) {
    let my = this;
    let peer = this.peer;
    let callbackConnection = this.callbackConnection;
    let audioEl = this.audioEl;
    let phoneTones = this.phoneTones;
    let openConnection = this.openConnection;
    let endConnection = this.endConnection;

    navigator.mediaDevices.getUserMedia({video: false, audio: true})
    .then(function(stream) {
      const call = peer.call('SSP', stream, { metadata:
        {
          command: 'INVITE',
          cid: myCid,
          caller: myNumber,
          callerContactKey: my.falseContactKey ? 'false_value' : contact_key,
          callerIdKey: my.falseIdKey ? 'false_id' : id_key,
          target: phoneNo,
          targetContactKey:  my.falseContactKey ? 'falsevalue' : target_contact_key
        }
      });

      console.log("SENDING " + JSON.stringify(call.metadata));
      my.callConnection = call;
      openConnection.emit({ringing: true, incoming: false, number: call});

      call.on('stream', (remoteStream) => {
        // answered by operator, no stream attached
      });

      call.on('close', function(){
        if (callbackConnection != null && callbackConnection.open){
          callbackConnection.close();
        }
        audioEl.srcObject = null;
        audioEl.pause();

        phoneTones.src = '../../assets/hang_up.wav';
        phoneTones.play();

        my.callConnection = null;
        endConnection.emit(null);
      });

      call.on('error', (error) => {
        console.log(error);
      });
    })
    .catch(function(err) {
      console.error('Failed to get local stream', err);
      endConnection.emit({err: 'Need access to microphone to make call.'});
    });
  }


  fullCircuit(call){
    let my = this;
    let callback = this.callback;
    this.callbackConnection = call;
    let connection = this.callConnection;
    let audioEl = this.audioEl;
    let phoneTones = this.phoneTones;
    let openConnection = this.openConnection;
    let endConnection = this.endConnection;

    openConnection.emit({ringing: false, incoming: false, number: call});
    navigator.mediaDevices.getUserMedia({video: false, audio: true})
    .then(function(stream) {

      phoneTones.pause();
      phoneTones.src = '';

      call.answer(stream); // Answer the call with an A/V stream.
      call.on('stream', (remoteStream) => {
        openConnection.emit({ringing: false, incoming: false, number: call});
        audioEl.srcObject = remoteStream;
        audioEl.play();
      });

      call.on('close', function(){
        if (connection != null && connection.open){
          connection.close();
        }

        audioEl.srcObject = null;
        audioEl.pause();

        phoneTones.src = '../../assets/hang_up.wav';
        phoneTones.play();

        my.callbackConnection = null;
        endConnection.emit(null);
      });

      call.on('error', (error) => {
        console.log(error);
      });
    })
    .catch(function(err) {
      console.error('Failed to get local stream', err);
      endConnection.emit({err: 'Need access to microphone to make call.'});
    });
  }

  hangUp(myNumber: string){
    if (!this.voicemail){
      this.dataConn.send(
        JSON.stringify(
          {
            command: 'BYE',
            hangUpOn: (this.callConnection.metadata.caller == myNumber ? this.callConnection.metadata.target : this.callConnection.metadata.caller)
          }
        )
      );
    }
    this.voicemail = false;
    this.callConnection.close();
  }
}
