"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cgu_cgu_module_ts"],{

/***/ 8922:
/*!***********************************!*\
  !*** ./src/app/cgu/cgu.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CguPageModule": () => (/* binding */ CguPageModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ 982);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i18n/i18n.module */ 3401);
/* harmony import */ var _cgu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cgu.page */ 9182);
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
        component: _cgu_page__WEBPACK_IMPORTED_MODULE_1__.CguPage
    }
];
let CguPageModule = class CguPageModule {
};
CguPageModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__.I18nModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_7__.MarkdownModule.forRoot()
        ],
        declarations: [_cgu_page__WEBPACK_IMPORTED_MODULE_1__.CguPage]
    })
], CguPageModule);



/***/ }),

/***/ 9182:
/*!*********************************!*\
  !*** ./src/app/cgu/cgu.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CguPage": () => (/* binding */ CguPage)
/* harmony export */ });
/* harmony import */ var _cgu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cgu.page.html?ngResource */ 8109);
/* harmony import */ var _cgu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cgu.page.scss?ngResource */ 4825);
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




let CguPage = class CguPage {
    constructor(configService) {
        this.configService = configService;
    }
    ngOnInit() {
    }
};
CguPage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService }
];
CguPage = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cgu',
        template: _cgu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cgu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService !== "undefined" && _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService) === "function" ? _a : Object])
], CguPage);



/***/ }),

/***/ 5398:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isNumeric */ 7269);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 7507);




function timer(dueTime = 0, periodOrScheduler, scheduler) {
  let period = -1;

  if ((0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(periodOrScheduler)) {
    period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
  } else if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(periodOrScheduler)) {
    scheduler = periodOrScheduler;
  }

  if (!(0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(scheduler)) {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_2__.async;
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
    const due = (0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(dueTime) ? dueTime : +dueTime - scheduler.now();
    return scheduler.schedule(dispatch, due, {
      index: 0,
      period,
      subscriber
    });
  });
}

function dispatch(state) {
  const {
    index,
    period,
    subscriber
  } = state;
  subscriber.next(index);

  if (subscriber.closed) {
    return;
  } else if (period === -1) {
    return subscriber.complete();
  }

  state.index = index + 1;
  this.schedule(state, period);
}

/***/ }),

/***/ 5921:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 2831);

function takeUntil(notifier) {
  return source => source.lift(new TakeUntilOperator(notifier));
}

class TakeUntilOperator {
  constructor(notifier) {
    this.notifier = notifier;
  }

  call(subscriber, source) {
    const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
    const notifierSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));

    if (notifierSubscription && !takeUntilSubscriber.seenValue) {
      takeUntilSubscriber.add(notifierSubscription);
      return source.subscribe(takeUntilSubscriber);
    }

    return takeUntilSubscriber;
  }

}

class TakeUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
  constructor(destination) {
    super(destination);
    this.seenValue = false;
  }

  notifyNext() {
    this.seenValue = true;
    this.complete();
  }

  notifyComplete() {}

}

/***/ }),

/***/ 7269:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric)
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 4327);

function isNumeric(val) {
  return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && val - parseFloat(val) + 1 >= 0;
}

/***/ }),

/***/ 4825:
/*!**********************************************!*\
  !*** ./src/app/cgu/cgu.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #266eb7;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #ffbb00;\n  --ion-color-secondary-rgb: 255, 204, 0;\n  --ion-color-secondary-contrast: #000000;\n  --ion-color-secondary-contrast-rgb: 0, 0, 0;\n  --ion-color-secondary-shade: #bd9700;\n  --ion-color-secondary-tint: #ffd21e;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: ##ffcd00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #494b50;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #cccccc;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  --blue-bg-color: #0072bb;\n}\n.wrap {\n  width: 100%;\n  min-height: 100%;\n  background-image: url(\"/icons/background.jpg\");\n  background-image: url(\"/background@2x.jpg\");\n  background-color: #266eb7 !important;\n  background-color: var(--ion-color-primary) !important;\n  background-size: 100%;\n  background-position: center;\n  background-attachment: fixed;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n::ng-deep html[data-theme=accessibility] .wrap {\n  background-image: none !important;\n  background-image: initial !important;\n}\n.container {\n  display: block;\n  margin: 30px auto;\n  width: 70%;\n  color: #ffffff;\n}\nli {\n  margin-top: 21.5339;\n  margin-bottom: 21.5339;\n}\nmarkdown ::ng-deep ol {\n  counter-reset: item;\n  list-style: none;\n}\nmarkdown ::ng-deep li:before {\n  content: counters(item, \".\") \". \";\n  counter-increment: item;\n  margin-left: -40px;\n  margin-right: 10px;\n}\nmarkdown ::ng-deep li > p {\n  display: inline;\n}\nmarkdown ::ng-deep li {\n  padding-top: 19px;\n  padding-bottom: 10px;\n}\n.title {\n  text-align: center;\n  margin: 80px auto 40px;\n  font-size: 1.2em;\n}\n.back {\n  text-align: center;\n  display: block;\n}\n.back-link {\n  background: #fff;\n  color: #006eb5;\n  text-decoration: none;\n  border-radius: 60px;\n  padding: 5px 15px 5px 15px;\n  margin-top: 30px;\n}\na {\n  color: #fff;\n}\nh3 {\n  margin: 40px 0 20px;\n}\ntable {\n  border-collapse: collapse;\n  margin-bottom: 40px;\n}\ntable tr {\n  border-bottom: 1px solid #2a99e6;\n}\ntable td {\n  padding: 10px;\n}\ntable .label {\n  font-weight: 700;\n}\n@media screen and (max-width: 800px) {\n  .container {\n    width: 92%;\n  }\n  .title {\n    margin: 40px auto 40px;\n  }\n  table td {\n    padding: 4px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiY2d1LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwQkFBQTtBQU1BO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwrQkFBQTtFQUVBLHdCQUFBO0FDakJGO0FBaEVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VEb0ZFLDhDQUFBO0VBTUEsMkNBQUE7RUN4RkYsb0NBQUE7RUFBQSxxREFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFvRUY7QUFoRUk7RUFDRSxpQ0FBQTtFQUFBLG9DQUFBO0FBbUVOO0FBL0RBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFrRUY7QUEvREE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBa0VGO0FBOURFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQWlFSjtBQS9ERTtFQUNFLGlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBaUVKO0FBOURFO0VBQ0UsZUFBQTtBQWdFSjtBQTdERTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUErREo7QUEzREE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUE4REY7QUEzREE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUE4REY7QUEzREE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQThERjtBQTNEQTtFQUNFLFdBQUE7QUE4REY7QUE1REE7RUFDRSxtQkFBQTtBQStERjtBQTdEQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFnRUY7QUE5REU7RUFDRSxnQ0FBQTtBQWdFSjtBQTlERTtFQUNFLGFBQUE7QUFnRUo7QUE5REU7RUFDRSxnQkFBQTtBQWdFSjtBQTVEQTtFQUNFO0lBQ0UsVUFBQTtFQStERjtFQTdEQTtJQUNFLHNCQUFBO0VBK0RGO0VBNURFO0lBQ0UsWUFBQTtFQThESjtBQUNGIiwiZmlsZSI6ImNndS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG5cbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiRiYWNrZ3JvdW5kLWltYWdlLXBhdGg6IFwiL2ljb25zL2JhY2tncm91bmQuanBnXCI7XG4kYmFja2dyb3VuZC1pbWFnZS0yeC1wYXRoOiBcIi9iYWNrZ3JvdW5kQDJ4LmpwZ1wiO1xuOnJvb3Qge1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzI2NmViNztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzMTcxZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzRjOGRmZjtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICNmZmJiMDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDI1NSwgMjA0LCAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogI2JkOTcwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICNmZmQyMWU7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzcwNDRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTIsIDY4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjMzY2UwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjN2U1N2ZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMTBkYzYwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMTYsIDIyMCwgOTY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMGVjMjU0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMyOGUwNzA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICMjZmZjZDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMDYsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiNTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQzMWE7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZjA0MTQxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNDUsIDYxLCA2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNkMzM5Mzk7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZjI1NDU0O1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjNDk0YjUwO1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM0LCAzNDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjY2NjY2NjOyAvLyAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ0LCAyNDQ7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAvLyAtLWZjOiNDQ0NDQ0M7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLS1ibHVlLWJnLWNvbG9yOiAjMDA3MmJiO1xufVxuQG1peGluIGJhY2tncm91bmRNaXhpbigkaGFzQmFja2dyb3VuZEltYWdlKSB7XG4gIEBpZiAkYmFja2dyb3VuZC1pbWFnZS1wYXRoIHtcbiAgICAvL2RvIHNvbWV0aGluZ1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkYmFja2dyb3VuZC1pbWFnZS1wYXRoKTtcbiAgfSBAZWxzZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdW5zZXQgIWltcG9ydGFudDtcbiAgfVxuICBAaWYgJGJhY2tncm91bmQtaW1hZ2UtMngtcGF0aCB7XG4gICAgLy9kbyBzb21ldGhpbmdcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGJhY2tncm91bmQtaW1hZ2UtMngtcGF0aCk7XG4gIH0gQGVsc2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLndyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgQGluY2x1ZGUgYmFja2dyb3VuZE1peGluKCRiYWNrZ3JvdW5kLWltYWdlLXBhdGgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuOjpuZy1kZWVwIHtcbiAgaHRtbFtkYXRhLXRoZW1lPVwiYWNjZXNzaWJpbGl0eVwiXSB7XG4gICAgLndyYXAge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIHdpZHRoOiA3MCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5saSB7XG4gIG1hcmdpbi10b3A6IDIxLjUzMzk7XG4gIG1hcmdpbi1ib3R0b206IDIxLjUzMzk7XG59XG5cbm1hcmtkb3duIDo6bmctZGVlcCB7IFxuICBvbCB7XG4gICAgY291bnRlci1yZXNldDogaXRlbTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIGxpOmJlZm9yZSB7IFxuICAgIGNvbnRlbnQ6IGNvdW50ZXJzKGl0ZW0sIFwiLlwiKSBcIi4gXCI7XG4gICAgY291bnRlci1pbmNyZW1lbnQ6IGl0ZW07XG4gICAgbWFyZ2luLWxlZnQ6IC00MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIGxpID4gcCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG4gIFxuICBsaSB7XG4gICAgcGFkZGluZy10b3A6IDE5cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDgwcHggYXV0byA0MHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uYmFjayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5iYWNrLWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzAwNmViNTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuaDMge1xuICBtYXJnaW46IDQwcHggMCAyMHB4O1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gIHRyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJhOTllNjtcbiAgfVxuICB0ZCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAubGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkyJTtcbiAgfVxuICAudGl0bGUge1xuICAgIG1hcmdpbjogNDBweCBhdXRvIDQwcHg7XG4gIH1cbiAgdGFibGUge1xuICAgIHRkIHtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 8109:
/*!**********************************************!*\
  !*** ./src/app/cgu/cgu.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-content padding>\n  <div class=\"wrap\">\n    <div class=\"container\">\n      <div class=\"title\">\n        \n        </div>\n        <div class=\"back\">\n          <a [routerLink]=\"['/login']\" class=\"back-link\" mat-button>{{ 'cgu.backToHome' | translate }}</a>\n        </div>\n\n        <h2>{{ 'cgu.termsAndConditions' | translate }}</h2>\n\n        <markdown src=\"assets/terms.md\">\n          Terms and conditions have not yet been configured.\n        </markdown>\n\n      <div class=\"back\">\n        <a [routerLink]=\"['/login']\" class=\"back-link\" mat-button>{{ 'cgu.backToHome' | translate }}</a>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 4611:
/*!***********************************************!*\
  !*** ./node_modules/marked/lib/marked.esm.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lexer": () => (/* binding */ Lexer),
