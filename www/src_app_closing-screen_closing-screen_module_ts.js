"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_closing-screen_closing-screen_module_ts"],{

/***/ 8001:
/*!*********************************************************!*\
  !*** ./src/app/closing-screen/closing-screen.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClosingScreenPageModule": () => (/* binding */ ClosingScreenPageModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i18n/i18n.module */ 3401);
/* harmony import */ var _closing_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closing-screen.page */ 9229);
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
        component: _closing_screen_page__WEBPACK_IMPORTED_MODULE_1__.ClosingScreenPage
    }
];
let ClosingScreenPageModule = class ClosingScreenPageModule {
};
ClosingScreenPageModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__.I18nModule
        ],
        declarations: [_closing_screen_page__WEBPACK_IMPORTED_MODULE_1__.ClosingScreenPage]
    })
], ClosingScreenPageModule);



/***/ }),

/***/ 9229:
/*!*******************************************************!*\
  !*** ./src/app/closing-screen/closing-screen.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClosingScreenPage": () => (/* binding */ ClosingScreenPage)
/* harmony export */ });
/* harmony import */ var _closing_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closing-screen.page.html?ngResource */ 889);
/* harmony import */ var _closing_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closing-screen.page.scss?ngResource */ 3470);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth/auth.service */ 384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _consultation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../consultation.service */ 9936);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.service */ 6527);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/app */ 3253);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;









let ClosingScreenPage = class ClosingScreenPage {
    constructor(activeRoute, consultationService, authService, configService, platform) {
        this.activeRoute = activeRoute;
        this.consultationService = consultationService;
        this.authService = authService;
        this.configService = configService;
        this.platform = platform;
        // Whether or not the feedback has been submitted (i.e. the request is ongoing)
        this.feedbackSubmitted = false;
        // Whether or not the feedback form has been saved
        this.feedbackSaved = false;
        // The current rating selected by the user () or null if none selected
        this.userRating = null;
        // The feedback comment written by the user
        this.userComment = "";
        // The list of rating values
        this.ratings = ["good", "ok", "bad"];
    }
    ngOnInit() {
        this.currentUser = this.authService.currentUserValue;
        // Get the consultation ID from the route
        this.consultationId = this.activeRoute.snapshot.params.id;
    }
    /**
     * Event fired when the user clicks on one of the ratings
     * @param rating The clicked rating
     */
    onRatingClick(rating) {
        if (rating === this.userRating) {
            this.userRating = null;
        }
        else if (this.ratings.indexOf(rating) !== -1) {
            this.userRating = rating;
        }
    }
    closeApp() {
        console.log('hello');
        localStorage.clear();
        _capacitor_app__WEBPACK_IMPORTED_MODULE_5__.App.exitApp();
    }
    /**
     * Check if the user is running on mobile (either web or native app).
     */
    isMobileUser() {
        return this.platform.is("ios") || this.platform.is("android");
    }
    /**
     * Check if the user is running an installed app.
     */
    isNativeApp() {
        return this.platform.is("ios") || this.platform.is("android");
    }
    /**
     * Event fired when the user submits the feedback form
     */
    onFormSubmit() {
        if (this.feedbackSubmitted || !this.userRating == null) {
            return;
        }
        this.feedbackSubmitted = true;
        this.consultationService
            .saveConsultationFeedback(this.consultationId, this.userRating, this.userComment)
            .subscribe((res) => {
            this.feedbackSaved = true;
        }, (err) => {
            this.feedbackSubmitted = false;
        });
    }
};
ClosingScreenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _consultation_service__WEBPACK_IMPORTED_MODULE_3__.ConsultationService },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform }
];
ClosingScreenPage = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-closing-screen",
        template: _closing_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_closing_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute) === "function" ? _a : Object, typeof (_b = typeof _consultation_service__WEBPACK_IMPORTED_MODULE_3__.ConsultationService !== "undefined" && _consultation_service__WEBPACK_IMPORTED_MODULE_3__.ConsultationService) === "function" ? _b : Object, typeof (_c = typeof _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService !== "undefined" && _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService) === "function" ? _c : Object, typeof (_d = typeof _config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService !== "undefined" && _config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService) === "function" ? _d : Object, typeof (_e = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform) === "function" ? _e : Object])
], ClosingScreenPage);



