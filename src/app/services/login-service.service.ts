import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { env } from '../../assets/env';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type':  'application/json'
    })
  };

  constructor(
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private http: HttpClient,
    private router: Router
   ) {}

  login(x): Observable<any>{
    //login here through DB
    var r = this.http.post<String>(env.backendURL+"/login", x, this.httpOptions);

    r.subscribe(res => {
      if (!(res['errors'])){
        this.storage.set('VVOIP_user', res);
      }
    });

    return r;
  }

  logout(){
    this.storage.set('VVOIP_user', null);
  }

  displayAuthenticated(){
    if (this.getFromLocal('VVOIP_user') != null && this.router.url == '/dash'){
      return true;
    }
    return false;
  }

  authenticated(){
    if (this.getFromLocal('VVOIP_user') != null){
      return true;
    }
    return false;
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