/* harmony export */   "Parser": () => (/* binding */ Parser),
/* harmony export */   "Renderer": () => (/* binding */ Renderer),
/* harmony export */   "Slugger": () => (/* binding */ Slugger),
/* harmony export */   "TextRenderer": () => (/* binding */ TextRenderer),
/* harmony export */   "Tokenizer": () => (/* binding */ Tokenizer),
/* harmony export */   "defaults": () => (/* binding */ defaults),
/* harmony export */   "getDefaults": () => (/* binding */ getDefaults),
/* harmony export */   "lexer": () => (/* binding */ lexer),
/* harmony export */   "marked": () => (/* binding */ marked),
/* harmony export */   "options": () => (/* binding */ options),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "parseInline": () => (/* binding */ parseInline),
/* harmony export */   "parser": () => (/* binding */ parser),
/* harmony export */   "setOptions": () => (/* binding */ setOptions),
/* harmony export */   "use": () => (/* binding */ use),
/* harmony export */   "walkTokens": () => (/* binding */ walkTokens)
/* harmony export */ });
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */
function getDefaults() {
  return {
    async: false,
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}

let defaults = getDefaults();

function changeDefaults(newDefaults) {
  defaults = newDefaults;
}
/**
 * Helpers
 */


const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

const getEscapeReplacement = ch => escapeReplacements[ch];

function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
/**
 * @param {string} html
 */

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === 'colon') return ':';

    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }

    return '';
  });
}

const caret = /(^|[^\[])\^/g;
/**
 * @param {string | RegExp} regex
 * @param {string} opt
 */

function edit(regex, opt) {
  regex = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
/**
 * @param {boolean} sanitize
 * @param {string} base
 * @param {string} href
 */

function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;

    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
    } catch (e) {
      return null;
    }

    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }

  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }

  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }

  return href;
}

const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
/**
 * @param {string} base
 * @param {string} href
 */

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }

  base = baseUrls[' ' + base];
  const relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }

    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }

    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

const noopTest = {
  exec: function noopTest() {}
};

function merge(obj) {
  let i = 1,
      target,
      key;

  for (; i < arguments.length; i++) {
    target = arguments[i];

    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false,
        curr = offset;

    while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;

    if (escaped) {
      // odd number of slashes means | is escaped
      // so we leave it alone
      return '|';
    } else {
      // add space before unescaped |
      return ' |';
    }
  }),
        cells = row.split(/ \|/);
  let i = 0; // First/last cell in a row cannot be empty if it has no leading/trailing pipe

  if (!cells[0].trim()) {
    cells.shift();
  }

  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }

  return cells;
}
/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param {string} str
 * @param {string} c
 * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
 */


function rtrim(str, c, invert) {
  const l = str.length;

  if (l === 0) {
    return '';
  } // Length of suffix matching the invert condition.


  let suffLen = 0; // Step left until we fail to match the invert condition.

  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);

    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.slice(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }

  const l = str.length;
  let level = 0,
      i = 0;

  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;

      if (level < 0) {
        return i;
      }
    }
  }

  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
} // copied from https://stackoverflow.com/a/5450113/806777

/**
 * @param {string} pattern
 * @param {number} count
 */


function repeatString(pattern, count) {
  if (count < 1) {
    return '';
  }

  let result = '';

  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }

    count >>= 1;
    pattern += pattern;
  }

  return result + pattern;
}

function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, '$1');

  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    const token = {
      type: 'link',
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text)
    };
    lexer.state.inLink = false;
    return token;
  }

  return {
    type: 'image',
    raw,
    href,
    title,
    text: escape(text)
  };
}

function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);

  if (matchIndentToCode === null) {
    return text;
  }

  const indentToCode = matchIndentToCode[1];
  return text.split('\n').map(node => {
    const matchIndentInNode = node.match(/^\s+/);

    if (matchIndentInNode === null) {
      return node;
    }

    const [indentInNode] = matchIndentInNode;

    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }

    return node;
  }).join('\n');
}
/**
 * Tokenizer
 */


