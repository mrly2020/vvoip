import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IpPhoneService } from '../../services/ip-phone.service';
import { Observable, Subscription } from 'rxjs';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  private now: any;
  private contacts: Array<any> = [];
  public ringing = false;
  public incoming = false;
  public callInProgress = false;
  public timeoutId = null;
  public dialNo: string = '';
  public buttons = [
    {id: "1"},
    {id: "2"},
    {id: "3"},
    {id: "4"},
    {id: "5"},
    {id: "6"},
    {id: "7"},
    {id: "8"},
    {id: "9"},
    {id: "call"},
    {id: "0"},
    {id: "call_end"}
  ];
  public callObservers: Array<Subscription> = [];
  public currentCall = {
    cid: '',
    number: '',
    duration: null
  };

  constructor(
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private ipPhoneService: IpPhoneService
  ) {
    let my = this;
    this.callObservers.push(this.ipPhoneService.openConnection.subscribe({
      next(call) {
        if (call != null){
          my.ringing = call.ringing;
          my.incoming = call.incoming;
          my.callInProgress = !call.ringing;
          my.currentCall.cid = call.number.options.metadata.cid;
          my.currentCall.number = call.incoming ? call.number.options.metadata.caller : call.number.options.metadata.target;
          my.currentCall.duration = call.ringing ? null : Date.now();

          if (call.incoming){
            my.timeoutId = setTimeout( function(my){
              my.ipPhoneService.userInteraction.emit("decline");
            }, 10000, my);
          }
        }
      }
    }));
    this.callObservers.push(this.ipPhoneService.endConnection.subscribe({
      next(end) {
        my.ringing = false;
        my.incoming = false;
        my.callInProgress = false;
        my.currentCall.cid = '';
        my.currentCall.number = '';
        my.currentCall.duration = '';

        if (end != null){
          //handle error emission
          console.log(end.err);
        }
      }
    }));

    setInterval(() => {
      this.now = Date.now();
    }, 1);

    this.getContacts();
  }

  getContacts(){
    this.ipPhoneService.getContacts(JSON.stringify( { phone: this.getFromLocal('VVOIP_user').phone_no } )).subscribe( res => {
      res.forEach( contact => {
        this.contacts.push({
          phone: contact.target_no,
          name: contact.stored_name,
          contactKey: contact.target_contact_key,
          callMade: contact.call_made
        })
      });
    });
  }

  getName(phone){
    let name = null;
    this.contacts.forEach(contact => {
      if (contact.phone == phone){
        name = contact.name;
      }
    });
    return name;
  }

  ngOnInit() {
  }

  keyAction(id) {
    if (id != "call" && id != "call_end"){
      //number button push
      this.dialNo += id;
    }
    else if (id == "call" && this.callInProgress == false && this.ringing == false){
      //dial out
      let key = null;
      this.contacts.forEach(contact => {
        if (contact.phone == this.dialNo){
          key = contact.contactKey;
        }
      });

      if (key == null){
        key = this.getFromLocal('VVOIP_user').contact_key;
      }

      this.ipPhoneService.dialOut(
        this.dialNo,
        this.getFromLocal('VVOIP_user').first_name + " " + this.getFromLocal('VVOIP_user').last_name,
        this.getFromLocal('VVOIP_user').phone_no,
        this.getFromLocal('VVOIP_user').id_key,
        this.getFromLocal('VVOIP_user').contact_key,
        key
      );
    }

    else if (id == "call_end" && this.callInProgress == false && this.ringing == false){
      //clear typed number
      this.dialNo = '';
    }

    else if (id == "call_end" && this.callInProgress) {
      //hang up
      this.ipPhoneService.hangUp(this.getFromLocal('VVOIP_user').phone_no);
    }
  }

  callLength(){
    if (this.currentCall.duration != null){
      return new Date(this.now - this.currentCall.duration);
    }
    return null;
  }

  answerIncomingCall(){
    clearTimeout(this.timeoutId);
    this.ipPhoneService.userInteraction.emit("answer");
  }

  declineIncomingCall(){
    clearTimeout(this.timeoutId);
    this.ipPhoneService.userInteraction.emit("decline");
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
