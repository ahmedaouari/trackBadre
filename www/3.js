(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t  <ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t  </ion-buttons>\n\t\t  <ion-title class=\"centre\">Login</ion-title>\n\t</ion-toolbar>\n  </ion-header>\n<ion-content id=\"main-content\" class=\"ion-no-padding color\" dir=\"ltr\">\n  <div id=\"sign-in-button\"></div>\n\n  <div class=\"main\">\n    <ion-card no-margin>\n      <ion-card-content>\n      \n        <ion-grid class=\"phoneAuthGrid\">\n      <ion-row class=\"row\">\n        <ion-label color=\"primary\">Nom</ion-label>\n        <ion-item>\n          <ion-input type=\"text\" [(ngModel)]=\"nom\"></ion-input>\n        </ion-item>\n      </ion-row>\n      <br>\n      <ion-row class=\"row\">\n        <ion-label  color=\"primary\">Prenom</ion-label>\n        <ion-item>\n          <ion-input type=\"text\"  [(ngModel)]=\"prenom\"></ion-input>\n        </ion-item>\n      </ion-row>\n          <ion-row class=\"row\">\n            <ion-col size=\"4\">\n              <ion-select class=\"phoneCountry\"  okText=\"Okay\" cancelText=\"Dismiss\"\n             (ionChange)=\"countryCodeChange($event)\" >\n                <ion-select-option  *ngFor=\"let country of CountryJson\" value={{country.dial_code}}>\n                  {{country.dial_code}}</ion-select-option>\n                </ion-select>\n            </ion-col>\n            <ion-col size=\"8\">\n              <ion-input clearInput type=\"test\" placeholder=\"Your Contact Number\" [(ngModel)]=\"PhoneNo\"\n                class=\"input ion-padding-horizontal\" clear-input=\"true\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-button expand=\"block\" (click)=\"signinWithPhoneNumber($event)\" color=\"undefined\"\n                class=\"btn-transition\">\n                Sign in with Phone number</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </ion-card-content>\n    </ion-card>\n  </div>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"), __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, login_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoginPageRoutingModule = void 0;
    const routes = [
        {
            path: '',
            component: login_page_1.LoginPage
        }
    ];
    let LoginPageRoutingModule = class LoginPageRoutingModule {
    };
    LoginPageRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], LoginPageRoutingModule);
    exports.LoginPageRoutingModule = LoginPageRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"), __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"), __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts"), __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, forms_1, angular_1, login_routing_module_1, login_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoginPageModule = void 0;
    let LoginPageModule = class LoginPageModule {
    };
    LoginPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                forms_1.ReactiveFormsModule,
                login_routing_module_1.LoginPageRoutingModule
            ],
            declarations: [login_page_1.LoginPage]
        })
    ], LoginPageModule);
    exports.LoginPageModule = LoginPageModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[fontsize] {\n  font-size: 25px;\n}\n\n.passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 4px !important;\n  margin: 0 auto !important;\n}\n\n.main {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n@media screen and (min-width: 767px) {\n  ion-card {\n    width: 600px;\n    margin: auto;\n  }\n}\n\nion-card {\n  --background: #fff;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  overflow: scroll;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.otpinput {\n  letter-spacing: 30px;\n  -webkit-padding-end: 0;\n  --padding-end: 0;\n  font-size: 30px;\n  border: none;\n  background: white;\n}\n\n.white {\n  color: white;\n}\n\n.OTP-border ion-col div {\n  border-bottom: 1px solid;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n}\n\n.button-color {\n  background-color: var(--ion-color-mytheme);\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.grid {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.row {\n  margin: 10px 5px !important;\n}\n\n.img-logo {\n  height: 120px;\n  width: 120px;\n}\n\n.fire-logo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 30px;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.block {\n  display: block;\n}\n\n.transition {\n  background: linear-gradient(to right, #f57c00 14%, #ffca00 96%);\n}\n\n.btn-color {\n  color: #ffa000;\n}\n\n.error {\n  color: red;\n  text-align: center;\n  display: block;\n  font-weight: bold;\n}\n\n.invoice-box {\n  max-width: 800px;\n  margin: auto;\n  padding: 30px;\n  border: 1px solid #eee;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  font-size: 16px;\n  line-height: 24px;\n  font-family: \"Helvetica Neue\", \"Helvetica\", Helvetica, Arial, sans-serif;\n  color: #555;\n}\n\n.invoice-box table {\n  width: 100%;\n  line-height: inherit;\n  text-align: left;\n}\n\n.invoice-box table td {\n  padding: 5px;\n  vertical-align: top;\n}\n\n.invoice-box table tr td:nth-child(2) {\n  text-align: right;\n}\n\n.invoice-box table tr.top table td {\n  padding-bottom: 20px;\n}\n\n.btn-transition {\n  background: linear-gradient(to right, #f57c00 14%, #ffca00 96%);\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.phoneCountry {\n  border: 1px solid gainsboro;\n  border-radius: 3px;\n  margin-left: 2px;\n}\n\n.phoneAuthGrid {\n  border: 1px solid #ccc;\n  margin: 0 7px;\n  border-radius: 3px;\n  height: 350px;\n}\n\n.phoneAuthGrid .ion-row {\n  margin: 20px 10px 20px 10px;\n}\n\n.invoice-box table tr.top table td.title {\n  font-size: 45px;\n  line-height: 45px;\n  color: #333;\n}\n\n.invoice-box table tr.information table td {\n  padding-bottom: 40px;\n}\n\n.invoice-box table tr.heading td {\n  background: #eee;\n  border-bottom: 1px solid #ddd;\n  font-weight: bold;\n}\n\n.invoice-box table tr.details td {\n  padding-bottom: 20px;\n}\n\n.invoice-box table tr.item td {\n  border-bottom: 1px solid #eee;\n}\n\n.invoice-box table tr.item.last td {\n  border-bottom: none;\n}\n\n.invoice-box table tr.total td:nth-child(2) {\n  border-top: 2px solid #eee;\n  font-weight: bold;\n}\n\n@media only screen and (max-width: 600px) {\n  .invoice-box table tr.top table td {\n    width: 100%;\n    display: block;\n    text-align: center;\n  }\n\n  .invoice-box table tr.information table td {\n    width: 100%;\n    display: block;\n    text-align: center;\n  }\n}\n\n/** RTL **/\n\n.rtl {\n  direction: rtl;\n  font-family: Tahoma, \"Helvetica Neue\", \"Helvetica\", Helvetica, Arial, sans-serif;\n}\n\n.rtl table {\n  text-align: right;\n}\n\n.rtl table tr td:nth-child(2) {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUNBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFBQztFQUNHLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUdKOztBQURFO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQUlKO0FBQ0Y7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFLSjs7QUFIRTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKRTtFQUNFLFlBQUE7QUFPSjs7QUFITTtFQUNFLHdCQUFBO0FBTVI7O0FBREU7RUFDRSxlQUFBO0FBSUo7O0FBSEk7RUFDRSxpQ0FBQTtBQUtOOztBQUZFO0VBQ0UsMENBQUE7QUFLSjs7QUFIRTtFQUNFLHdCQUFBO0FBTUo7O0FBSkU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFPSjs7QUFMRTtFQUlDLDJCQUFBO0FBS0g7O0FBSEU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUpFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBT0o7O0FBTEU7RUFDRSxpQkFBQTtBQVFKOztBQU5FO0VBQ0UsY0FBQTtBQVNKOztBQVBFO0VBQ0UsK0RBQUE7QUFVSjs7QUFSRTtFQUNFLGNBQUE7QUFXSjs7QUFURTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVlKOztBQVRFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3RUFBQTtFQUNBLFdBQUE7QUFZSjs7QUFURTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBWUo7O0FBVEU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFZSjs7QUFURTtFQUNFLGlCQUFBO0FBWUo7O0FBVEU7RUFDRSxvQkFBQTtBQVlKOztBQVZFO0VBQ0UsK0RBQUE7QUFhSjs7QUFWRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBYUo7O0FBWEU7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFjSjs7QUFaRTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQWVKOztBQWRJO0VBQ0ksMkJBQUE7QUFnQlI7O0FBYkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBZ0JKOztBQWJFO0VBQ0Usb0JBQUE7QUFnQko7O0FBYkU7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFnQko7O0FBYkU7RUFDRSxvQkFBQTtBQWdCSjs7QUFiRTtFQUNFLDZCQUFBO0FBZ0JKOztBQWJFO0VBQ0UsbUJBQUE7QUFnQko7O0FBYkU7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FBZ0JKOztBQWJFO0VBQ0U7SUFDSSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0VBZ0JOOztFQWJFO0lBQ0ksV0FBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQWdCTjtBQUNGOztBQWJFLFVBQUE7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZ0ZBQUE7QUFlSjs7QUFaRTtFQUNFLGlCQUFBO0FBZUo7O0FBWkU7RUFDRSxnQkFBQTtBQWVKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2ZvbnRzaXplXXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4ucGFzc3dvcmRJY29ue1xyXG4gICAgZm9udC1zaXplOjJyZW0gIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiA0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAubWFpbiB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1jYXJkIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxuICAuaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAub3RwaW5wdXQge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDMwcHg7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICAud2hpdGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuT1RQLWJvcmRlciB7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgZGl2IHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idXR0b24tY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xyXG4gIH1cclxuICAubG9nbyB7XHJcbiAgICB3aWR0aDogMS4yNWVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5ncmlkIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAucm93IHtcclxuICAgIC8vZGlzcGxheTogZmxleDtcclxuICAgIC8vZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIG1hcmdpbjoxMHB4IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW1nLWxvZ28ge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICB9XHJcbiAgLmZpcmUtbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICAuYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAudHJhbnNpdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNTdjMDAgMTQlLCAjZmZjYTAwIDk2JSk7XHJcbiAgfVxyXG4gIC5idG4tY29sb3Ige1xyXG4gICAgY29sb3I6ICNmZmEwMDA7XHJcbiAgfVxyXG4gIC5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLmludm9pY2UtYm94IHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgLjE1KTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsICdIZWx2ZXRpY2EnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZvaWNlLWJveCB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLmludm9pY2UtYm94IHRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZvaWNlLWJveCB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZvaWNlLWJveCB0YWJsZSB0ci50b3AgdGFibGUgdGQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIC5idG4tdHJhbnNpdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNTdjMDAgMTQlLCAjZmZjYTAwIDk2JSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5waG9uZUNvdW50cnkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ2FpbnNib3JvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICB9XHJcbiAgLnBob25lQXV0aEdyaWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIG1hcmdpbjogMCA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgLmlvbi1yb3d7XHJcbiAgICAgICAgbWFyZ2luOjIwcHggMTBweCAyMHB4IDEwcHggO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW52b2ljZS1ib3ggdGFibGUgdHIudG9wIHRhYmxlIHRkLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZvaWNlLWJveCB0YWJsZSB0ci5pbmZvcm1hdGlvbiB0YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmludm9pY2UtYm94IHRhYmxlIHRyLmhlYWRpbmcgdGQge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZvaWNlLWJveCB0YWJsZSB0ci5kZXRhaWxzIHRkIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW52b2ljZS1ib3ggdGFibGUgdHIuaXRlbSB0ZHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gIH1cclxuICBcclxuICAuaW52b2ljZS1ib3ggdGFibGUgdHIuaXRlbS5sYXN0IHRkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZvaWNlLWJveCB0YWJsZSB0ci50b3RhbCB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlZWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmludm9pY2UtYm94IHRhYmxlIHRyLnRvcCB0YWJsZSB0ZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW52b2ljZS1ib3ggdGFibGUgdHIuaW5mb3JtYXRpb24gdGFibGUgdGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyoqIFJUTCAqKi9cclxuICAucnRsIHtcclxuICAgIGRpcmVjdGlvbjogcnRsO1xyXG4gICAgZm9udC1mYW1pbHk6IFRhaG9tYSwgJ0hlbHZldGljYSBOZXVlJywgJ0hlbHZldGljYScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5ydGwgdGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ydGwgdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"), __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"), __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js"), __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts"), __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js"), __webpack_require__(/*! src/app/services/firebase-service.service */ "./src/app/services/firebase-service.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, angular_1, storage_1, environment_1, app_1, firebase_service_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoginPage = void 0;
    let LoginPage = class LoginPage {
        constructor(alertController, authService, storage, router) {
            this.alertController = alertController;
            this.authService = authService;
            this.storage = storage;
            this.router = router;
            this.CountryJson = environment_1.environment.CountryJson;
            this.OTP = '';
            this.CountryCode = '+91';
            this.showOTPInput = false;
            this.OTPmessage = 'An OTP is sent to your number. You should receive it in 15 s';
        }
        ionViewDidEnter() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.recaptchaVerifier = new app_1.default.auth.RecaptchaVerifier('sign-in-button', {
                    size: 'invisible',
                    callback: (response) => {
                    },
                    'expired-callback': () => {
                    }
                });
            });
        }
        ionViewDidLoad() {
            this.recaptchaVerifier = new app_1.default.auth.RecaptchaVerifier('sign-in-button', {
                size: 'invisible',
                callback: (response) => {
                },
                'expired-callback': () => {
                }
            });
        }
        countryCodeChange($event) {
            console.log(event);
            this.CountryCode = $event.detail.value;
        }
        // Button event after the nmber is entered and button is clicked
        signinWithPhoneNumber($event) {
            console.log('country', this.recaptchaVerifier);
            if (this.PhoneNo && this.CountryCode) {
                console.log(this.PhoneNo, this.CountryCode);
                this.authService.loginUser(this.recaptchaVerifier, this.CountryCode + this.PhoneNo).then((success) => {
                    console.log(success);
                    this.OtpVerification(success);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
        showSuccess() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    header: 'Success',
                    buttons: [
                        {
                            text: 'Ok',
                            handler: (res) => {
                                alert.dismiss();
                            }
                        }
                    ]
                });
                alert.present();
            });
        }
        OtpVerification(success) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    header: 'Enter OTP',
                    backdropDismiss: false,
                    inputs: [
                        {
                            name: 'otp',
                            type: 'text',
                            placeholder: 'Enter your otp',
                        }
                    ],
                    buttons: [{
                            text: 'Enter',
                            handler: (res) => {
                                //  conso;le.log(success.confirm(res.otp))
                                success.confirm(res.otp).then(res => {
                                    this.storage.set('uid', res.user.uid);
                                    this.router.navigateByUrl("/maps", { replaceUrl: true });
                                }).catch(err => {
                                    console.log(err);
                                });
                            }
                        }
                    ]
                });
                yield alert.present();
            });
        }
    };
    LoginPage.ctorParameters = () => [
        { type: angular_1.AlertController },
        { type: firebase_service_service_1.FirebaseServiceService },
        { type: storage_1.Storage },
        { type: router_1.Router }
    ];
    LoginPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-login',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
        })
    ], LoginPage);
    exports.LoginPage = LoginPage;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=3.js.map