class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }

  space(src) {
    const cap = this.rules.block.newline.exec(src);

    if (cap && cap[0].length > 0) {
      return {
        type: 'space',
        raw: cap[0]
      };
    }
  }

  code(src) {
    const cap = this.rules.block.code.exec(src);

    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: cap[0],
        codeBlockStyle: 'indented',
        text: !this.options.pedantic ? rtrim(text, '\n') : text
      };
    }
  }

  fences(src) {
    const cap = this.rules.block.fences.exec(src);

    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || '');
      return {
        type: 'code',
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }

  heading(src) {
    const cap = this.rules.block.heading.exec(src);

    if (cap) {
      let text = cap[2].trim(); // remove trailing #s

      if (/#$/.test(text)) {
        const trimmed = rtrim(text, '#');

        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          // CommonMark requires space before trailing #s
          text = trimmed.trim();
        }
      }

      return {
        type: 'heading',
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }

  hr(src) {
    const cap = this.rules.block.hr.exec(src);

    if (cap) {
      return {
        type: 'hr',
        raw: cap[0]
      };
    }
  }

  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);

    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, '');
      return {
        type: 'blockquote',
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }

  list(src) {
    let cap = this.rules.block.list.exec(src);

    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list = {
        type: 'list',
        raw: '',
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : '',
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;

      if (this.options.pedantic) {
        bull = isordered ? bull : '[*+-]';
      } // Get next list item


      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`); // Check if current bullet point can start a new List Item

      while (src) {
        endEarly = false;

        if (!(cap = itemRegex.exec(src))) {
          break;
        }

        if (this.rules.block.hr.test(src)) {
          // End list if bullet was actually HR (possibly move into itemRegex?)
          break;
        }

        raw = cap[0];
        src = src.substring(raw.length);
        line = cap[2].split('\n', 1)[0];
        nextLine = src.split('\n', 1)[0];

        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/); // Find first non-space char

          indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent

          itemContents = line.slice(indent);
          indent += cap[1].length;
        }

        blankLine = false;

        if (!line && /^ *$/.test(nextLine)) {
          // Items begin with at most one blank line
          raw += nextLine + '\n';
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }

        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`); // Check if following lines should be included in List Item

          while (src) {
            rawLine = src.split('\n', 1)[0];
            line = rawLine; // Re-align to follow commonmark nesting rules

            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
            } // End list item if found code fences


            if (fencesBeginRegex.test(line)) {
              break;
            } // End list item if found start of new heading


            if (headingBeginRegex.test(line)) {
              break;
            } // End list item if found start of new bullet


            if (nextBulletRegex.test(line)) {
              break;
            } // Horizontal rule found


            if (hrRegex.test(src)) {
              break;
            }

            if (line.search(/[^ ]/) >= indent || !line.trim()) {
              // Dedent if possible
              itemContents += '\n' + line.slice(indent);
            } else if (!blankLine) {
              // Until blank line, item doesn't need indentation
              itemContents += '\n' + line;
            } else {
              // Otherwise, improper indentation ends this item
              break;
            }

            if (!blankLine && !line.trim()) {
              // Check if current line is blank
              blankLine = true;
            }

            raw += rawLine + '\n';
            src = src.substring(rawLine.length + 1);
          }
        }

        if (!list.loose) {
          // If the previous item ended with a blank line, the list is loose
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        } // Check for task list items


        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);

          if (istask) {
            ischecked = istask[0] !== '[ ] ';
            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
          }
        }

        list.items.push({
          type: 'list_item',
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
      } // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic


      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      const l = list.items.length; // Item child tokens handled here at end because we needed to have the final item to trim it first

      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        const spacers = list.items[i].tokens.filter(t => t.type === 'space');
        const hasMultipleLineBreaks = spacers.every(t => {
          const chars = t.raw.split('');
          let lineBreaks = 0;

          for (const char of chars) {
            if (char === '\n') {
              lineBreaks += 1;
            }

            if (lineBreaks > 1) {
              return true;
            }
          }

          return false;
        });

        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
          list.loose = true;
          list.items[i].loose = true;
        }
      }

      return list;
    }
  }

  html(src) {
    const cap = this.rules.block.html.exec(src);

    if (cap) {
      const token = {
        type: 'html',
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      };

      if (this.options.sanitize) {
        const text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.type = 'paragraph';
        token.text = text;
        token.tokens = this.lexer.inline(text);
      }

      return token;
    }
  }

  def(src) {
    const cap = this.rules.block.def.exec(src);

    if (cap) {
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      return {
        type: 'def',
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }

  table(src) {
    const cap = this.rules.block.table.exec(src);

    if (cap) {
      const item = {
        type: 'table',
        header: splitCells(cap[1]).map(c => {
          return {
            text: c
          };
        }),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l = item.align.length;
        let i, j, k, row;

        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        l = item.rows.length;

        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(c => {
            return {
              text: c
            };
          });
        } // parse child tokens inside headers and cells
        // header child tokens


        l = item.header.length;

        for (j = 0; j < l; j++) {
          item.header[j].tokens = this.lexer.inline(item.header[j].text);
        } // cell child tokens


        l = item.rows.length;

        for (j = 0; j < l; j++) {
          row = item.rows[j];

          for (k = 0; k < row.length; k++) {
            row[k].tokens = this.lexer.inline(row[k].text);
          }
        }

        return item;
      }
    }
  }

  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);

    if (cap) {
      return {
        type: 'heading',
        raw: cap[0],
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }

  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);

    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1];
      return {
        type: 'paragraph',
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }

  text(src) {
    const cap = this.rules.block.text.exec(src);

    if (cap) {
      return {
        type: 'text',
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }

  escape(src) {
    const cap = this.rules.inline.escape.exec(src);

    if (cap) {
      return {
        type: 'escape',
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }

  tag(src) {
    const cap = this.rules.inline.tag.exec(src);

    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }

      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }

      return {
        type: this.options.sanitize ? 'text' : 'html',
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
    }
  }

  link(src) {
    const cap = this.rules.inline.link.exec(src);

    if (cap) {
      const trimmedUrl = cap[2].trim();

      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        // commonmark requires matching angle brackets
        if (!/>$/.test(trimmedUrl)) {
          return;
        } // ending angle bracket cannot be escaped


        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');

        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        // find closing parenthesis
        const lastParenIndex = findClosingBracket(cap[2], '()');

        if (lastParenIndex > -1) {
          const start = cap[0].indexOf('!') === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
      }

      let href = cap[2];
      let title = '';

      if (this.options.pedantic) {
        // split pedantic href and title
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }

      href = href.trim();

      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          // pedantic allows starting angle bracket without ending angle bracket
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }

      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
        title: title ? title.replace(this.rules.inline._escapes, '$1') : title
      }, cap[0], this.lexer);
    }
  }

  reflink(src, links) {
    let cap;

    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];

      if (!link || !link.href) {
        const text = cap[0].charAt(0);
        return {
          type: 'text',
          raw: text,
          text
        };
      }

      return outputLink(cap, link, cap[0], this.lexer);
    }
  }

  emStrong(src, maskedSrc, prevChar = '') {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return; // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well

    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;
    const nextChar = match[1] || match[2] || '';

    if (!nextChar || nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar))) {
      const lLength = match[0].length - 1;
      let rDelim,
          rLength,
          delimTotal = lLength,
          midDelimTotal = 0;
      const endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0; // Clip maskedSrc to same section of string as src (move to lexer?)

      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim) continue; // skip single * in __abc*abc__

        rLength = rDelim.length;

        if (match[3] || match[4]) {
          // found another Left Delim
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          // either Left or Right Delim
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue; // CommonMark Emphasis Rules 9-10
          }
        }

        delimTotal -= rLength;
        if (delimTotal > 0) continue; // Haven't found enough closing delimiters
        // Remove extra characters. *a*** -> *a*

        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal); // Create `em` if smallest delimiter has odd char count. *a***

        if (Math.min(lLength, rLength) % 2) {
          const text = src.slice(1, lLength + match.index + rLength);
          return {
            type: 'em',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text,
            tokens: this.lexer.inlineTokens(text)
          };
        } // Create 'strong' if smallest delimiter has even char count. **a***


        const text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: 'strong',
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }

  codespan(src) {
    const cap = this.rules.inline.code.exec(src);

    if (cap) {
      let text = cap[2].replace(/\n/g, ' ');
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);

      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }

      text = escape(text, true);
      return {
        type: 'codespan',
        raw: cap[0],
        text
      };
    }
  }

  br(src) {
    const cap = this.rules.inline.br.exec(src);

    if (cap) {
      return {
        type: 'br',
        raw: cap[0]
      };
    }
  }

  del(src) {
    const cap = this.rules.inline.del.exec(src);

    if (cap) {
      return {
        type: 'del',
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }

  autolink(src, mangle) {
    const cap = this.rules.inline.autolink.exec(src);

    if (cap) {
      let text, href;

      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }

      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [{
          type: 'text',
          raw: text,
          text
        }]
      };
    }
  }

  url(src, mangle) {
    let cap;

    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;

      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        let prevCapZero;

        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);

        text = escape(cap[0]);

        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }

      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [{
          type: 'text',
          raw: text,
          text
        }]
      };
    }
  }

  inlineText(src, smartypants) {
    const cap = this.rules.inline.text.exec(src);

    if (cap) {
      let text;

      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
      }

      return {
        type: 'text',
        raw: cap[0],
        text
      };
    }
  }

}
/**
 * Block-Level Grammar
 */


const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
  + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
  + '|comment[^\\n]*(\\n+|$)' // (2)
  + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
  + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
  + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
  + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
  + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
  + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
  + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace('bull', block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();
/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);
/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  table: '^ *([^\\n ].*\\|.*)\\n' // Header
  + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
  + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

});
block.gfm.table = edit(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
.getRegex();
block.gfm.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('table', block.gfm.table) // interrupt paragraphs with table
.replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
  + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  paragraph: edit(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
});
/**
 * Inline-Level Grammar
 */

const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
  + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
  + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
  + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
  + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong  () Consume to delim (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _

  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
}; // list of punctuation marks from CommonMark spec
// without * and _ to handle the different emphasis markers * and _

inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex(); // sequences em should skip over [title](link), `code`, <html>

inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;
inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g').replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g').replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace('comment', inline._comment).replace('attribute', inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace('label', inline._label).replace('ref', block._label).getRegex();
inline.nolink = edit(inline.nolink).replace('ref', block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();
/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);
/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
});
/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
});
/**
 * smartypants text replacement
 * @param {string} text
 */

