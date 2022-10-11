"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_info_info_module_ts"],{

/***/ 3056:
/*!*************************************!*\
  !*** ./src/app/info/info.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPageModule": () => (/* binding */ InfoPageModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i18n/i18n.module */ 3401);
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.page */ 5726);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// translate


const routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_1__.InfoPage
    }
];
let InfoPageModule = class InfoPageModule {
};
InfoPageModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__.I18nModule
        ],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_1__.InfoPage]
    })
], InfoPageModule);



/***/ }),

/***/ 5726:
/*!***********************************!*\
  !*** ./src/app/info/info.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPage": () => (/* binding */ InfoPage)
/* harmony export */ });
/* harmony import */ var _info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.page.html?ngResource */ 1091);
/* harmony import */ var _info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.page.scss?ngResource */ 5285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 6527);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;




let InfoPage = class InfoPage {
    constructor(configService) {
        this.configService = configService;
    }
    ngOnInit() {
    }
};
InfoPage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService }
];
InfoPage = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-info',
        template: _info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService !== "undefined" && _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService) === "function" ? _a : Object])
], InfoPage);



/***/ }),

/***/ 5285:
/*!************************************************!*\
  !*** ./src/app/info/info.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "div div {\n  max-width: 22vw;\n  flex: 1;\n  margin: 0 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoiaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYgZGl2IHtcbiAgbWF4LXdpZHRoOiAyMnZ3O1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDAgM3B4O1xufVxuIl19 */";

/***/ }),

/***/ 1091:
/*!************************************************!*\
  !*** ./src/app/info/info.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"    font-size: 1em;\"\n      >{{ 'info.general' | translate }} <strong> {{ 'info.geninformationeral' | translate }}</strong>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <p style=\"padding: 20px;\npadding-top:0;\nline-height: 1.4;\">\n    {{ 'info.duringTheTransition' | translate:configService.config }}\n    <strong>{{ 'info.home' | translate:configService.config  }}</strong> {{ 'info.aimsToStrengthen' | translate:configService.config  }}\n    <strong>{{ 'info.mayToTheEnd' | translate }}</strong>. {{ 'info.itIsFundedBy' | translate }}\n    <strong>{{ 'info.theHUGPrivate' | translate:configService.config  }} </strong> {{ 'info.andTheGeneral' | translate }}\n    <strong>{{ 'info.firstAidPhysicians' | translate }} </strong>. {{ 'info.theServiceIsAccessible' | translate }}\n    <strong>{{ 'info.accessibleTime1' | translate }}</strong> {{ 'info.andFrom' | translate }}\n    <strong>{{ 'info.accessibleTime2' | translate }}</strong>\n    {{ 'info.theCaregiverImad' | translate:configService.config  }}\n  </p>\n  <ul style=\"font-weight: bold;     padding-right: 20px;\">\n    <li>\n      {{ 'info.itIsNot' | translate }}\n    </li>\n    <li>\n      {{ 'info.patientHasConstent' | translate }}\n    </li>\n    <li>\n      {{ 'info.theAttendingPhysician' | translate }}\n    </li>\n    <li>\n      {{ 'info.thePatientWasRecently' | translate:configService.config  }}\n    </li>\n  </ul>\n\n  <div style=\"display: flex; height:106px; padding: 20px;\">\n    <div><img src=\"../../assets/images/hug-square.jpg\" alt=\"\" /></div>\n    <div\n      style=\"display: flex; align-items: center; background-color:white; height: 100%;\"\n    >\n      <img src=\"../../assets/images/imad.png\" alt=\"\" />\n    </div>\n    <div><img src=\"../../assets/images/home.png\" alt=\"\" /></div>\n    <div style=\"display: flex; align-items: center;\">\n      <img src=\"../../assets/42406c8f52924105a84c4163a89506fd.png\" alt=\"\" />\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_info_info_module_ts.js.map