(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/peerjs/dist sync recursive":
/*!***************************************!*\
  !*** ./node_modules/peerjs/dist sync ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/peerjs/dist sync recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" [ngClass]=\"{'grid-format': this.authenticated()}\">\n  <mat-toolbar *ngIf=\"this.authenticated()\" color=\"primary\">\n    Verified VOIP\n\n    <div id=\"right-hand\">\n      <span style='font-size: 11pt; margin-right: 20px;'>\n        <mat-checkbox style='margin-right: 10px;' (change)='falseIdKey($event)'>Falsify ID Key</mat-checkbox>\n        <mat-checkbox (change)='falseContactKey($event)'>Falsify Contact Key</mat-checkbox>\n      </span>\n      <h3>Hi, {{username}}</h3>\n      <button mat-raised-button id=\"logout\" (click)=\"logout()\">Logout</button>\n    </div>\n  </mat-toolbar>\n\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dash/dash.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dash/dash.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'max-height': maxHeight(), 'min-height': maxHeight()}\" id=\"tri-fold\">\n  <mat-card id=\"rolodex\" class=\"mat-elevation-z2\">\n\n    <div class='stay ltr'>\n      <h2> Contacts\n        <button matTooltipClass=\"tooltip-larger\" matTooltip='Add Contact' color='primary' (click)='addContact()'\n        style=\"float: right; margin-right: 10px;\" mat-icon-button>\n          <mat-icon style='font-size: 35px; width: 35px;'>add_circle</mat-icon>\n        </button>\n      </h2>\n      <mat-divider></mat-divider>\n    </div>\n\n    <span class='ltr' *ngFor=\"let contact of contacts\">\n      <mat-card class=\"contact\" *ngIf='contact.name != null'>\n        <div class=\"contact-grid\">\n          <mat-card-title><a (click)='dial(contact.phone)'>{{contact.name}}</a></mat-card-title>\n          <mat-card-subtitle><a class='subtitle-link' (click)='dial(contact.phone)'>{{contact.phone}}</a></mat-card-subtitle>\n\n          <mat-icon class=\"contact-status two-way-verified\"\n          *ngIf=\"contact.contactKey != null && contact.callMade\" matTooltipClass=\"tooltip-larger\" matTooltip=\"Trusted; You have called eachother\">done_all</mat-icon>\n          <mat-icon class=\"contact-status one-way-verified\"\n          *ngIf=\"contact.contactKey != null && !contact.callMade\" matTooltipClass=\"tooltip-larger\" matTooltip=\"They have called you\">call_missed</mat-icon>\n          <mat-icon class=\"contact-status one-way-verified\"\n          *ngIf=\"contact.contactKey == null && contact.callMade\" matTooltipClass=\"tooltip-larger\" matTooltip=\"You have called them\">call_made</mat-icon>\n          <mat-icon class=\"contact-status unknown\"\n          *ngIf=\"contact.contactKey == null && !contact.callMade\" matTooltipClass=\"tooltip-larger\" matTooltip=\"Unkown Contact\">trip_origin</mat-icon>\n        </div>\n      </mat-card>\n    </span>\n  </mat-card>\n\n  <mat-card id=\"details\" class=\"mat-elevation-z2\">\n\n    <div class='stay ltr'>\n      <h2> Call History </h2>\n      <mat-divider></mat-divider>\n    </div>\n\n    <span class='ltr'>\n      <mat-card class=\"call\" *ngFor=\"let call of calls\">\n        <div class=\"call-grid\">\n          <mat-card-title>\n            <span matTooltipClass=\"tooltip-larger\" matTooltip='{{call.caller == personalNo ? call.target : call.caller}}' [ngClass]='{\"caller-id\": !call.myContact, \"missed\": call.missed}'>\n              <a (click)='dial(call.caller == personalNo ? call.target : call.caller)'>{{call.caller == personalNo ? getId(call.target) : call.name}}</a>\n            </span>\n            <span class='time'>{{call.date | date}}, {{call.startTime.split(':')[0]}}:{{call.startTime.split(':')[1]}}\n\n              <mat-icon class=\"contact-status two-way-verified\"\n              *ngIf=\"getContact(call.caller == personalNo ? call.target : call.caller).contactKey != null && getContact(call.caller == personalNo ? call.target : call.caller).callMade\"\n              matTooltipClass=\"tooltip-larger\" matTooltip=\"Trusted; You have called eachother\">done_all</mat-icon>\n              <mat-icon class=\"contact-status one-way-verified\"\n              *ngIf=\"getContact(call.caller == personalNo ? call.target : call.caller).contactKey != null && !getContact(call.caller == personalNo ? call.target : call.caller).callMade\"\n              matTooltipClass=\"tooltip-larger\" matTooltip=\"They have called you\">call_missed</mat-icon>\n              <mat-icon class=\"contact-status one-way-verified\"\n              *ngIf=\"getContact(call.caller == personalNo ? call.target : call.caller).contactKey == null && getContact(call.caller == personalNo ? call.target : call.caller).callMade\"\n              matTooltipClass=\"tooltip-larger\" matTooltip=\"You have called them\">call_made</mat-icon>\n              <mat-icon class=\"contact-status unknown\"\n              *ngIf=\"getContact(call.caller == personalNo ? call.target : call.caller).contactKey == null && !getContact(call.caller == personalNo ? call.target : call.caller).callMade\"\n              matTooltipClass=\"tooltip-larger\" matTooltip=\"Unkown Contact\">trip_origin</mat-icon>\n            </span>\n          </mat-card-title>\n          <mat-card-subtitle>{{whoCalled(call.caller)}}</mat-card-subtitle>\n        </div>\n      </mat-card>\n    </span>\n  </mat-card>\n\n  <app-keypad></app-keypad>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/keypad/keypad.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/keypad/keypad.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='keypad'>\n  <mat-card *ngIf='!(callInProgress || ringing)' id=\"keypadGrid\">\n    <div class=\"numberWrapper\">\n      <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n        <mat-label>Phone Number</mat-label>\n        <input type=\"text\" matInput [(ngModel)]=\"dialNo\">\n      </mat-form-field>\n\n    </div>\n\n    <ng-container *ngFor=\"let keyButton of buttons\">\n      <button *ngIf=\"keyButton.id != 'call_end' && keyButton.id != 'call'; else elseBlock\" class=\"keypadButton\"\n      mat-raised-button id={{keyButton.id}} (click)=\"keyAction(keyButton.id)\" disabled={{callInProgress}}>\n        {{keyButton.id}}\n      </button>\n\n      <ng-template #elseBlock>\n        <button mat-raised-button id={{keyButton.id}} (click)=\"keyAction(keyButton.id)\"\n        color=\"{{keyButton.id == 'call' ? 'primary':'warn'}}\" isRoundButton=true class=\"keypadButton\">\n          <mat-icon>{{keyButton.id}}</mat-icon>\n        </button>\n      </ng-template>\n    </ng-container>\n  </mat-card>\n\n  <mat-card *ngIf='(callInProgress || ringing)' id='currentCall'>\n    <h1> {{incoming ? currentCall.cid : getName(currentCall.number)}} </h1>\n    <h3> ( {{currentCall.number}} ) </h3>\n\n    <h2> {{callLength() | date: 'mm:ss' }} </h2>\n\n    <button *ngIf='!(incoming && ringing)' mat-raised-button class='centerButton' id='call_end'\n    (click)=\"keyAction('call_end')\" color=\"{{ringing ? 'link' : 'warn'}}\" isRoundButton=true>\n      <span id='call_end' *ngIf='callInProgress'> End Call <mat-icon>call_end</mat-icon> </span>\n      <span *ngIf='ringing'> Ringing... </span>\n    </button>\n\n    <button *ngIf='incoming && ringing' mat-raised-button class='centerButton' id='answer'\n    (click)=\"answerIncomingCall()\" color=\"primary\" isRoundButton=true>\n      <span> Answer <mat-icon>call_end</mat-icon> </span>\n    </button>\n\n    <button *ngIf='incoming && ringing' mat-raised-button class='centerButton' id='decline'\n    (click)=\"declineIncomingCall()\" color=\"warn\" isRoundButton=true>\n      <span> Decline <mat-icon>call_end</mat-icon> </span>\n    </button>\n\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"grid-container\">\n  <div id=\"particles-js\"></div>\n  <mat-card>\n    <div id='split'>\n      <div style='border-right: 1px solid rgba(0,0,0,.2);'>\n        <mat-icon id=\"logo\">call</mat-icon>\n        <h3>Welcome to my VVOIP Demo.</h3>\n\n        <form [formGroup]='loginForm' (ngSubmit)=\"sendLogin()\">\n          <mat-form-field>\n            <input matInput type=\"number\" placeholder=\"Phone No.\" formControlName='phone'>\n            <mat-error *ngIf=\"loginForm.controls.phone.errors != null\"> {{loginForm.controls.phone.errors.required == true ?\n            'Phone Required' : loginForm.controls.phone.errors.wrong}} </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput type=\"password\" placeholder=\"Password\" formControlName='password'>\n          </mat-form-field>\n          <button type=\"submit\" [disabled]=\"!loginForm.valid\" style=\"display:none\"> Submit </button>\n        </form>\n\n        <button mat-raised-button routerLink='/register'> Create An Account </button>\n        <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!loginForm.valid\" (click)=\"sendLogin()\"> Submit </button>\n      </div>\n\n      <p>\n        This is an educational project by Daniel Marley for Prof. Heller's Computer Networks Course at The George Washington University Department of Computer Science.\n        <br><br>\n        No personal information should be placed on this service and none should be divulged over a call, as it may be listened to. Use of this project is an acceptance of these terms.\n      </p>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar{\n  font-family: 'Montserrat', sans-serif;\n  font-size: 36px;\n}\n\n#wrapper{\n  display: -webkit-box;\n  display: flex;\n  height: 100vh;\n  min-height: 100vh;\n  max-height: 100vh;\n  overflow-y: hidden;\n}\n\n.grid-format{\n  display: grid !important;\n  grid-template: \"a\" 64px\n                 \"b\" 1fr / 100%;\n}\n\n#right-hand{\n  position: absolute;\n  right: 15px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n#logout{\n  margin-left: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7RUFDckMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QjsrQkFDNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDJCQUFvQjtFQUFwQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFye1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDM2cHg7XG59XG5cbiN3cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmdyaWQtZm9ybWF0e1xuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG4gIGdyaWQtdGVtcGxhdGU6IFwiYVwiIDY0cHhcbiAgICAgICAgICAgICAgICAgXCJiXCIgMWZyIC8gMTAwJTtcbn1cblxuI3JpZ2h0LWhhbmR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4jbG9nb3V0e1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login-service.service */ "./src/app/services/login-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
/* harmony import */ var _services_ip_phone_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/ip-phone.service */ "./src/app/services/ip-phone.service.ts");