function smartypants(text) {
  return text // em-dashes
  .replace(/---/g, '\u2014') // en-dashes
  .replace(/--/g, '\u2013') // opening singles
  .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018') // closing singles & apostrophes
  .replace(/'/g, '\u2019') // opening doubles
  .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c') // closing doubles
  .replace(/"/g, '\u201d') // ellipses
  .replace(/\.{3}/g, '\u2026');
}
/**
 * mangle email addresses
 * @param {string} text
 */


function mangle(text) {
  let out = '',
      i,
      ch;
  const l = text.length;

  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);

    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }

    out += '&#' + ch + ';';
  }

  return out;
}
/**
 * Block Lexer
 */


class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };

    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;

      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }

    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */


  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */


  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }
  /**
   * Static Lex Inline Method
   */


  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }
  /**
   * Preprocessing
   */


  lex(src) {
    src = src.replace(/\r\n|\r/g, '\n');
    this.blockTokens(src, this.tokens);
    let next;

    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }

    return this.tokens;
  }
  /**
   * Lexing
   */


  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + '    '.repeat(tabs.length);
      });
    }

    let token, lastToken, cutSrc, lastParagraphClipped;

    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(extTokenizer => {
        if (token = extTokenizer.call({
          lexer: this
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }

        return false;
      })) {
        continue;
      } // newline


      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);

        if (token.raw.length === 1 && tokens.length > 0) {
          // if there's a single \n as a spacer, it's terminating the last line,
          // so move it there so that we don't get unecessary paragraph tags
          tokens[tokens.length - 1].raw += '\n';
        } else {
          tokens.push(token);
        }

        continue;
      } // code


      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }

        continue;
      } // fences


      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // heading


      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // hr


      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // blockquote


      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // list


      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // html


      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // def


      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];

        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }

        continue;
      } // table (gfm)


      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // lheading


      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // top-level paragraph
      // prevent paragraph consuming extensions by clipping 'src' to extension start


      cutSrc = src;

      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function (getStartIndex) {
          tempStart = getStartIndex.call({
            lexer: this
          }, tempSrc);

          if (typeof tempStart === 'number' && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });

        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }

      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];

        if (lastParagraphClipped && lastToken.type === 'paragraph') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }

        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      } // text


      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];

        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }

        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    this.state.top = true;
    return tokens;
  }

  inline(src, tokens = []) {
    this.inlineQueue.push({
      src,
      tokens
    });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */


  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc; // String with links masked to avoid interference with em and strong

    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar; // Mask out reflinks

    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);

      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    } // Mask out other blocks


    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    } // Mask out escaped em & strong delimiters


    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }

    while (src) {
      if (!keepPrevChar) {
        prevChar = '';
      }

      keepPrevChar = false; // extensions

      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(extTokenizer => {
        if (token = extTokenizer.call({
          lexer: this
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }

        return false;
      })) {
        continue;
      } // escape


      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // tag


      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];

        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }

        continue;
      } // link


      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // reflink, nolink


      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];

        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }

        continue;
      } // em & strong


      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // code


      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // br


      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // del (gfm)


      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // autolink


      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // url (gfm)


      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // text
      // prevent inlineText consuming extensions by clipping 'src' to extension start


      cutSrc = src;

      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function (getStartIndex) {
          tempStart = getStartIndex.call({
            lexer: this
          }, tempSrc);

          if (typeof tempStart === 'number' && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });

        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }

      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);

        if (token.raw.slice(-1) !== '_') {
          // Track prevChar before string of ____ started
          prevChar = token.raw.slice(-1);
        }

        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];

        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }

        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    return tokens;
  }

}
/**
 * Renderer
 */