/***/ }),

/***/ 3470:
/*!********************************************************************!*\
  !*** ./src/app/closing-screen/closing-screen.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #266eb7;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #ffbb00;\n  --ion-color-secondary-rgb: 255, 204, 0;\n  --ion-color-secondary-contrast: #000000;\n  --ion-color-secondary-contrast-rgb: 0, 0, 0;\n  --ion-color-secondary-shade: #bd9700;\n  --ion-color-secondary-tint: #ffd21e;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: ##ffcd00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #494b50;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #cccccc;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  --blue-bg-color: #0072bb;\n}\n.wrap {\n  width: 100%;\n  min-height: 100%;\n  background-image: url(\"/icons/background.jpg\");\n  background-image: url(\"/background@2x.jpg\");\n  background-color: #266eb7 !important;\n  background-color: var(--ion-color-primary) !important;\n  background-size: 100%;\n  background-position: center;\n  background-attachment: fixed;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #0072bb;\n  background-color: var(--blue-bg-color);\n}\n::ng-deep html[data-theme=accessibility] .wrap {\n  background-image: none !important;\n  background-image: initial !important;\n}\n.container {\n  display: block;\n  margin: 30px auto;\n  width: 70%;\n  font-size: 1.1em;\n}\nh3 {\n  color: #3c3c3c;\n  margin: 40px 0 10px;\n}\np {\n  font-size: 1.1em;\n}\n.ratings {\n  text-align: center;\n}\n.ratings div {\n  display: inline-block;\n  height: 100px;\n  width: 100px;\n  border-radius: 20px;\n  cursor: pointer;\n  border: 2px solid #ddd;\n  margin: 0 20px;\n  padding: 10px;\n}\n.ratings div.selected {\n  border-color: #086baf;\n}\nion-item {\n  --color: #444;\n  --border-color: #ddd;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-radius: 10px;\n  --color-focused: #086baf;\n  --highlight-color-valid: #086baf;\n}\nion-textarea {\n  --placeholder-color: #ddd;\n}\n.feedback-saved {\n  color: #00b54a;\n  margin-top: 40px;\n}\n.feedback-saved span {\n  display: inline-block;\n  background: #00b54a;\n  color: #fff;\n  border-radius: 5px;\n  padding: 6px 12px;\n  margin-right: 20px;\n}\n.submit-btn {\n  margin: auto;\n  display: block;\n  margin-top: 50px;\n  border-radius: 60px;\n  text-align: center;\n  width: auto;\n  background: #00b54a;\n  color: #fff;\n  font-size: 1.1em;\n  padding: 10px 20px 7px;\n}\n@media screen and (max-width: 800px) {\n  .container {\n    width: 92%;\n  }\n  .ratings div {\n    height: 80px;\n    width: 80px;\n  }\n}\n::ng-deep html[data-theme=accessibility] ion-card-title {\n  font-size: 1.5em;\n}\n::ng-deep html[data-theme=accessibility] p {\n  font-size: 1.4em !important;\n  margin-left: 0;\n}\n::ng-deep html[data-theme=accessibility] h3 {\n  font-size: 1.5em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiY2xvc2luZy1zY3JlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBTUE7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUVBLCtCQUFBO0VBRUEsd0JBQUE7QUNqQkY7QUFqRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RURxRkUsOENBQUE7RUFNQSwyQ0FBQTtFQ3pGRixvQ0FBQTtFQUFBLHFEQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQUEsc0NBQUE7QUFxRUY7QUFqRUk7RUFDRSxpQ0FBQTtFQUFBLG9DQUFBO0FBb0VOO0FBaEVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBbUVGO0FBakVBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBb0VGO0FBbEVBO0VBQ0UsZ0JBQUE7QUFxRUY7QUFsRUE7RUFDRSxrQkFBQTtBQXFFRjtBQW5FRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBcUVKO0FBbkVJO0VBQ0UscUJBQUE7QUFxRU47QUFqRUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0FBb0VGO0FBbEVBO0VBQ0UseUJBQUE7QUFxRUY7QUFuRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFzRUY7QUFwRUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXNFSjtBQWxFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFxRUY7QUFsRUE7RUFDRTtJQUNFLFVBQUE7RUFxRUY7RUFuRUE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFQXFFRjtBQUNGO0FBaEVJO0VBQ0UsZ0JBQUE7QUFrRU47QUFoRUk7RUFDRSwyQkFBQTtFQUNBLGNBQUE7QUFrRU47QUFoRUk7RUFDRSwyQkFBQTtBQWtFTiIsImZpbGUiOiJjbG9zaW5nLXNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG5cbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiRiYWNrZ3JvdW5kLWltYWdlLXBhdGg6IFwiL2ljb25zL2JhY2tncm91bmQuanBnXCI7XG4kYmFja2dyb3VuZC1pbWFnZS0yeC1wYXRoOiBcIi9iYWNrZ3JvdW5kQDJ4LmpwZ1wiO1xuOnJvb3Qge1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzI2NmViNztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzMTcxZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzRjOGRmZjtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICNmZmJiMDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDI1NSwgMjA0LCAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogI2JkOTcwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICNmZmQyMWU7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzcwNDRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTIsIDY4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjMzY2UwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjN2U1N2ZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMTBkYzYwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMTYsIDIyMCwgOTY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMGVjMjU0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMyOGUwNzA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICMjZmZjZDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMDYsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiNTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQzMWE7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZjA0MTQxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNDUsIDYxLCA2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNkMzM5Mzk7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZjI1NDU0O1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjNDk0YjUwO1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM0LCAzNDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjY2NjY2NjOyAvLyAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ0LCAyNDQ7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAvLyAtLWZjOiNDQ0NDQ0M7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLS1ibHVlLWJnLWNvbG9yOiAjMDA3MmJiO1xufVxuQG1peGluIGJhY2tncm91bmRNaXhpbigkaGFzQmFja2dyb3VuZEltYWdlKSB7XG4gIEBpZiAkYmFja2dyb3VuZC1pbWFnZS1wYXRoIHtcbiAgICAvL2RvIHNvbWV0aGluZ1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkYmFja2dyb3VuZC1pbWFnZS1wYXRoKTtcbiAgfSBAZWxzZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdW5zZXQgIWltcG9ydGFudDtcbiAgfVxuICBAaWYgJGJhY2tncm91bmQtaW1hZ2UtMngtcGF0aCB7XG4gICAgLy9kbyBzb21ldGhpbmdcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGJhY2tncm91bmQtaW1hZ2UtMngtcGF0aCk7XG4gIH0gQGVsc2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcbi53cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIEBpbmNsdWRlIGJhY2tncm91bmRNaXhpbigkYmFja2dyb3VuZC1pbWFnZS1wYXRoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1iZy1jb2xvcik7XG59XG46Om5nLWRlZXAge1xuICBodG1sW2RhdGEtdGhlbWU9XCJhY2Nlc3NpYmlsaXR5XCJdIHtcbiAgICAud3JhcCB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgd2lkdGg6IDcwJTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cbmgzIHtcbiAgY29sb3I6ICMzYzNjM2M7XG4gIG1hcmdpbjogNDBweCAwIDEwcHg7XG59XG5wIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cblxuLnJhdGluZ3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgZGl2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcbiAgICBtYXJnaW46IDAgMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgJi5zZWxlY3RlZCB7XG4gICAgICBib3JkZXItY29sb3I6ICMwODZiYWY7XG4gICAgfVxuICB9XG59XG5pb24taXRlbSB7XG4gIC0tY29sb3I6ICM0NDQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZGRkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1jb2xvci1mb2N1c2VkOiAjMDg2YmFmO1xuICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogIzA4NmJhZjtcbn1cbmlvbi10ZXh0YXJlYSB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNkZGQ7XG59XG4uZmVlZGJhY2stc2F2ZWQge1xuICBjb2xvcjogIzAwYjU0YTtcbiAgbWFyZ2luLXRvcDogNDBweDtcblxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogIzAwYjU0YTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZDogIzAwYjU0YTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIHBhZGRpbmc6IDEwcHggMjBweCA3cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA5MiU7XG4gIH1cbiAgLnJhdGluZ3MgZGl2IHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgaHRtbFtkYXRhLXRoZW1lPVwiYWNjZXNzaWJpbGl0eVwiXSB7XG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDEuNGVtICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxLjVlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 889:
/*!********************************************************************!*\
  !*** ./src/app/closing-screen/closing-screen.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content padding>\n  <div class=\"wrap\">\n    <div class=\"container\">\n      <div style=\"color: #ffffff; text-align: center; margin: 80px auto 40px\">\n        <h2>{{ configService.config.branding }}</h2>\n      </div>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title\n            >{{ 'closingScreen.theConsultationIsNowOver' | translate\n            }}</ion-card-title\n          >\n        </ion-card-header>\n\n        <ion-card-content>\n          <p>\n            {{ 'closingScreen.thankYouForUsing' | translate:configService.config\n            }}\n          </p>\n\n          <ng-container\n            *ngIf=\"currentUser && currentUser.role !== 'translator' && currentUser.role !== 'guest'\"\n          >\n            <ng-container *ngIf=\"!feedbackSaved\">\n              <h3>\n                {{ 'closingScreen.areYouSatisfied' |\n                translate:configService.config }}\n              </h3>\n\n              <div class=\"ratings\">\n                <ng-container *ngFor=\"let rating of ratings\">\n                  <div\n                    class=\"rating\"\n                    [class]=\"rating\"\n                    [class.selected]=\"rating===userRating\"\n                    (click)=\"onRatingClick(rating)\"\n                  >\n                    <img\n                      [src]=\"'/assets/images/smileys/' + rating + '.png'\"\n                      [alt]=\"rating\"\n                    />\n                  </div>\n                </ng-container>\n              </div>\n\n              <h3>{{ 'closingScreen.doYouWantTo' | translate }}</h3>\n              <ion-item lines=\"full\">\n                <ion-textarea\n                  [(ngModel)]=\"userComment\"\n                  name=\"userComment\"\n                  type=\"string\"\n                  placeholder=\"Votre commentaire\"\n                ></ion-textarea>\n              </ion-item>\n\n              <div class=\"buttons\">\n                <button class=\"submit-btn\" mat-button (click)=\"onFormSubmit()\">\n                  {{ 'closingScreen.sendMyFeedback' | translate }}\n                </button>\n              </div>\n            </ng-container>\n          </ng-container>\n\n          <ng-container *ngIf=\"feedbackSaved\">\n            <p class=\"feedback-saved\">\n              <span>✓</span> {{ 'closingScreen.thankYouForYourFeedback' |\n              translate }}\n            </p>\n          </ng-container>\n        </ion-card-content>\n      </ion-card>\n\n      <button\n        class=\"btn red big\"\n        mat-button\n        (click)=\"closeApp()\"\n        type=\"button\"\n        *ngIf=\"feedbackSaved && isNativeApp()\"\n      >\n        {{ 'login.closeTheApplication' | translate }}\n      </button>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_closing-screen_closing-screen_module_ts.js.map