let AppComponent = class AppComponent {
    constructor(storage, loginService, router, ipPhoneService) {
        this.storage = storage;
        this.loginService = loginService;
        this.router = router;
        this.ipPhoneService = ipPhoneService;
        this.title = 'VVOIP';
        this.username = '';
    }
    authenticated() {
        if (this.loginService.displayAuthenticated()) {
            this.username = this.getFromLocal('VVOIP_user').first_name + ' ' + this.getFromLocal('VVOIP_user').last_name;
            return true;
        }
        this.username = '';
        return false;
    }
    falseIdKey(element) {
        this.ipPhoneService.falsifyId(element.checked);
    }
    falseContactKey(element) {
        this.ipPhoneService.falsifyContact(element.checked);
    }
    getFromLocal(key) {
        return this.storage.get(key);
    }
    logout() {
        this.loginService.logout();
        this.router.navigate(['login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"],] }] },
    { type: _services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_ip_phone_service__WEBPACK_IMPORTED_MODULE_5__["IpPhoneService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"]))
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dash_dash_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dash/dash.component */ "./src/app/components/dash/dash.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/keypad/keypad.component */ "./src/app/components/keypad/keypad.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
























const appRoutes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
    { path: 'dash', component: _components_dash_dash_component__WEBPACK_IMPORTED_MODULE_17__["DashComponent"] },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
    //{ path: '**', component: PageNotFoundComponent }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _components_dash_dash_component__WEBPACK_IMPORTED_MODULE_17__["DashComponent"],
            _components_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_20__["KeypadComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            ),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_23__["StorageServiceModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/dash/dash.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/dash/dash.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tri-fold{\n  display: grid;\n  height: 100%;\n  grid-template: 100% / 1fr 1.5fr .75fr;\n}\n\n#rolodex, #details {\n  box-shadow: none !important;\n  border-right: 1px solid rgba(0,0,0,.2);\n  padding-right: 0px;\n  max-height: inherit;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  direction: rtl;\n  padding: 0px;\n}\n\n.stay{\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 2;\n  background: inherit;\n}\n\n.stay>h2{\n  padding-top: 0.83em;\n  padding-bottom: 0.83em;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding-left: 16px;\n}\n\n.ltr{\n  direction: ltr;\n}\n\na{\n  cursor: pointer;\n  text-decoration: underline;\n}\n\na:visited{\n  color: black;\n}\n\na:hover{\n  color: grey;\n}\n\n.subtitle-link:link{\n  color: grey;\n}\n\n.subtitle-link:visited{\n  color: grey;\n}\n\n.contact-grid{\n  display: grid;\n  grid-template: \"a b\" 1fr\n                  \"c d\"/ 1fr 35px;\n}\n\n.mat-card-title{\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.mat-card-subtitle{\n  grid-column: 1;\n  grid-row: 2;\n  margin: 0px;\n}\n\n.contact-status{\n  grid-column: 2;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  font-size: 35px;\n  height: 35px;\n  width: 35px;\n  margin: auto;\n}\n\n.unknown{\n  color: #607d8b;\n  font-size: 24px;\n  margin-left: 11px;\n}\n\n.two-way-verified{\n  color: #448aff;\n}\n\n.one-way-verified{\n  color: #83b9ff\n}\n\n.caller-id{\n  font-style: italic;\n}\n\n.time{\n  float: right;\n  font-size: smaller;\n}\n\n.call{\n  z-index: 1;\n  margin-left: 16px;\n}\n\n.contact{\n  z-index: 1;\n  margin-left: 16px;\n}\n\n.missed>a:link{\n  color: #ef5350;\n}\n\n.missed>a:visited{\n  color: #ef5350;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoL2Rhc2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7aUNBQytCO0FBQ2pDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoL2Rhc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0cmktZm9sZHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLXRlbXBsYXRlOiAxMDAlIC8gMWZyIDEuNWZyIC43NWZyO1xufVxuXG4jcm9sb2RleCwgI2RldGFpbHMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjIpO1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uc3RheXtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5zdGF5Pmgye1xuICBwYWRkaW5nLXRvcDogMC44M2VtO1xuICBwYWRkaW5nLWJvdHRvbTogMC44M2VtO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4ubHRye1xuICBkaXJlY3Rpb246IGx0cjtcbn1cblxuYXtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuYTp2aXNpdGVke1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmE6aG92ZXJ7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uc3VidGl0bGUtbGluazpsaW5re1xuICBjb2xvcjogZ3JleTtcbn1cblxuLnN1YnRpdGxlLWxpbms6dmlzaXRlZHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5jb250YWN0LWdyaWR7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IFwiYSBiXCIgMWZyXG4gICAgICAgICAgICAgICAgICBcImMgZFwiLyAxZnIgMzVweDtcbn1cblxuLm1hdC1jYXJkLXRpdGxle1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG59XG5cbi5tYXQtY2FyZC1zdWJ0aXRsZXtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAyO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmNvbnRhY3Qtc3RhdHVze1xuICBncmlkLWNvbHVtbjogMjtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gIGdyaWQtcm93LWVuZDogMztcbiAgZm9udC1zaXplOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi51bmtub3due1xuICBjb2xvcjogIzYwN2Q4YjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMTFweDtcbn1cblxuLnR3by13YXktdmVyaWZpZWR7XG4gIGNvbG9yOiAjNDQ4YWZmO1xufVxuXG4ub25lLXdheS12ZXJpZmllZHtcbiAgY29sb3I6ICM4M2I5ZmZcbn1cblxuLmNhbGxlci1pZHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4udGltZXtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbi5jYWxse1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5jb250YWN0e1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLm1pc3NlZD5hOmxpbmt7XG4gIGNvbG9yOiAjZWY1MzUwO1xufVxuLm1pc3NlZD5hOnZpc2l0ZWR7XG4gIGNvbG9yOiAjZWY1MzUwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/dash/dash.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/dash/dash.component.ts ***!
  \***************************************************/
/*! exports provided: DashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashComponent", function() { return DashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login-service.service */ "./src/app/services/login-service.service.ts");
/* harmony import */ var _services_ip_phone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ip-phone.service */ "./src/app/services/ip-phone.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");






let DashComponent = class DashComponent {
    constructor(storage, loginService, ipPhoneService, router, cdr) {
        this.storage = storage;
        this.loginService = loginService;
        this.ipPhoneService = ipPhoneService;
        this.router = router;
        this.cdr = cdr;
        this.contacts = [];
        this.calls = [];
    }
    ngOnInit() {
        if (!this.loginService.authenticated()) {
            this.router.navigate(['login']);
        }
        this.personalNo = this.getFromLocal('VVOIP_user').phone_no;
        this.getContacts();
        this.getCalls();
        this.ipPhoneService.connect(String(this.personalNo));
    }
    maxHeight() {
        //toolbar is 56 px
        return (document.getElementById('wrapper').clientHeight - 56) + 'px';
    }
    getContacts() {
        this.ipPhoneService.getContacts(JSON.stringify({ phone: this.personalNo })).subscribe(res => {
            res.forEach(contact => {
                this.contacts.push({
                    phone: contact.target_no,
                    name: contact.stored_name,
                    contactKey: contact.target_contact_key,
                    callMade: contact.call_made
                });
            });
            this.contacts.sort(function (a, b) {
                if (a.name == b.name) {
                    return 0;
                }
                return (a.name > b.name) ? 1 : -1;
            });
        });
    }
    getCalls() {
        this.ipPhoneService.getCalls(JSON.stringify({ phone: this.personalNo })).subscribe(res => {
            res.forEach(call => {
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
            this.calls.sort(function (a, b) {
                let timeA = new Date(a.date);
                let timeB = new Date(b.date);
                timeA.setHours(Number(a.startTime.split(':')[0]), Number(a.startTime.split(':')[1]), Number(a.startTime.split(':')[2]));
                timeB.setHours(Number(b.startTime.split(':')[0]), Number(b.startTime.split(':')[1]), Number(b.startTime.split(':')[2]));
                return (timeB.getTime() - timeA.getTime());
            });
        });
    }
    addContact() {
    }
    getId(phone) {
        let contactName = null;
        this.contacts.forEach(contact => {
            if (contact.phone == phone) {
                contactName = contact.name;
            }
        });
        return contactName == null ? phone : contactName;
    }
    getContact(phone) {
        let contact = null;
        this.contacts.forEach(contactObj => {
            if (contactObj.phone == phone) {
                contact = contactObj;
            }
        });
        return contact;
    }
    whoCalled(caller) {
        if (caller == this.personalNo) {
            return 'You called them.';
        }
        return 'They called you.';
    }
    dial(targetPhone) {
        let key = null;
        this.contacts.forEach(contact => {
            if (contact.phone == targetPhone) {
                key = contact.contactKey;
            }
        });
        if (key == null) {
            key = this.getFromLocal('VVOIP_user').contact_key;
        }
        this.ipPhoneService.dialOut(String(targetPhone), this.getFromLocal('VVOIP_user').first_name + " " + this.getFromLocal('VVOIP_user').last_name, String(this.personalNo), this.getFromLocal('VVOIP_user').id_key, this.getFromLocal('VVOIP_user').contact_key, key);
    }
    saveInLocal(key, val) {
        this.storage.set(key, val);
    }
    getFromLocal(key) {
        return this.storage.get(key);
    }
};
DashComponent.ctorParameters = () => [
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["SESSION_STORAGE"],] }] },
    { type: _services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"] },
    { type: _services_ip_phone_service__WEBPACK_IMPORTED_MODULE_3__["IpPhoneService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
DashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dash',
        template: __webpack_require__(/*! raw-loader!./dash.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dash/dash.component.html"),
        styles: [__webpack_require__(/*! ./dash.component.css */ "./src/app/components/dash/dash.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["SESSION_STORAGE"]))
], DashComponent);



/***/ }),

/***/ "./src/app/components/keypad/keypad.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/keypad/keypad.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#keypad{\n  height: 100%;\n  max-height: 100%;\n}\n\n#keypadGrid{\n  height: 96%;\n  display: grid;\n  grid-template:  \"a a a\" .5fr\n                  \"b c d\" 1fr\n                  \"e f g\" 1fr\n                  \"h i j\" 1fr\n                  \"k l m\" 1fr / 1fr 1fr 1fr;\n  grid-gap: 4%;\n}\n\n.numberWrapper{\n  width: 100%;\n  grid-column-start: 1;\n  grid-column-end: 4;\n}\n\n.keypadButton{\n  font-size: 28pt !important;\n}\n\n#currentCall{\n  background-color: #202020;\n  color: #eeeeee;\n  height: 100%;\n  border-radius: 0px;\n}\n\n#currentCall>h1{\n  font-size: 45pt;\n  margin-top: 30%;\n  margin-bottom: 0px;\n  text-align: center;\n}\n\n#currentCall>h3{\n  color: #aaaaaa;\n  font-size: 25pt;\n  margin-top: 15px;\n  text-align: center;\n}\n\n#currentCall>h2{\n  margin-top: 15%;\n  font-size: 28pt;\n  text-align: center;\n}\n\n.centerButton {\n  font-size: larger;\n  display: -webkit-box;\n  display: flex;\n  margin: auto auto;\n  margin-top: 25%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9rZXlwYWQva2V5cGFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYjs7OzsyQ0FJeUM7RUFDekMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBYTtFQUFiLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMva2V5cGFkL2tleXBhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2tleXBhZHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4ja2V5cGFkR3JpZHtcbiAgaGVpZ2h0OiA5NiU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6ICBcImEgYSBhXCIgLjVmclxuICAgICAgICAgICAgICAgICAgXCJiIGMgZFwiIDFmclxuICAgICAgICAgICAgICAgICAgXCJlIGYgZ1wiIDFmclxuICAgICAgICAgICAgICAgICAgXCJoIGkgalwiIDFmclxuICAgICAgICAgICAgICAgICAgXCJrIGwgbVwiIDFmciAvIDFmciAxZnIgMWZyO1xuICBncmlkLWdhcDogNCU7XG59XG5cbi5udW1iZXJXcmFwcGVye1xuICB3aWR0aDogMTAwJTtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogNDtcbn1cblxuLmtleXBhZEJ1dHRvbntcbiAgZm9udC1zaXplOiAyOHB0ICFpbXBvcnRhbnQ7XG59XG5cbiNjdXJyZW50Q2FsbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgY29sb3I6ICNlZWVlZWU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4jY3VycmVudENhbGw+aDF7XG4gIGZvbnQtc2l6ZTogNDVwdDtcbiAgbWFyZ2luLXRvcDogMzAlO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2N1cnJlbnRDYWxsPmgze1xuICBjb2xvcjogI2FhYWFhYTtcbiAgZm9udC1zaXplOiAyNXB0O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjdXJyZW50Q2FsbD5oMntcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBmb250LXNpemU6IDI4cHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNlbnRlckJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgbWFyZ2luLXRvcDogMjUlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/keypad/keypad.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/keypad/keypad.component.ts ***!
  \*******************************************************/
/*! exports provided: KeypadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeypadComponent", function() { return KeypadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_ip_phone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ip-phone.service */ "./src/app/services/ip-phone.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");