class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }

  code(code, infostring, escaped) {
    const lang = (infostring || '').match(/\S*/)[0];

    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);

      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    code = code.replace(/\n$/, '') + '\n';

    if (!lang) {
      return '<pre><code>' + (escaped ? code : escape(code, true)) + '</code></pre>\n';
    }

    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '</code></pre>\n';
  }
  /**
   * @param {string} quote
   */


  blockquote(quote) {
    return `<blockquote>\n${quote}</blockquote>\n`;
  }

  html(html) {
    return html;
  }
  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */


  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>\n`;
    } // ignore IDs


    return `<h${level}>${text}</h${level}>\n`;
  }

  hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  }

  list(body, ordered, start) {
    const type = ordered ? 'ol' : 'ul',
          startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }
  /**
   * @param {string} text
   */


  listitem(text) {
    return `<li>${text}</li>\n`;
  }

  checkbox(checked) {
    return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
  }
  /**
   * @param {string} text
   */


  paragraph(text) {
    return `<p>${text}</p>\n`;
  }
  /**
   * @param {string} header
   * @param {string} body
   */


  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;
    return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
  }
  /**
   * @param {string} content
   */


  tablerow(content) {
    return `<tr>\n${content}</tr>\n`;
  }

  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td';
    const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag + content + `</${type}>\n`;
  }
  /**
   * span level renderer
   * @param {string} text
   */


  strong(text) {
    return `<strong>${text}</strong>`;
  }
  /**
   * @param {string} text
   */


  em(text) {
    return `<em>${text}</em>`;
  }
  /**
   * @param {string} text
   */


  codespan(text) {
    return `<code>${text}</code>`;
  }

  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }
  /**
   * @param {string} text
   */


  del(text) {
    return `<del>${text}</del>`;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */


  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

    if (href === null) {
      return text;
    }

    let out = '<a href="' + escape(href) + '"';

    if (title) {
      out += ' title="' + title + '"';
    }

    out += '>' + text + '</a>';
    return out;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */


  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

    if (href === null) {
      return text;
    }

    let out = `<img src="${href}" alt="${text}"`;

    if (title) {
      out += ` title="${title}"`;
    }

    out += this.options.xhtml ? '/>' : '>';
    return out;
  }

  text(text) {
    return text;
  }

}
/**
 * TextRenderer
 * returns only the textual part of the token
 */


class TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }

  em(text) {
    return text;
  }

  codespan(text) {
    return text;
  }

  del(text) {
    return text;
  }

  html(text) {
    return text;
  }

  text(text) {
    return text;
  }

  link(href, title, text) {
    return '' + text;
  }

  image(href, title, text) {
    return '' + text;
  }

  br() {
    return '';
  }

}
/**
 * Slugger generates header id
 */


class Slugger {
  constructor() {
    this.seen = {};
  }
  /**
   * @param {string} value
   */


  serialize(value) {
    return value.toLowerCase().trim() // remove html tags
    .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
  }
  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */


  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;

    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];

      do {
        occurenceAccumulator++;
        slug = originalSlug + '-' + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }

    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }

    return slug;
  }
  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */


  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }

}
/**
 * Parsing & Compiling
 */


class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  /**
   * Static Parse Method
   */


  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */


  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }
  /**
   * Parse Loop
   */


  parse(tokens, top = true) {
    let out = '',
        i,
        j,
        k,
        l2,
        l3,
        row,
        cell,
        header,
        body,
        token,
        ordered,
        start,
        loose,
        itemBody,
        item,
        checked,
        task,
        checkbox,
        ret;
    const l = tokens.length;

    for (i = 0; i < l; i++) {
      token = tokens[i]; // Run any renderer extensions

      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({
          parser: this
        }, token);

        if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'space':
          {
            continue;
          }

        case 'hr':
          {
            out += this.renderer.hr();
            continue;
          }

        case 'heading':
          {
            out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
            continue;
          }

        case 'code':
          {
            out += this.renderer.code(token.text, token.lang, token.escaped);
            continue;
          }

        case 'table':
          {
            header = ''; // header

            cell = '';
            l2 = token.header.length;

            for (j = 0; j < l2; j++) {
              cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
                header: true,
                align: token.align[j]
              });
            }

            header += this.renderer.tablerow(cell);
            body = '';
            l2 = token.rows.length;

            for (j = 0; j < l2; j++) {
              row = token.rows[j];
              cell = '';
              l3 = row.length;

              for (k = 0; k < l3; k++) {
                cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                  header: false,
                  align: token.align[k]
                });
              }

              body += this.renderer.tablerow(cell);
            }

            out += this.renderer.table(header, body);
            continue;
          }

        case 'blockquote':
          {
            body = this.parse(token.tokens);
            out += this.renderer.blockquote(body);
            continue;
          }

        case 'list':
          {
            ordered = token.ordered;
            start = token.start;
            loose = token.loose;
            l2 = token.items.length;
            body = '';

            for (j = 0; j < l2; j++) {
              item = token.items[j];
              checked = item.checked;
              task = item.task;
              itemBody = '';

              if (item.task) {
                checkbox = this.renderer.checkbox(checked);

                if (loose) {
                  if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                    item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                      item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                    }
                  } else {
                    item.tokens.unshift({
                      type: 'text',
                      text: checkbox
                    });
                  }
                } else {
                  itemBody += checkbox;
                }
              }

              itemBody += this.parse(item.tokens, loose);
              body += this.renderer.listitem(itemBody, task, checked);
            }

            out += this.renderer.list(body, ordered, start);
            continue;
          }

        case 'html':
          {
            // TODO parse inline content if parameter markdown=1
            out += this.renderer.html(token.text);
            continue;
          }

        case 'paragraph':
          {
            out += this.renderer.paragraph(this.parseInline(token.tokens));
            continue;
          }

        case 'text':
          {
            body = token.tokens ? this.parseInline(token.tokens) : token.text;

            while (i + 1 < l && tokens[i + 1].type === 'text') {
              token = tokens[++i];
              body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
            }

            out += top ? this.renderer.paragraph(body) : body;
            continue;
          }

        default:
          {
            const errMsg = 'Token with "' + token.type + '" type was not found.';

            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }

    return out;
  }
  /**
   * Parse Inline Tokens
   */


  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = '',
        i,
        token,
        ret;
    const l = tokens.length;

    for (i = 0; i < l; i++) {
      token = tokens[i]; // Run any renderer extensions

      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({
          parser: this
        }, token);

        if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'escape':
          {
            out += renderer.text(token.text);
            break;
          }

        case 'html':
          {
            out += renderer.html(token.text);
            break;
          }

        case 'link':
          {
            out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
            break;
          }

        case 'image':
          {
            out += renderer.image(token.href, token.title, token.text);
            break;
          }

        case 'strong':
          {
            out += renderer.strong(this.parseInline(token.tokens, renderer));
            break;
          }

        case 'em':
          {
            out += renderer.em(this.parseInline(token.tokens, renderer));
            break;
          }

        case 'codespan':
          {
            out += renderer.codespan(token.text);
            break;
          }

        case 'br':
          {
            out += renderer.br();
            break;
          }

        case 'del':
          {
            out += renderer.del(this.parseInline(token.tokens, renderer));
            break;
          }

        case 'text':
          {
            out += renderer.text(token.text);
            break;
          }

        default:
          {
            const errMsg = 'Token with "' + token.type + '" type was not found.';

            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }

    return out;
  }

}
/**
 * Marked
 */


function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }

  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }

  if (typeof opt === 'function') {
    callback = opt;
    opt = null;
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  if (callback) {
    const highlight = opt.highlight;
    let tokens;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    const done = function (err) {
      let out;

      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }

          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }

      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;
    if (!tokens.length) return done();
    let pending = 0;
    marked.walkTokens(tokens, function (token) {
      if (token.type === 'code') {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function (err, code) {
            if (err) {
              return done(err);
            }

            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }

            pending--;

            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });

    if (pending === 0) {
      done();
    }

    return;
  }

  function onError(e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';

    if (opt.silent) {
      return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
    }

    throw e;
  }

  try {
    const tokens = Lexer.lex(src, opt);

    if (opt.walkTokens) {
      if (opt.async) {
        return Promise.all(marked.walkTokens(tokens, opt.walkTokens)).then(() => {
          return Parser.parse(tokens, opt);
        }).catch(onError);
      }

      marked.walkTokens(tokens, opt.walkTokens);
    }

    return Parser.parse(tokens, opt);
  } catch (e) {
    onError(e);
  }
}
/**
 * Options
 */


marked.options = marked.setOptions = function (opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;
marked.defaults = defaults;
/**
 * Use Extension
 */

marked.use = function (...args) {
  const opts = merge({}, ...args);
  const extensions = marked.defaults.extensions || {
    renderers: {},
    childTokens: {}
  };
  let hasExtensions;
  args.forEach(pack => {
    // ==-- Parse "addon" extensions --== //
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach(ext => {
        if (!ext.name) {
          throw new Error('extension name required');
        }

        if (ext.renderer) {
          // Renderer extensions
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;

          if (prevRenderer) {
            // Replace extension with func to run new extension but fall back if false
            extensions.renderers[ext.name] = function (...args) {
              let ret = ext.renderer.apply(this, args);

              if (ret === false) {
                ret = prevRenderer.apply(this, args);
              }

              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }

        if (ext.tokenizer) {
          // Tokenizer Extensions
          if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') {
            throw new Error("extension level must be 'block' or 'inline'");
          }

          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }

          if (ext.start) {
            // Function to check for start of token
            if (ext.level === 'block') {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === 'inline') {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }

        if (ext.childTokens) {
          // Child tokens to be visited by walkTokens
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    } // ==-- Parse "overwrite" extensions --== //


    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer();

      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop]; // Replace renderer with func to run extension, but fall back if false

        renderer[prop] = (...args) => {
          let ret = pack.renderer[prop].apply(renderer, args);

          if (ret === false) {
            ret = prevRenderer.apply(renderer, args);
          }

          return ret;
        };
      }

      opts.renderer = renderer;
    }

    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer();

      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop]; // Replace tokenizer with func to run extension, but fall back if false

        tokenizer[prop] = (...args) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args);

          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args);
          }

          return ret;
        };
      }

      opts.tokenizer = tokenizer;
    } // ==-- Parse WalkTokens extensions --== //


    if (pack.walkTokens) {
      const walkTokens = marked.defaults.walkTokens;

      opts.walkTokens = function (token) {
        let values = [];
        values.push(pack.walkTokens.call(this, token));

        if (walkTokens) {
          values = values.concat(walkTokens.call(this, token));
        }

        return values;
      };
    }

    if (hasExtensions) {
      opts.extensions = extensions;
    }

    marked.setOptions(opts);
  });
};
/**
 * Run callback for every token
 */


marked.walkTokens = function (tokens, callback) {
  let values = [];

  for (const token of tokens) {
    values = values.concat(callback.call(marked, token));

    switch (token.type) {
      case 'table':
        {
          for (const cell of token.header) {
            values = values.concat(marked.walkTokens(cell.tokens, callback));
          }

          for (const row of token.rows) {
            for (const cell of row) {
              values = values.concat(marked.walkTokens(cell.tokens, callback));
            }
          }

          break;
        }

      case 'list':
        {
          values = values.concat(marked.walkTokens(token.items, callback));
          break;
        }

      default:
        {
          if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
            // Walk any extensions
            marked.defaults.extensions.childTokens[token.type].forEach(function (childTokens) {
              values = values.concat(marked.walkTokens(token[childTokens], callback));
            });
          } else if (token.tokens) {
            values = values.concat(marked.walkTokens(token.tokens, callback));
          }
        }
    }
  }

  return values;
};
/**
 * Parse Inline
 * @param {string} src
 */


marked.parseInline = function (src, opt) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked.parseInline(): input parameter is undefined or null');
  }

  if (typeof src !== 'string') {
    throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  try {
    const tokens = Lexer.lexInline(src, opt);

    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }

    return Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';

    if (opt.silent) {
      return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
    }

    throw e;
  }
};
/**
 * Expose
 */


marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;
const options = marked.options;
const setOptions = marked.setOptions;
const use = marked.use;
const walkTokens = marked.walkTokens;
const parseInline = marked.parseInline;
const parse = marked;
const parser = Parser.parse;
const lexer = Lexer.lex;


/***/ }),

/***/ 982:
/*!*************************************************************!*\
  !*** ./node_modules/ngx-markdown/fesm2020/ngx-markdown.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClipboardButtonComponent": () => (/* binding */ ClipboardButtonComponent),
/* harmony export */   "ClipboardOptions": () => (/* binding */ ClipboardOptions),
/* harmony export */   "ClipboardRenderOptions": () => (/* binding */ ClipboardRenderOptions),
/* harmony export */   "ExtendedRenderer": () => (/* binding */ ExtendedRenderer),
/* harmony export */   "KatexSpecificOptions": () => (/* binding */ KatexSpecificOptions),
/* harmony export */   "LanguagePipe": () => (/* binding */ LanguagePipe),
/* harmony export */   "MarkdownComponent": () => (/* binding */ MarkdownComponent),
/* harmony export */   "MarkdownModule": () => (/* binding */ MarkdownModule),
/* harmony export */   "MarkdownPipe": () => (/* binding */ MarkdownPipe),
/* harmony export */   "MarkdownService": () => (/* binding */ MarkdownService),
/* harmony export */   "MarkedOptions": () => (/* binding */ MarkedOptions),
/* harmony export */   "MarkedRenderer": () => (/* reexport safe */ marked__WEBPACK_IMPORTED_MODULE_0__.Renderer),
/* harmony export */   "MermaidAPI": () => (/* binding */ MermaidAPI),
/* harmony export */   "PrismPlugin": () => (/* binding */ PrismPlugin),
/* harmony export */   "SECURITY_CONTEXT": () => (/* binding */ SECURITY_CONTEXT),
/* harmony export */   "errorClipboardNotLoaded": () => (/* binding */ errorClipboardNotLoaded),
/* harmony export */   "errorClipboardViewContainerRequired": () => (/* binding */ errorClipboardViewContainerRequired),
/* harmony export */   "errorJoyPixelsNotLoaded": () => (/* binding */ errorJoyPixelsNotLoaded),
/* harmony export */   "errorKatexNotLoaded": () => (/* binding */ errorKatexNotLoaded),
/* harmony export */   "errorMermaidNotLoaded": () => (/* binding */ errorMermaidNotLoaded),
/* harmony export */   "errorSrcWithoutHttpClient": () => (/* binding */ errorSrcWithoutHttpClient)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 5670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ 4611);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);










const _c0 = ["*"];
const BUTTON_TEXT_COPY = 'Copy';
const BUTTON_TEXT_COPIED = 'Copied';

class ClipboardButtonComponent {
  constructor() {
    this._buttonClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.copied$ = this._buttonClick$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(true), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(3000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mapTo)(false)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.shareReplay)(1));
    this.copiedText$ = this.copied$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(copied => copied ? BUTTON_TEXT_COPIED : BUTTON_TEXT_COPY));
  }

  onCopyToClipboardClick() {
    this._buttonClick$.next();
  }

}

ClipboardButtonComponent.ɵfac = function ClipboardButtonComponent_Factory(t) {
  return new (t || ClipboardButtonComponent)();
};

ClipboardButtonComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: ClipboardButtonComponent,
  selectors: [["markdown-clipboard"]],
  decls: 4,
  vars: 7,
  consts: [[1, "markdown-clipboard-button", 3, "click"]],
  template: function ClipboardButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClipboardButtonComponent_Template_button_click_0_listener() {
        return ctx.onCopyToClipboardClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("copied", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, ctx.copied$));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 5, ctx.copiedText$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](ClipboardButtonComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component,
    args: [{
      selector: 'markdown-clipboard',
      template: `
    <button
      class="markdown-clipboard-button"
      [class.copied]="copied$ | async"
      (click)="onCopyToClipboardClick()"
    >{{ copiedText$ | async }}</button>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();

