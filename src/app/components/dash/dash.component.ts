import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service';
import { IpPhoneService } from '../../services/ip-phone.service';
import { ContactObject } from '../../../assets/contactObject';
import { CallObject } from '../../../assets/callObject';
import { Router } from '@angular/router';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import Peer from 'peerjs';
import { env } from '../../../assets/env';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  personalNo : number;
  contacts: Array<ContactObject> = [];
  calls: Array<CallObject> = [];

  constructor(
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private loginService: LoginServiceService,
    private ipPhoneService: IpPhoneService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (!this.loginService.authenticated()){
      this.router.navigate(['login']);
    }

    this.personalNo = this.getFromLocal('VVOIP_user').phone_no;

    this.getContacts();
    this.getCalls();

    this.ipPhoneService.connect(String(this.personalNo));
  }

  maxHeight(){
    //toolbar is 56 px
    return (document.getElementById('wrapper').clientHeight - 56) + 'px';
  }

  getContacts(){
    this.ipPhoneService.getContacts(JSON.stringify( { phone: this.personalNo } )).subscribe( res => {
      res.forEach( contact => {
        this.contacts.push({
          phone: contact.target_no,
          name: contact.stored_name,
          contactKey: contact.target_contact_key,
          callMade: contact.call_made
        })
      });

      this.contacts.sort(function(a, b){
        if (a.name == b.name) {return 0;}
        return (a.name>b.name) ? 1 : -1;
      });
    });
  }

  getCalls(){
    this.ipPhoneService.getCalls(JSON.stringify( { phone: this.personalNo } )).subscribe( res => {
      res.forEach( call => {
        this.calls.push({
          caller: call.caller_no,
          target: call.target_no,

          contactKey: call.target_contact_key,
          date: call.start,
          startTime: call.start_time,
          endTime: call.end_time,

          name: (call.stored_name == null ? call.caller_id : call.stored_name),
          myContact: !(call.stored_name == null),
          missed: call.missed
        });
      });

      this.calls.sort( function(a, b){
        let timeA = new Date(a.date);
        let timeB = new Date(b.date);

        timeA.setHours(Number(a.startTime.split(':')[0]), Number(a.startTime.split(':')[1]), Number(a.startTime.split(':')[2]));
        timeB.setHours(Number(b.startTime.split(':')[0]), Number(b.startTime.split(':')[1]), Number(b.startTime.split(':')[2]));
        return (timeB.getTime() - timeA.getTime());
      });
    });
  }

  addContact(){

  }

  getId(phone){
    let contactName = null;
    this.contacts.forEach(contact => {
      if (contact.phone == phone){
        contactName = contact.name;
      }
    });

    return contactName == null ? phone : contactName;
  }

  getContact(phone){
    let contact = null;
    this.contacts.forEach(contactObj => {
      if (contactObj.phone == phone){
        contact = contactObj;
      }
    });

    return contact;
  }

  whoCalled(caller){
    if (caller == this.personalNo){
      return 'You called them.'
    }
    return 'They called you.'
  }

  dial(targetPhone: number){

    let key = null;
    this.contacts.forEach(contact => {
      if (contact.phone == targetPhone){
        key = contact.contactKey;
      }
    });

    if (key == null){
      key = this.getFromLocal('VVOIP_user').contact_key;
    }

    this.ipPhoneService.dialOut(
      String(targetPhone),
      this.getFromLocal('VVOIP_user').first_name + " " + this.getFromLocal('VVOIP_user').last_name,
      String(this.personalNo),
      this.getFromLocal('VVOIP_user').id_key,
      this.getFromLocal('VVOIP_user').contact_key,
      key
    );
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