let KeypadComponent = class KeypadComponent {
    constructor(storage, ipPhoneService) {
        this.storage = storage;
        this.ipPhoneService = ipPhoneService;
        this.contacts = [];
        this.ringing = false;
        this.incoming = false;
        this.callInProgress = false;
        this.timeoutId = null;
        this.dialNo = '';
        this.buttons = [
            { id: "1" },
            { id: "2" },
            { id: "3" },
            { id: "4" },
            { id: "5" },
            { id: "6" },
            { id: "7" },
            { id: "8" },
            { id: "9" },
            { id: "call" },
            { id: "0" },
            { id: "call_end" }
        ];
        this.callObservers = [];
        this.currentCall = {
            cid: '',
            number: '',
            duration: null
        };
        let my = this;
        this.callObservers.push(this.ipPhoneService.openConnection.subscribe({
            next(call) {
                if (call != null) {
                    my.ringing = call.ringing;
                    my.incoming = call.incoming;
                    my.callInProgress = !call.ringing;
                    my.currentCall.cid = call.number.options.metadata.cid;
                    my.currentCall.number = call.incoming ? call.number.options.metadata.caller : call.number.options.metadata.target;
                    my.currentCall.duration = call.ringing ? null : Date.now();
                    if (call.incoming) {
                        my.timeoutId = setTimeout(function (my) {
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
                if (end != null) {
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
    getContacts() {
        this.ipPhoneService.getContacts(JSON.stringify({ phone: this.getFromLocal('VVOIP_user').phone_no })).subscribe(res => {
            res.forEach(contact => {
                this.contacts.push({
                    phone: contact.target_no,
                    name: contact.stored_name,
                    contactKey: contact.target_contact_key,
                    callMade: contact.call_made
                });
            });
        });
    }
    getName(phone) {
        let name = null;
        this.contacts.forEach(contact => {
            if (contact.phone == phone) {
                name = contact.name;
            }
        });
        return name;
    }
    ngOnInit() {
    }
    keyAction(id) {
        if (id != "call" && id != "call_end") {
            //number button push
            this.dialNo += id;
        }
        else if (id == "call" && this.callInProgress == false && this.ringing == false) {
            //dial out
            let key = null;
            this.contacts.forEach(contact => {
                if (contact.phone == this.dialNo) {
                    key = contact.contactKey;
                }
            });
            if (key == null) {
                key = this.getFromLocal('VVOIP_user').contact_key;
            }
            this.ipPhoneService.dialOut(this.dialNo, this.getFromLocal('VVOIP_user').first_name + " " + this.getFromLocal('VVOIP_user').last_name, this.getFromLocal('VVOIP_user').phone_no, this.getFromLocal('VVOIP_user').id_key, this.getFromLocal('VVOIP_user').contact_key, key);
        }
        else if (id == "call_end" && this.callInProgress == false && this.ringing == false) {
            //clear typed number
            this.dialNo = '';
        }
        else if (id == "call_end" && this.callInProgress) {
            //hang up
            this.ipPhoneService.hangUp(this.getFromLocal('VVOIP_user').phone_no);
        }
    }
    callLength() {
        if (this.currentCall.duration != null) {
            return new Date(this.now - this.currentCall.duration);
        }
        return null;
    }
    answerIncomingCall() {
        clearTimeout(this.timeoutId);
        this.ipPhoneService.userInteraction.emit("answer");
    }
    declineIncomingCall() {
        clearTimeout(this.timeoutId);
        this.ipPhoneService.userInteraction.emit("decline");
    }
    getFromLocal(key) {
        return this.storage.get(key);
    }
};
KeypadComponent.ctorParameters = () => [
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"],] }] },
    { type: _services_ip_phone_service__WEBPACK_IMPORTED_MODULE_2__["IpPhoneService"] }
];
KeypadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-keypad',
        template: __webpack_require__(/*! raw-loader!./keypad.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/keypad/keypad.component.html"),
        styles: [__webpack_require__(/*! ./keypad.component.css */ "./src/app/components/keypad/keypad.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"]))
], KeypadComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#particles-js{\n  background: #3f51b5;\n  height: inherit;\n  width: inherit;\n  grid-row-start: 1;\n  grid-row-end: 4;\n  grid-column-start: 1;\n  grid-column-end: 4;\n}\n\n#grid-container{\n  display: grid;\n  height: 100%;\n  width: 100vw;\n  grid-template: 'a a a' 20%\n                 'b c d' 60%\n                 'e e e' 20% / 1fr 4fr 1fr;\n}\n\nmat-card{\n  width: 100%;\n  grid-row: 2;\n  grid-column: 2;\n  display: inline-table;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n}\n\n#split{\n  display: grid;\n  grid-template: 'a b' 100% / 1fr 1fr;\n  height: 100%;\n  width: 100%;\n}\n\n#logo{\n  display: -webkit-box;\n  display: flex;\n  height: 250px;\n  width: 250px;\n  margin: auto;\n  margin-bottom: 15px;\n  border-radius: 125px;\n  font-size: 250px;\n}\n\np{\n  text-align: center;\n  line-height: 20pt;\n  font-size: 12pt;\n  display: -webkit-box;\n  display: flex;\n  margin: auto auto;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\nh3{\n  display: -webkit-box;\n  display: flex;\n  margin: auto auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\nmat-form-field{\n  width: 40%;\n  margin: 5%;\n  margin-bottom: 0px;\n}\n\nbutton{\n  display: inline;\n  width: 40%;\n  margin: 5%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1o7OzBDQUV3QztBQUMxQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLHFCQUFxQjtFQUNyQiwrQkFBdUI7RUFBdkIsNEJBQXVCO0VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQWE7RUFBYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhcnRpY2xlcy1qc3tcbiAgYmFja2dyb3VuZDogIzNmNTFiNTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogaW5oZXJpdDtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gIGdyaWQtcm93LWVuZDogNDtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogNDtcbn1cblxuI2dyaWQtY29udGFpbmVye1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDB2dztcbiAgZ3JpZC10ZW1wbGF0ZTogJ2EgYSBhJyAyMCVcbiAgICAgICAgICAgICAgICAgJ2IgYyBkJyA2MCVcbiAgICAgICAgICAgICAgICAgJ2UgZSBlJyAyMCUgLyAxZnIgNGZyIDFmcjtcbn1cblxubWF0LWNhcmR7XG4gIHdpZHRoOiAxMDAlO1xuICBncmlkLXJvdzogMjtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbiNzcGxpdHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogJ2EgYicgMTAwJSAvIDFmciAxZnI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNsb2dve1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTI1cHg7XG4gIGZvbnQtc2l6ZTogMjUwcHg7XG59XG5cbnB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHQ7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbmgze1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG5tYXQtZm9ybS1maWVsZHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5idXR0b257XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luOiA1JTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_login_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-service.service */ "./src/app/services/login-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({ phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ngOnInit() {
        if (this.loginService.authenticated()) {
            this.router.navigate(['dash']);
        }
        window["particlesJS"].load('particles-js', '../../../assets/particles.json', function () { });
    }
    sendLogin() {
        this.loginService.login(JSON.stringify({
            phone: this.loginForm.controls.phone.value,
            password: this.loginForm.controls.password.value
        })).subscribe(res => {
            //res is the entire data obj
            if (res.errors) {
                //output to form
                this.loginForm.controls.phone.setErrors({ wrong: "Incorrect Login." });
                this.loginForm.controls.password.setErrors({ wrong: "" });
                console.log("ERROR: " + res.errors[0]);
            }
            else {
                this.router.navigate(['dash']);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_login_service_service__WEBPACK_IMPORTED_MODULE_3__["LoginServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/services/ip-phone.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/ip-phone.service.ts ***!
  \**********************************************/
/*! exports provided: IpPhoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpPhoneService", function() { return IpPhoneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _assets_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/env */ "./src/assets/env.ts");
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! peerjs */ "./node_modules/peerjs/dist/peerjs.min.js");
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(peerjs__WEBPACK_IMPORTED_MODULE_5__);







let IpPhoneService = class IpPhoneService {
    constructor(http, _snackBar) {
        this.http = http;
        this._snackBar = _snackBar;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            })
        };
        this.falseIdKey = false;
        this.falseContactKey = false;
        this.voicemail = false;
        this.openConnection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.endConnection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userInteraction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.audioEl = document.getElementsByTagName('audio')[0];
        this.phoneTones = document.getElementsByTagName('audio')[1];
    }
    ;
    getContacts(phoneNo) {
        return this.http.post(_assets_env__WEBPACK_IMPORTED_MODULE_4__["env"].backendURL + "/phone/contacts", phoneNo, this.httpOptions);
    }
    getCalls(phoneNo) {
        return this.http.post(_assets_env__WEBPACK_IMPORTED_MODULE_4__["env"].backendURL + "/phone/call_logs", phoneNo, this.httpOptions);
    }
    falsifyId(value) {
        this.falseIdKey = value;
    }
    falsifyContact(value) {
        this.falseContactKey = value;
    }
    //register with Peer Server
    connect(phoneNo) {
        this.peer = new peerjs__WEBPACK_IMPORTED_MODULE_5___default.a(phoneNo, { host: _assets_env__WEBPACK_IMPORTED_MODULE_4__["env"].PEERSERVERHOST, port: 9000, path: '/operator' });
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
            if (!call.metadata.status && my.callConnection != null && call.metadata.command == 'INVITE') {
                console.log(JSON.stringify(call.metadata));
                console.log('i am busy, go away');
                call.answer(null);
                call.close();
                my.dataConn.send(JSON.stringify({ command: 'ACK<SEND_TO_VOICEMAIL>', caller: call.metadata.caller }));
            }
            else if (!call.metadata.status && call.metadata.command == 'INVITE') {
                console.log(JSON.stringify(call.metadata));
                openConnection.emit({ ringing: true, incoming: true, number: call });
                phoneTones.src = '../../assets/ringing_tone.mp3';
                phoneTones.play();
                call.on('close', function () {
                    audioEl.srcObject = null;
                    audioEl.pause();
                    phoneTones.src = '../../assets/hang_up.wav';
                    phoneTones.play();
                    my.callConnection = null;
                    endConnection.emit(null);
                });
                userInteractionSub = userInteraction.subscribe({
                    next(interaction) {
                        if (interaction == 'answer') {
                            navigator.mediaDevices.getUserMedia({ video: false, audio: true })
                                .then(function (stream) {
                                my.callConnection = call;
                                phoneTones.pause();
                                phoneTones.src = '';
                                call.answer(stream); // Answer the call with an A/V stream.
                                call.on('stream', (remoteStream) => {
                                    openConnection.emit({ ringing: false, incoming: true, number: call });
                                    audioEl.srcObject = remoteStream;
                                    audioEl.play();
                                });
                            })
                                .catch(function (err) {
                                phoneTones.pause();
                                phoneTones.src = '';
                                console.error('Failed to get local stream', err);
                                endConnection.emit({ err: 'Need access to microphone to make call.' });
                            });
                            userInteractionSub._subscriptions[0].unsubscribe();
                        }
                        else if (interaction == 'decline') {
                            phoneTones.pause();
                            phoneTones.src = '';
                            call.answer(null);
                            call.close();
                            my.dataConn.send(JSON.stringify({ command: 'ACK<SEND_TO_VOICEMAIL>', caller: call.metadata.caller }));
                            userInteractionSub._subscriptions[0].unsubscribe();
                        }
                    }
                });
            }
            else {
                this.fullCircuit(call);
            }
        });
    }
    setupHandler(phoneNo) {
        let peer = this.peer;
        let my = this;
        let ws = new WebSocket('ws://' + _assets_env__WEBPACK_IMPORTED_MODULE_4__["env"].PEERSERVERHOST + ':9001');
        this.dataConn = ws;
        ws.onmessage = function incoming(event) {
            if (event.data == 'register') {
                this.send(JSON.stringify({ command: 'register', id: phoneNo }));
            }
            else if (event.data == 'false_key') {
                //falsified contact or id key
                my._snackBar.open('False user keys provided.', 'Dismiss', {
                    duration: 10000,
                });
                console.error('FALSE KEYS');
                my.callConnection.close();
                my.callConnection = null;
                my.endConnection.emit(null);
            }
            else {
                let data = JSON.parse(event.data);
                if (data.command == 'BYE') {
                    my.callConnection.close();
                    if (my.callbackConnection != null) {
                        my.callbackConnection.close();
                    }
                }
                else if (data.command == 'ACK<SEND_TO_VOICEMAIL>') {
                    //for voicemail on decline call, busy, and timeout
                    my.voicemail = true;
                    my.openConnection.emit({ ringing: false, incoming: false, number: my.callConnection });
                    my.phoneTones.src = '../../assets/leave_a_message.wav';
                    my.phoneTones.play();
                }
            }
        };
    }
    //make data connection
    dialOut(phoneNo, myCid, myNumber, id_key, contact_key, target_contact_key) {
        let my = this;
        let peer = this.peer;
        let callbackConnection = this.callbackConnection;
        let audioEl = this.audioEl;
        let phoneTones = this.phoneTones;
        let openConnection = this.openConnection;
        let endConnection = this.endConnection;
        navigator.mediaDevices.getUserMedia({ video: false, audio: true })
            .then(function (stream) {
            const call = peer.call('SSP', stream, { metadata: {
                    command: 'INVITE',
                    cid: myCid,
                    caller: myNumber,
                    callerContactKey: my.falseContactKey ? 'false_value' : contact_key,
                    callerIdKey: my.falseIdKey ? 'false_id' : id_key,
                    target: phoneNo,
                    targetContactKey: my.falseContactKey ? 'falsevalue' : target_contact_key
                }
            });
            console.log("SENDING " + JSON.stringify(call.metadata));
            my.callConnection = call;
            openConnection.emit({ ringing: true, incoming: false, number: call });
            call.on('stream', (remoteStream) => {
                // answered by operator, no stream attached
            });
            call.on('close', function () {
                if (callbackConnection != null && callbackConnection.open) {
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
            .catch(function (err) {
            console.error('Failed to get local stream', err);
            endConnection.emit({ err: 'Need access to microphone to make call.' });
        });
    }
    fullCircuit(call) {
        let my = this;
        let callback = this.callback;
        this.callbackConnection = call;
        let connection = this.callConnection;
        let audioEl = this.audioEl;
        let phoneTones = this.phoneTones;
        let openConnection = this.openConnection;
        let endConnection = this.endConnection;
        openConnection.emit({ ringing: false, incoming: false, number: call });
        navigator.mediaDevices.getUserMedia({ video: false, audio: true })
            .then(function (stream) {
            phoneTones.pause();
            phoneTones.src = '';
            call.answer(stream); // Answer the call with an A/V stream.
            call.on('stream', (remoteStream) => {
                openConnection.emit({ ringing: false, incoming: false, number: call });
                audioEl.srcObject = remoteStream;
                audioEl.play();
            });
            call.on('close', function () {
                if (connection != null && connection.open) {
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
            .catch(function (err) {
            console.error('Failed to get local stream', err);
            endConnection.emit({ err: 'Need access to microphone to make call.' });
        });
    }
    hangUp(myNumber) {
        if (!this.voicemail) {
            this.dataConn.send(JSON.stringify({
                command: 'BYE',
                hangUpOn: (this.callConnection.metadata.caller == myNumber ? this.callConnection.metadata.target : this.callConnection.metadata.caller)
            }));
        }
        this.voicemail = false;
        this.callConnection.close();
    }
};
IpPhoneService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], IpPhoneService.prototype, "openConnection", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], IpPhoneService.prototype, "endConnection", void 0);
IpPhoneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IpPhoneService);



/***/ }),

/***/ "./src/app/services/login-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/login-service.service.ts ***!
  \***************************************************/
/*! exports provided: LoginServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginServiceService", function() { return LoginServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _assets_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/env */ "./src/assets/env.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let LoginServiceService = class LoginServiceService {
    constructor(storage, http, router) {
        this.storage = storage;
        this.http = http;
        this.router = router;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            })
        };
    }
    login(x) {
        //login here through DB
        var r = this.http.post(_assets_env__WEBPACK_IMPORTED_MODULE_3__["env"].backendURL + "/login", x, this.httpOptions);
        r.subscribe(res => {
            if (!(res['errors'])) {
                this.storage.set('VVOIP_user', res);
            }
        });
        return r;
    }
    logout() {
        this.storage.set('VVOIP_user', null);
    }
    displayAuthenticated() {
        if (this.getFromLocal('VVOIP_user') != null && this.router.url == '/dash') {
            return true;
        }
        return false;
    }
    authenticated() {
        if (this.getFromLocal('VVOIP_user') != null) {
            return true;
        }
        return false;
    }
    saveInLocal(key, val) {
        this.storage.set(key, val);
    }
    getFromLocal(key) {
        return this.storage.get(key);
    }
};
LoginServiceService.ctorParameters = () => [
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"]))
], LoginServiceService);



/***/ }),

/***/ "./src/assets/env.ts":
/*!***************************!*\
  !*** ./src/assets/env.ts ***!
  \***************************/
/*! exports provided: env */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
const env = {
    //backendURL: "http://localhost:8080",
    //PEERSERVERHOST: "localhost",
    backendURL: 'http://ec2-3-14-127-235.us-east-2.compute.amazonaws.com:8080',
    PEERSERVERHOST: 'ec2-3-14-127-235.us-east-2.compute.amazonaws.com'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Daniel/Desktop/cs4431/implementation/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map