class ClipboardOptions {}

class ClipboardRenderOptions extends ClipboardOptions {}
/* eslint-disable */


class KatexSpecificOptions {}

class LanguagePipe {
  transform(value, language) {
    if (value == null) {
      value = '';
    }

    if (language == null) {
      language = '';
    }

    if (typeof value !== 'string') {
      console.error(`LanguagePipe has been invoked with an invalid value type [${typeof value}]`);
      return value;
    }

    if (typeof language !== 'string') {
      console.error(`LanguagePipe has been invoked with an invalid parameter [${typeof language}]`);
      return value;
    }

    return '```' + language + '\n' + value + '\n```';
  }

}

LanguagePipe.ɵfac = function LanguagePipe_Factory(t) {
  return new (t || LanguagePipe)();
};

LanguagePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefinePipe"]({
  name: "language",
  type: LanguagePipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](LanguagePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Pipe,
    args: [{
      name: 'language'
    }]
  }], null, null);
})();

var PrismPlugin;

(function (PrismPlugin) {
  PrismPlugin["CommandLine"] = "command-line";
  PrismPlugin["LineHighlight"] = "line-highlight";
  PrismPlugin["LineNumbers"] = "line-numbers";
})(PrismPlugin || (PrismPlugin = {}));

class MarkedOptions {}
/* eslint-disable max-len */


const errorJoyPixelsNotLoaded = '[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information';
const errorKatexNotLoaded = '[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information';
const errorMermaidNotLoaded = '[ngx-markdown] When using the `mermaid` attribute you *have to* include Mermaid files to `angular.json` or use imports. See README for more information';
const errorClipboardNotLoaded = '[ngx-markdown] When using the `clipboard` attribute you *have to* include Clipboard files to `angular.json` or use imports. See README for more information';
const errorClipboardViewContainerRequired = '[ngx-markdown] When using the `clipboard` attribute you *have to* provide the `viewContainerRef` parameter to `MarkdownService.render()` function';
const errorSrcWithoutHttpClient = '[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information';
/* eslint-enable max-len */

const SECURITY_CONTEXT = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.InjectionToken('SECURITY_CONTEXT');

class ExtendedRenderer extends marked__WEBPACK_IMPORTED_MODULE_0__.Renderer {
  constructor() {
    super(...arguments);
    this.ɵNgxMarkdownRendererExtended = false;
  }

}

class MarkdownService {
  constructor(platform, securityContext, http, clipboardOptions, options, sanitizer) {
    this.platform = platform;
    this.securityContext = securityContext;
    this.http = http;
    this.clipboardOptions = clipboardOptions;
    this.sanitizer = sanitizer;
    this.DEFAULT_PARSE_OPTIONS = {
      decodeHtml: false,
      inline: false,
      emoji: false,
      mermaid: false,
      markedOptions: undefined
    };
    this.DEFAULT_RENDER_OPTIONS = {
      clipboard: false,
      clipboardOptions: undefined,
      katex: false,
      katexOptions: undefined,
      mermaid: false,
      mermaidOptions: undefined
    };
    this.DEFAULT_MARKED_OPTIONS = {
      renderer: new marked__WEBPACK_IMPORTED_MODULE_0__.Renderer()
    };
    this.DEFAULT_KATEX_OPTIONS = {
      delimiters: [{
        left: "$$",
        right: "$$",
        display: true
      }, {
        left: "$",
        right: "$",
        display: false
      }, {
        left: "\\(",
        right: "\\)",
        display: false
      }, {
        left: "\\begin{equation}",
        right: "\\end{equation}",
        display: true
      }, {
        left: "\\begin{align}",
        right: "\\end{align}",
        display: true
      }, {
        left: "\\begin{alignat}",
        right: "\\end{alignat}",
        display: true
      }, {
        left: "\\begin{gather}",
        right: "\\end{gather}",
        display: true
      }, {
        left: "\\begin{CD}",
        right: "\\end{CD}",
        display: true
      }, {
        left: "\\[",
        right: "\\]",
        display: true
      }]
    };
    this.DEFAULT_MERMAID_OPTIONS = {
      startOnLoad: false
    };
    this.DEFAULT_CLIPBOARD_OPTIONS = {
      buttonComponent: undefined
    };
    this._reload$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.reload$ = this._reload$.asObservable();
    this.options = options;
  }

  get options() {
    return this._options;
  }

  set options(value) {
    this._options = { ...this.DEFAULT_MARKED_OPTIONS,
      ...value
    };
  }

  get renderer() {
    return this.options.renderer;
  }

  set renderer(value) {
    this.options.renderer = value;
  }

  parse(markdown, options = this.DEFAULT_PARSE_OPTIONS) {
    const {
      decodeHtml,
      inline,
      emoji,
      mermaid,
      markedOptions = this.options
    } = options;

    if (mermaid) {
      this.renderer = this.extendRenderer(markedOptions.renderer || new marked__WEBPACK_IMPORTED_MODULE_0__.Renderer());
    }

    const trimmed = this.trimIndentation(markdown);
    const decoded = decodeHtml ? this.decodeHtml(trimmed) : trimmed;
    const emojified = emoji ? this.parseEmoji(decoded) : decoded;
    const marked = this.parseMarked(emojified, markedOptions, inline);
    return this.sanitizer.sanitize(this.securityContext, marked) || '';
  }

  render(element, options = this.DEFAULT_RENDER_OPTIONS, viewContainerRef) {
    const {
      clipboard,
      clipboardOptions,
      katex,
      katexOptions,
      mermaid,
      mermaidOptions
    } = options;

    if (clipboard) {
      this.renderClipboard(element, viewContainerRef, { ...this.DEFAULT_CLIPBOARD_OPTIONS,
        ...this.clipboardOptions,
        ...clipboardOptions
      });
    }

    if (katex) {
      this.renderKatex(element, { ...this.DEFAULT_KATEX_OPTIONS,
        ...katexOptions
      });
    }

    if (mermaid) {
      this.renderMermaid(element, { ...this.DEFAULT_MERMAID_OPTIONS,
        ...mermaidOptions
      });
    }

    this.highlight(element);
  }

  reload() {
    this._reload$.next();
  }

  getSource(src) {
    if (!this.http) {
      throw new Error(errorSrcWithoutHttpClient);
    }

    return this.http.get(src, {
      responseType: 'text'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(markdown => this.handleExtension(src, markdown)));
  }

  highlight(element) {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platform)) {
      return;
    }

    if (typeof Prism === 'undefined' || typeof Prism.highlightAllUnder === 'undefined') {
      return;
    }

    if (!element) {
      element = document;
    }

