"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_diagnostic_diagnostic_module_ts"],{

/***/ 5431:
/*!*************************************************!*\
  !*** ./src/app/diagnostic/diagnostic.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagnosticPageModule": () => (/* binding */ DiagnosticPageModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i18n/i18n.module */ 3401);
/* harmony import */ var _diagnostic_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diagnostic.page */ 9152);
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
        component: _diagnostic_page__WEBPACK_IMPORTED_MODULE_1__.DiagnosticPage
    }
];
let DiagnosticPageModule = class DiagnosticPageModule {
};
DiagnosticPageModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__.I18nModule
        ],
        declarations: [_diagnostic_page__WEBPACK_IMPORTED_MODULE_1__.DiagnosticPage]
    })
], DiagnosticPageModule);



/***/ }),

/***/ 9152:
/*!***********************************************!*\
  !*** ./src/app/diagnostic/diagnostic.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagnosticPage": () => (/* binding */ DiagnosticPage)
/* harmony export */ });
/* harmony import */ var _diagnostic_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diagnostic.page.html?ngResource */ 8950);
/* harmony import */ var _diagnostic_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diagnostic.page.scss?ngResource */ 6671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let DiagnosticPage = class DiagnosticPage {
    constructor() { }
    ngOnInit() {
    }
};
DiagnosticPage.ctorParameters = () => [];
DiagnosticPage = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-diagnostic',
        template: _diagnostic_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_diagnostic_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    __metadata("design:paramtypes", [])
], DiagnosticPage);



/***/ }),

/***/ 6671:
/*!************************************************************!*\
  !*** ./src/app/diagnostic/diagnostic.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "div div {\n  max-width: 22vw;\n  flex: 1;\n  margin: 0 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWdub3N0aWMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiZGlhZ25vc3RpYy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYgZGl2IHtcbiAgICBtYXgtd2lkdGg6IDIydnc7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW46IDAgM3B4O1xuICB9XG4gICJdfQ== */";

/***/ }),

/***/ 8950:
/*!************************************************************!*\
  !*** ./src/app/diagnostic/diagnostic.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ 'consultations.browserNotSupported' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <p\n    style=\"padding: 20px;\npadding-top:0;\nline-height: 1.4;\"\n  >\n    {{ 'consultations.yourBrowserIsNotCompatible' | translate }}\n  </p>\n  <ul>\n    <li>{{ 'consultations.aCamera' | translate }}</li>\n    <li>{{ 'consultations.aMicrophone' | translate }}</li>\n    <li>{{ 'consultations.fromARecentBrowser' | translate }}</li>\n  </ul>\n  <p>\n    {{ 'consultations.theBrowsersCurrentlySupported' | translate }}\n  </p>\n  <ul>\n    <li>{{ 'consultations.forIOSPhones' | translate }}</li>\n    <li>{{ 'consultations.forAndroidPhones' | translate }}</li>\n    <li>{{ 'consultations.forMacOSComputers' | translate }}</li>\n    <li>{{ 'consultations.forWindowsComputers' | translate }}</li>\n    <li>{{ 'consultations.forLinuxComputers' | translate }}</li>\n  </ul>\n\n  <div style=\"display: flex; height:106px; padding: 20px;\">\n    <div><img src=\"../../assets/images/hug-square.jpg\" alt=\"\" /></div>\n    <div\n      style=\"display: flex; align-items: center; background-color:white; height: 100%;\"\n    >\n      <img src=\"../../assets/images/imad.png\" alt=\"\" />\n    </div>\n    <div><img src=\"../../assets/images/home.png\" alt=\"\" /></div>\n    <div style=\"display: flex; align-items: center;\">\n      <img src=\"../../assets/42406c8f52924105a84c4163a89506fd.png\" alt=\"\" />\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_diagnostic_diagnostic_module_ts.js.map