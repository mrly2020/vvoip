import { Component, Inject } from '@angular/core';
import { LoginServiceService } from './services/login-service.service';
import { Router } from '@angular/router';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { IpPhoneService } from './services/ip-phone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VVOIP';
  username = '';

  constructor(
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private loginService: LoginServiceService,
    private router: Router,
    private ipPhoneService: IpPhoneService
    ) { }

  authenticated(){
    if (this.loginService.displayAuthenticated()){
      this.username = this.getFromLocal('VVOIP_user').first_name + ' ' + this.getFromLocal('VVOIP_user').last_name;
      return true;
    }

    this.username = '';
    return false;
  }

  falseIdKey(element){
    this.ipPhoneService.falsifyId(element.checked);
  }

  falseContactKey(element){
    this.ipPhoneService.falsifyContact(element.checked);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