    const noLanguageElements = element.querySelectorAll('pre code:not([class*="language-"])');
    Array.prototype.forEach.call(noLanguageElements, x => x.classList.add('language-none'));
    Prism.highlightAllUnder(element);
  }

  decodeHtml(html) {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platform)) {
      return html;
    }

    const textarea = document.createElement('textarea');
    textarea.innerHTML = html;
    return textarea.value;
  }

  extendRenderer(renderer) {
    const extendedRenderer = renderer;

    if (extendedRenderer.ɵNgxMarkdownRendererExtended === true) {
      return renderer;
    } // eslint-disable-next-line @typescript-eslint/unbound-method


    const defaultCode = renderer.code;

    renderer.code = function (code, language, isEscaped) {
      return language === 'mermaid' ? `<div class="mermaid">${code}</div>` : defaultCode.call(this, code, language, isEscaped);
    };

    extendedRenderer.ɵNgxMarkdownRendererExtended = true;
    return renderer;
  }

  handleExtension(src, markdown) {
    const urlProtocolIndex = src.lastIndexOf('://');
    const urlWithoutProtocol = urlProtocolIndex > -1 ? src.substring(urlProtocolIndex + 4) : src;
    const lastSlashIndex = urlWithoutProtocol.lastIndexOf('/');
    const lastUrlSegment = lastSlashIndex > -1 ? urlWithoutProtocol.substring(lastSlashIndex + 1).split('?')[0] : '';
    const lastDotIndex = lastUrlSegment.lastIndexOf('.');
    const extension = lastDotIndex > -1 ? lastUrlSegment.substring(lastDotIndex + 1) : '';
    return !!extension && extension !== 'md' ? '```' + extension + '\n' + markdown + '\n```' : markdown;
  }

  parseMarked(html, markedOptions, inline = false) {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platform)) {
      return html;
    }

    if (inline) {
      return marked__WEBPACK_IMPORTED_MODULE_0__.marked.parseInline(html, markedOptions);
    }

    return marked__WEBPACK_IMPORTED_MODULE_0__.marked.parse(html, markedOptions);
  }

  parseEmoji(html) {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platform)) {
      return html;
    }

    if (typeof joypixels === 'undefined' || typeof joypixels.shortnameToUnicode === 'undefined') {
      throw new Error(errorJoyPixelsNotLoaded);
    }

    return joypixels.shortnameToUnicode(html);
  }

  renderKatex(element, options) {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platform)) {
      return;
    }

    if (typeof katex === 'undefined' || typeof renderMathInElement === 'undefined') {
      throw new Error(errorKatexNotLoaded);
    }

    renderMathInElement(element, options);
  }

  renderClipboard(element, viewContainerRef, options) {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platform)) {
      return;
    }

    if (typeof ClipboardJS === 'undefined') {
      throw new Error(errorClipboardNotLoaded);
    }

    if (!viewContainerRef) {
      throw new Error(errorClipboardViewContainerRequired);
    }

    const {
      buttonComponent,
      buttonTemplate
    } = options; // target every <pre> elements

    const preElements = element.querySelectorAll('pre');

    for (let i = 0; i < preElements.length; i++) {
      const preElement = preElements.item(i); // create <pre> wrapper element

      const preWrapperElement = document.createElement('div');
      preWrapperElement.style.position = 'relative';
      preElement.parentNode.insertBefore(preWrapperElement, preElement);
      preWrapperElement.appendChild(preElement); // create toolbar element

      const toolbarWrapperElement = document.createElement('div');
      toolbarWrapperElement.style.position = 'absolute';
      toolbarWrapperElement.style.top = '.5em';
      toolbarWrapperElement.style.right = '.5em';
      toolbarWrapperElement.style.opacity = '0';
      toolbarWrapperElement.style.transition = 'opacity 250ms ease-out';
      preWrapperElement.insertAdjacentElement('beforeend', toolbarWrapperElement); // register listener to show/hide toolbar

      preElement.onmouseover = () => toolbarWrapperElement.style.opacity = '1';

      preElement.onmouseout = () => toolbarWrapperElement.style.opacity = '0'; // declare embeddedViewRef holding variable


      let embeddedViewRef; // use provided component via input property
      // or provided via ClipboardOptions provider

      if (buttonComponent) {
        const componentRef = viewContainerRef.createComponent(buttonComponent);
        embeddedViewRef = componentRef.hostView;
      } // use provided template via input property
      else if (buttonTemplate) {
        embeddedViewRef = viewContainerRef.createEmbeddedView(buttonTemplate);
      } // use default component
      else {
        const componentRef = viewContainerRef.createComponent(ClipboardButtonComponent);
        embeddedViewRef = componentRef.hostView;
      } // declare clipboard instance variable


      let clipboardInstance; // attach clipboard.js to root node

      embeddedViewRef.rootNodes.forEach(node => {
        node.onmouseover = () => toolbarWrapperElement.style.opacity = '1';

        toolbarWrapperElement.appendChild(node);
        clipboardInstance = new ClipboardJS(node, {
          text: () => preElement.innerText
        });
      }); // destroy clipboard instance when view is destroyed

      embeddedViewRef.onDestroy(() => clipboardInstance.destroy());
    }
  }

  renderMermaid(element, options = this.DEFAULT_MERMAID_OPTIONS) {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this.platform)) {
      return;
    }

    if (typeof mermaid === 'undefined' || typeof mermaid.init === 'undefined') {
      throw new Error(errorMermaidNotLoaded);
    }

    const mermaidElements = element.querySelectorAll('.mermaid');

    if (mermaidElements.length === 0) {
      return;
    }

    mermaid.initialize(options);
    mermaid.init(mermaidElements);
  }

  trimIndentation(markdown) {
    if (!markdown) {
      return '';
    }

    let indentStart;
    return markdown.split('\n').map(line => {
      let lineIdentStart = indentStart;

      if (line.length > 0) {
        lineIdentStart = isNaN(lineIdentStart) ? line.search(/\S|$/) : Math.min(line.search(/\S|$/), lineIdentStart);
      }

      if (isNaN(indentStart)) {
        indentStart = lineIdentStart;
      }

      return lineIdentStart ? line.substring(lineIdentStart) : line;
    }).join('\n');
  }

}

MarkdownService.ɵfac = function MarkdownService_Factory(t) {
  return new (t || MarkdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](SECURITY_CONTEXT), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](ClipboardOptions, 8), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](MarkedOptions, 8), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.DomSanitizer));
};

MarkdownService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
  token: MarkdownService,
  factory: MarkdownService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](MarkdownService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_11__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.SecurityContext,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Inject,
        args: [SECURITY_CONTEXT]
      }]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Optional
      }]
    }, {
      type: ClipboardOptions,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Optional
      }]
    }, {
      type: MarkedOptions,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Optional
      }]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.DomSanitizer
    }];
  }, null);
})();
/* eslint-disable @typescript-eslint/no-unused-vars */


class MarkdownComponent {
  constructor(element, markdownService, viewContainerRef) {
    this.element = element;
    this.markdownService = markdownService;
    this.viewContainerRef = viewContainerRef; // Event emitters

    this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this._commandLine = false;
    this._clipboard = false;
    this._emoji = false;
    this._inline = false;
    this._katex = false;
    this._lineHighlight = false;
    this._lineNumbers = false;
    this._mermaid = false;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }

  get inline() {
    return this._inline;
  }

  set inline(value) {
    this._inline = this.coerceBooleanProperty(value);
  } // Plugin - clipboard


  get clipboard() {
    return this._clipboard;
  }

  set clipboard(value) {
    this._clipboard = this.coerceBooleanProperty(value);
  } // Plugin - emoji


  get emoji() {
    return this._emoji;
  }

  set emoji(value) {
    this._emoji = this.coerceBooleanProperty(value);
  } // Plugin - katex


  get katex() {
    return this._katex;
  }

  set katex(value) {
    this._katex = this.coerceBooleanProperty(value);
  } // Plugin - mermaid


  get mermaid() {
    return this._mermaid;
  }

  set mermaid(value) {
    this._mermaid = this.coerceBooleanProperty(value);
  } // Plugin - lineHighlight


  get lineHighlight() {
    return this._lineHighlight;
  }

  set lineHighlight(value) {
    this._lineHighlight = this.coerceBooleanProperty(value);
  } // Plugin - lineNumbers


  get lineNumbers() {
    return this._lineNumbers;
  }

  set lineNumbers(value) {
    this._lineNumbers = this.coerceBooleanProperty(value);
  } // Plugin - commandLine


  get commandLine() {
    return this._commandLine;
  }

  set commandLine(value) {
    this._commandLine = this.coerceBooleanProperty(value);
  }

  ngOnChanges() {
    this.loadContent();
  }

  loadContent() {
    if (this.data != null) {
      this.handleData();
      return;
    }

    if (this.src != null) {
      this.handleSrc();
      return;
    }
  }

