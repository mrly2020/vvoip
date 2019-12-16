import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup(
    { phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    }
  );

  constructor(
    private loginService: LoginServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.loginService.authenticated()){
      this.router.navigate(['dash']);
    }

    window["particlesJS"].load('particles-js', '../../../assets/particles.json', function() {});
  }

  sendLogin() {
    this.loginService.login( JSON.stringify({
        phone: this.loginForm.controls.phone.value,
        password: this.loginForm.controls.password.value
      })).subscribe(res => {
        //res is the entire data obj
        if (res.errors){
          //output to form
          this.loginForm.controls.phone.setErrors({wrong: "Incorrect Login."});
          this.loginForm.controls.password.setErrors({wrong: ""});
          console.log("ERROR: "+res.errors[0]);
        }
        else {
          this.router.navigate(['dash']);
        }
      });
  }

}
