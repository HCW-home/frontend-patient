"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_await-consultation_await-consultation_module_ts"],{

/***/ 2645:
/*!*****************************************************************!*\
  !*** ./src/app/await-consultation/await-consultation.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwaitConsultationPageModule": () => (/* binding */ AwaitConsultationPageModule)
/* harmony export */ });
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../i18n/i18n.module */ 3401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _await_consultation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./await-consultation.page */ 9363);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const routes = [
    {
        path: '',
        component: _await_consultation_page__WEBPACK_IMPORTED_MODULE_1__.AwaitConsultationPage
    }
];
let AwaitConsultationPageModule = class AwaitConsultationPageModule {
};
AwaitConsultationPageModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__.I18nModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_await_consultation_page__WEBPACK_IMPORTED_MODULE_1__.AwaitConsultationPage]
    })
], AwaitConsultationPageModule);



/***/ }),

/***/ 9363:
/*!***************************************************************!*\
  !*** ./src/app/await-consultation/await-consultation.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwaitConsultationPage": () => (/* binding */ AwaitConsultationPage)
/* harmony export */ });
/* harmony import */ var _await_consultation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./await-consultation.page.html?ngResource */ 4198);
/* harmony import */ var _await_consultation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./await-consultation.page.scss?ngResource */ 9043);
/* harmony import */ var _socket_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../socket-events.service */ 7800);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _consultation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../consultation.service */ 9936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;






let AwaitConsultationPage = class AwaitConsultationPage {
    constructor(consultationService, router, socketEventsService) {
        this.consultationService = consultationService;
        this.router = router;
        this.socketEventsService = socketEventsService;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.consultationService.getTranslatorOrGuestConsultation().subscribe(consultation => {
            console.log('got consultation ', consultation);
            if (consultation) {
                this.consultation = consultation;
                localStorage.setItem('currentConsultation', consultation._id);
                // localStorage.removeItem('inviteToken');
                this.router.navigate(['consultation', this.consultation._id]);
            }
        }));
        this.subscriptions.push(this.socketEventsService.onNewConsultation().subscribe(event => {
            console.log('New consultation EVvent ', event);
            this.consultation = event.data.consultation;
            this.router.navigate(['consultation', this.consultation.id]);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
};
AwaitConsultationPage.ctorParameters = () => [
    { type: _consultation_service__WEBPACK_IMPORTED_MODULE_3__.ConsultationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _socket_events_service__WEBPACK_IMPORTED_MODULE_2__.SocketEventsService }
];
AwaitConsultationPage = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-await-consultation',
        template: _await_consultation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_await_consultation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _consultation_service__WEBPACK_IMPORTED_MODULE_3__.ConsultationService !== "undefined" && _consultation_service__WEBPACK_IMPORTED_MODULE_3__.ConsultationService) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router) === "function" ? _b : Object, typeof (_c = typeof _socket_events_service__WEBPACK_IMPORTED_MODULE_2__.SocketEventsService !== "undefined" && _socket_events_service__WEBPACK_IMPORTED_MODULE_2__.SocketEventsService) === "function" ? _c : Object])
], AwaitConsultationPage);



/***/ }),

/***/ 9043:
/*!****************************************************************************!*\
  !*** ./src/app/await-consultation/await-consultation.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhd2FpdC1jb25zdWx0YXRpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4198:
/*!****************************************************************************!*\
  !*** ./src/app/await-consultation/await-consultation.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar> </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>{{\"awaitingConsultation.awaitingConsultation\" | translate}}</h1>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_await-consultation_await-consultation_module_ts.js.map