  ngAfterViewInit() {
    if (!this.data && !this.src) {
      this.handleTransclusion();
    }

    this.markdownService.reload$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroyed$)).subscribe(() => this.loadContent());
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  render(markdown, decodeHtml = false) {
    const parsedOptions = {
      decodeHtml,
      inline: this.inline,
      emoji: this.emoji,
      mermaid: this.mermaid
    };
    const renderOptions = {
      clipboard: this.clipboard,
      clipboardOptions: {
        buttonComponent: this.clipboardButtonComponent,
        buttonTemplate: this.clipboardButtonTemplate
      },
      katex: this.katex,
      katexOptions: this.katexOptions,
      mermaid: this.mermaid,
      mermaidOptions: this.mermaidOptions
    };
    const parsed = this.markdownService.parse(markdown, parsedOptions);
    this.element.nativeElement.innerHTML = parsed;
    this.handlePlugins();
    this.markdownService.render(this.element.nativeElement, renderOptions, this.viewContainerRef);
    this.ready.emit();
  }

  coerceBooleanProperty(value) {
    return value != null && `${String(value)}` !== 'false';
  }

  handleData() {
    this.render(this.data);
  }

  handleSrc() {
    this.markdownService.getSource(this.src).subscribe({
      next: markdown => {
        this.render(markdown);
        this.load.emit(markdown);
      },
      error: error => this.error.emit(error)
    });
  }

  handleTransclusion() {
    this.render(this.element.nativeElement.innerHTML, true);
  }

  handlePlugins() {
    if (this.commandLine) {
      this.setPluginClass(this.element.nativeElement, PrismPlugin.CommandLine);
      this.setPluginOptions(this.element.nativeElement, {
        dataFilterOutput: this.filterOutput,
        dataHost: this.host,
        dataPrompt: this.prompt,
        dataOutput: this.output,
        dataUser: this.user
      });
    }

    if (this.lineHighlight) {
      this.setPluginOptions(this.element.nativeElement, {
        dataLine: this.line,
        dataLineOffset: this.lineOffset
      });
    }

    if (this.lineNumbers) {
      this.setPluginClass(this.element.nativeElement, PrismPlugin.LineNumbers);
      this.setPluginOptions(this.element.nativeElement, {
        dataStart: this.start
      });
    }
  }

  setPluginClass(element, plugin) {
    const preElements = element.querySelectorAll('pre');

    for (let i = 0; i < preElements.length; i++) {
      const classes = plugin instanceof Array ? plugin : [plugin];
      preElements.item(i).classList.add(...classes);
    }
  }

  setPluginOptions(element, options) {
    const preElements = element.querySelectorAll('pre');

    for (let i = 0; i < preElements.length; i++) {
      Object.keys(options).forEach(option => {
        const attributeValue = options[option];

        if (attributeValue) {
          const attributeName = this.toLispCase(option);
          preElements.item(i).setAttribute(attributeName, attributeValue.toString());
        }
      });
    }
  }

  toLispCase(value) {
    const upperChars = value.match(/([A-Z])/g);

    if (!upperChars) {
      return value;
    }

    let str = value.toString();

    for (let i = 0, n = upperChars.length; i < n; i++) {
      str = str.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase());
    }

    if (str.slice(0, 1) === '-') {
      str = str.slice(1);
    }

    return str;
  }

}

MarkdownComponent.ɵfac = function MarkdownComponent_Factory(t) {
  return new (t || MarkdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](MarkdownService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewContainerRef));
};

MarkdownComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: MarkdownComponent,
  selectors: [["markdown"], ["", "markdown", ""]],
  inputs: {
    data: "data",
    src: "src",
    inline: "inline",
    clipboard: "clipboard",
    clipboardButtonComponent: "clipboardButtonComponent",
    clipboardButtonTemplate: "clipboardButtonTemplate",
    emoji: "emoji",
    katex: "katex",
    katexOptions: "katexOptions",
    mermaid: "mermaid",
    mermaidOptions: "mermaidOptions",
    lineHighlight: "lineHighlight",
    line: "line",
    lineOffset: "lineOffset",
    lineNumbers: "lineNumbers",
    start: "start",
    commandLine: "commandLine",
    filterOutput: "filterOutput",
    host: "host",
    prompt: "prompt",
    output: "output",
    user: "user"
  },
  outputs: {
    error: "error",
    load: "load",
    ready: "ready"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MarkdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](MarkdownComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: 'markdown, [markdown]',
      template: '<ng-content></ng-content>'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef
    }, {
      type: MarkdownService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewContainerRef
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    src: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    clipboard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    clipboardButtonComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    clipboardButtonTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    emoji: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    katex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    katexOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    mermaid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    mermaidOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    lineHighlight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    lineOffset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    lineNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    start: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    commandLine: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    filterOutput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    host: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    prompt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    output: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    user: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    error: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output
    }],
    load: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output
    }],
    ready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output
    }]
  });
})();

class MarkdownPipe {
  constructor(domSanitizer, elementRef, markdownService, viewContainerRef, zone) {
    this.domSanitizer = domSanitizer;
    this.elementRef = elementRef;
    this.markdownService = markdownService;
    this.viewContainerRef = viewContainerRef;
    this.zone = zone;
  }

  transform(value, options) {
    if (value == null) {
      return '';
    }

    if (typeof value !== 'string') {
      console.error(`MarkdownPipe has been invoked with an invalid value type [${typeof value}]`);
      return value;
    }

    const markdown = this.markdownService.parse(value, options);
    this.zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.first)()).subscribe(() => this.markdownService.render(this.elementRef.nativeElement, options, this.viewContainerRef));
    return this.domSanitizer.bypassSecurityTrustHtml(markdown);
  }

}

MarkdownPipe.ɵfac = function MarkdownPipe_Factory(t) {
  return new (t || MarkdownPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.DomSanitizer, 16), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef, 16), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](MarkdownService, 16), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewContainerRef, 16), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone, 16));
};

MarkdownPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefinePipe"]({
  name: "markdown",
  type: MarkdownPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](MarkdownPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Pipe,
    args: [{
      name: 'markdown'
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.DomSanitizer
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef
    }, {
      type: MarkdownService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone
    }];
  }, null);
})();

const sharedDeclarations = [ClipboardButtonComponent, LanguagePipe, MarkdownComponent, MarkdownPipe];
const sharedEntryComponents = [ClipboardButtonComponent];

class MarkdownModule {
  static forRoot(markdownModuleConfig) {
    return {
      ngModule: MarkdownModule,
      providers: [MarkdownService, markdownModuleConfig && markdownModuleConfig.loader || [], markdownModuleConfig && markdownModuleConfig.clipboardOptions || [], markdownModuleConfig && markdownModuleConfig.markedOptions || [], {
        provide: SECURITY_CONTEXT,
        useValue: markdownModuleConfig && markdownModuleConfig.sanitize != null ? markdownModuleConfig.sanitize : _angular_core__WEBPACK_IMPORTED_MODULE_11__.SecurityContext.HTML
      }]
    };
  }

  static forChild() {
    return {
      ngModule: MarkdownModule
    };
  }

}

MarkdownModule.ɵfac = function MarkdownModule_Factory(t) {
  return new (t || MarkdownModule)();
};

MarkdownModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: MarkdownModule,
  declarations: [ClipboardButtonComponent, LanguagePipe, MarkdownComponent, MarkdownPipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
  exports: [ClipboardButtonComponent, LanguagePipe, MarkdownComponent, MarkdownPipe]
});
MarkdownModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](MarkdownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
      exports: sharedDeclarations,
      declarations: sharedDeclarations,
      entryComponents: sharedEntryComponents
    }]
  }], null, null);
})();
/* eslint-disable */


var MermaidAPI;

(function (MermaidAPI) {
  let SecurityLevel;

  (function (SecurityLevel) {
    /**
     * (default) tags in text are encoded, click functionality is disabled
     */
    SecurityLevel["Strict"] = "strict";
    /**
     * tags in text are allowed, click functionality is enabled
     */

    SecurityLevel["Loose"] = "loose";
    /**
     * html tags in text are allowed, (only script element is removed), click functionality is enabled
     */

    SecurityLevel["Antiscript"] = "antiscript";
    /**
     * with this security level all rendering takes place in a sandboxed iframe.
     * This prevent any javascript running in the context.
     * This may hinder interactive functionality of the diagram like scripts,
     * popups in sequence diagram or links to other tabs/targets etc.
     */

    SecurityLevel["Sandbox"] = "sandbox";
  })(SecurityLevel = MermaidAPI.SecurityLevel || (MermaidAPI.SecurityLevel = {}));

  let Theme;

  (function (Theme) {
    /**
     * Designed to modified, as the name implies it is supposed to be used as the base for making custom themes.
     */
    Theme["Base"] = "base";
    /**
     * A theme full of light greens that is easy on the eyes.
     */

    Theme["Forest"] = "forest";
    /**
     * A theme that would go well with other dark colored elements.
     */

    Theme["Dark"] = "dark";
    /**
     *  The default theme for all diagrams.
     */

    Theme["Default"] = "default";
    /**
     * The theme to be used for black and white printing
     */

    Theme["Neutral"] = "neutral";
  })(Theme = MermaidAPI.Theme || (MermaidAPI.Theme = {}));

  let LogLevel;

  (function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Warn"] = 3] = "Warn";
    LogLevel[LogLevel["Error"] = 4] = "Error";
    LogLevel[LogLevel["Fatal"] = 5] = "Fatal";
  })(LogLevel = MermaidAPI.LogLevel || (MermaidAPI.LogLevel = {}));
})(MermaidAPI || (MermaidAPI = {}));
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_cgu_cgu_module_ts.js.map