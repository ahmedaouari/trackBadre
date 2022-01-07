(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parametre/parametre.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parametre/parametre.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar color=\"mango\">\n    <ion-title class=\"center\" >parametre</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>active</ion-label>\n      <ion-toggle  mode=\"ios\" color=\"success\" ></ion-toggle>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>send notification</ion-label>\n      <ion-toggle mode=\"ios\" color=\"success\"></ion-toggle>\n    </ion-item>\n  \n    \n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/parametre/parametre-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/parametre/parametre-routing.module.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"), __webpack_require__(/*! ./parametre.page */ "./src/app/pages/parametre/parametre.page.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, parametre_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParametrePageRoutingModule = void 0;
    const routes = [
        {
            path: '',
            component: parametre_page_1.ParametrePage
        }
    ];
    let ParametrePageRoutingModule = class ParametrePageRoutingModule {
    };
    ParametrePageRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], ParametrePageRoutingModule);
    exports.ParametrePageRoutingModule = ParametrePageRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/pages/parametre/parametre.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/parametre/parametre.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"), __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"), __webpack_require__(/*! ./parametre-routing.module */ "./src/app/pages/parametre/parametre-routing.module.ts"), __webpack_require__(/*! ./parametre.page */ "./src/app/pages/parametre/parametre.page.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, forms_1, angular_1, parametre_routing_module_1, parametre_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParametrePageModule = void 0;
    let ParametrePageModule = class ParametrePageModule {
    };
    ParametrePageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                parametre_routing_module_1.ParametrePageRoutingModule
            ],
            declarations: [parametre_page_1.ParametrePage]
        })
    ], ParametrePageModule);
    exports.ParametrePageModule = ParametrePageModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/pages/parametre/parametre.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/parametre/parametre.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhcmFtZXRyZS9wYXJhbWV0cmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/parametre/parametre.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/parametre/parametre.page.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParametrePage = void 0;
    let ParametrePage = class ParametrePage {
        constructor(router) {
            this.router = router;
        }
        ngOnInit() {
        }
        login() {
            console.log('parametre');
            this.router.navigateByUrl('/parametre');
        }
    };
    ParametrePage.ctorParameters = () => [
        { type: router_1.Router }
    ];
    ParametrePage = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-parametre',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./parametre.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parametre/parametre.page.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./parametre.page.scss */ "./src/app/pages/parametre/parametre.page.scss")).default]
        })
    ], ParametrePage);
    exports.ParametrePage = ParametrePage;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=3.js.map