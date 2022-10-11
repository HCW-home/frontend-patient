"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_consultations_consultations_module_ts"],{

/***/ 1523:
/*!*******************************************************!*\
  !*** ./src/app/consultations/consultations.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultationsPageModule": () => (/* binding */ ConsultationsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i18n/i18n.module */ 3401);
/* harmony import */ var _consultations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultations.page */ 3698);
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
        component: _consultations_page__WEBPACK_IMPORTED_MODULE_1__.ConsultationsPage
    }
];
let ConsultationsPageModule = class ConsultationsPageModule {
};
ConsultationsPageModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__.I18nModule
        ],
        declarations: [_consultations_page__WEBPACK_IMPORTED_MODULE_1__.ConsultationsPage]
    })
], ConsultationsPageModule);



/***/ }),

/***/ 3698:
/*!*****************************************************!*\
  !*** ./src/app/consultations/consultations.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultationsPage": () => (/* binding */ ConsultationsPage)
/* harmony export */ });
/* harmony import */ var _consultations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultations.page.html?ngResource */ 4764);
/* harmony import */ var _consultations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultations.page.scss?ngResource */ 489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _consultation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consultation.service */ 9936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9727);
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






let ConsultationsPage = class ConsultationsPage {
    constructor(consultationService, zone, activatedRoute) {
        this.consultationService = consultationService;
        this.zone = zone;
        this.activatedRoute = activatedRoute;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.status = this.activatedRoute.snapshot.data.status;
        // this.title = this.titles.find(t => this.status.split('|').includes(t.status ));
        this.getConsultations();
        this.getUnreadCount();
    }
    getConsultations() {
        this.overviewSub = this.consultationService.getConsultationsOverview().subscribe(consultations => {
            this.zone.run(() => {
                this.consultations = consultations.filter(c => this.status.split('|').includes(c.consultation.status));
                console.log('consultations', this.consultations);
            });
        });
    }
    getUnreadCount() {
        if (this.status === 'pending|active') {
            this.subscriptions.push((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.zip)(this.consultationService.unreadActiveCount(), this.consultationService.unreadPendingCount()).subscribe(count => {
                console.log('restuls ', count);
                this.zone.run(() => {
                    this.unreadCount = count[0] + count[1];
                });
            }));
        }
        if (this.status === 'closed') {
            this.subscriptions.push(this.consultationService.unreadClosedCount().subscribe(count => {
                this.zone.run(() => {
                    this.unreadCount = count;
                });
            }));
        }
    }
};
ConsultationsPage.ctorParameters = () => [
    { type: _consultation_service__WEBPACK_IMPORTED_MODULE_2__.ConsultationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
ConsultationsPage = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-consultations',
        template: _consultations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_consultations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _consultation_service__WEBPACK_IMPORTED_MODULE_2__.ConsultationService !== "undefined" && _consultation_service__WEBPACK_IMPORTED_MODULE_2__.ConsultationService) === "function" ? _a : Object, typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone) === "function" ? _b : Object, typeof (_c = typeof _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute) === "function" ? _c : Object])
], ConsultationsPage);



/***/ }),

/***/ 9727:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/zip.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZipOperator": () => (/* binding */ ZipOperator),
/* harmony export */   "ZipSubscriber": () => (/* binding */ ZipSubscriber),
/* harmony export */   "zip": () => (/* binding */ zip)
/* harmony export */ });
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromArray */ 8005);
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ 4327);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 14);
/* harmony import */ var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/symbol/iterator */ 2803);
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../innerSubscribe */ 2831);





function zip(...observables) {
  const resultSelector = observables[observables.length - 1];

  if (typeof resultSelector === 'function') {
    observables.pop();
  }

  return (0,_fromArray__WEBPACK_IMPORTED_MODULE_0__.fromArray)(observables, undefined).lift(new ZipOperator(resultSelector));
}
class ZipOperator {
  constructor(resultSelector) {
    this.resultSelector = resultSelector;
  }

  call(subscriber, source) {
    return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
  }

}
class ZipSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
  constructor(destination, resultSelector, values = Object.create(null)) {
    super(destination);
    this.resultSelector = resultSelector;
    this.iterators = [];
    this.active = 0;
    this.resultSelector = typeof resultSelector === 'function' ? resultSelector : undefined;
  }

  _next(value) {
    const iterators = this.iterators;

    if ((0,_util_isArray__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) {
      iterators.push(new StaticArrayIterator(value));
    } else if (typeof value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__.iterator] === 'function') {
      iterators.push(new StaticIterator(value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__.iterator]()));
    } else {
      iterators.push(new ZipBufferIterator(this.destination, this, value));
    }
  }

  _complete() {
    const iterators = this.iterators;
    const len = iterators.length;
    this.unsubscribe();

    if (len === 0) {
      this.destination.complete();
      return;
    }

    this.active = len;

    for (let i = 0; i < len; i++) {
      let iterator = iterators[i];

      if (iterator.stillUnsubscribed) {
        const destination = this.destination;
        destination.add(iterator.subscribe());
      } else {
        this.active--;
      }
    }
  }

  notifyInactive() {
    this.active--;

    if (this.active === 0) {
      this.destination.complete();
    }
  }

  checkIterators() {
    const iterators = this.iterators;
    const len = iterators.length;
    const destination = this.destination;

    for (let i = 0; i < len; i++) {
      let iterator = iterators[i];

      if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
        return;
      }
    }

    let shouldComplete = false;
    const args = [];

    for (let i = 0; i < len; i++) {
      let iterator = iterators[i];
      let result = iterator.next();

      if (iterator.hasCompleted()) {
        shouldComplete = true;
      }

      if (result.done) {
        destination.complete();
        return;
      }

      args.push(result.value);
    }

    if (this.resultSelector) {
      this._tryresultSelector(args);
    } else {
      destination.next(args);
    }

    if (shouldComplete) {
      destination.complete();
    }
  }

  _tryresultSelector(args) {
    let result;

    try {
      result = this.resultSelector.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  }

}

class StaticIterator {
  constructor(iterator) {
    this.iterator = iterator;
    this.nextResult = iterator.next();
  }

  hasValue() {
    return true;
  }

  next() {
    const result = this.nextResult;
    this.nextResult = this.iterator.next();
    return result;
  }

  hasCompleted() {
    const nextResult = this.nextResult;
    return Boolean(nextResult && nextResult.done);
  }

}

class StaticArrayIterator {
  constructor(array) {
    this.array = array;
    this.index = 0;
    this.length = 0;
    this.length = array.length;
  }

  [_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__.iterator]() {
    return this;
  }

  next(value) {
    const i = this.index++;
    const array = this.array;
    return i < this.length ? {
      value: array[i],
      done: false
    } : {
      value: null,
      done: true
    };
  }

  hasValue() {
    return this.array.length > this.index;
  }

  hasCompleted() {
    return this.array.length === this.index;
  }

}

class ZipBufferIterator extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__.SimpleOuterSubscriber {
  constructor(destination, parent, observable) {
    super(destination);
    this.parent = parent;
    this.observable = observable;
    this.stillUnsubscribed = true;
    this.buffer = [];
    this.isComplete = false;
  }

  [_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__.iterator]() {
    return this;
  }

  next() {
    const buffer = this.buffer;

    if (buffer.length === 0 && this.isComplete) {
      return {
        value: null,
        done: true
      };
    } else {
      return {
        value: buffer.shift(),
        done: false
      };
    }
  }

  hasValue() {
    return this.buffer.length > 0;
  }

  hasCompleted() {
    return this.buffer.length === 0 && this.isComplete;
  }

  notifyComplete() {
    if (this.buffer.length > 0) {
      this.isComplete = true;
      this.parent.notifyInactive();
    } else {
      this.destination.complete();
    }
  }

  notifyNext(innerValue) {
    this.buffer.push(innerValue);
    this.parent.checkIterators();
  }

  subscribe() {
    return (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_4__.innerSubscribe)(this.observable, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__.SimpleInnerSubscriber(this));
  }

}

/***/ }),

/***/ 489:
/*!******************************************************************!*\
  !*** ./src/app/consultations/consultations.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-list > ion-item {\n  background-color: white;\n  --min-height: 60px;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  padding: 10px;\n  padding-bottom: 0px;\n  color: rgb(58, 58, 58);\n}\n\nion-row.patient {\n  font-weight: bold;\n}\n\nion-row.time {\n  font-size: 12px;\n}\n\nion-col.arrow {\n  font-size: 20px;\n  padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImNvbnN1bHRhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QgPiBpb24taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtLW1pbi1oZWlnaHQ6IDYwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgY29sb3I6IHJnYig1OCwgNTgsIDU4KTtcbn1cblxuaW9uLXJvdy5wYXRpZW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1yb3cudGltZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLWNvbC5hcnJvdyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4iXX0= */";

/***/ }),

/***/ 4764:
/*!******************************************************************!*\
  !*** ./src/app/consultations/consultations.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar style=\"display:flex;\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title\n      style=\"text-align: center;\n      font-size: 0.9em;\">\n        {{ 'consultations.openedConsultations' | translate }}\n      </ion-title>\n    <ion-badge\n      *ngIf=\"unreadCount && status !== 'closed'\"\n      slot=\"end\"\n      style=\" line-height: 1.3; border-radius: 20px; width: 20px; height: 20px; text-align: center;     margin-right: 10px;\"\n      color=\"danger\"\n      >{{unreadCount}}</ion-badge\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list class=\"ion-margin\">\n    <ion-item\n      *ngFor=\"let consultation of consultations\"\n      lines=\"full\"\n      [routerLink]=\"'/consultation/'+consultation._id\"\n    >\n      <ion-grid class=\"ion-no-padding ion-no-margin\">\n        <ion-row class=\"ion-no-padding ion-no-margin\">\n          <ion-col size=\"10\">\n            <ion-row class=\"patient\">\n              {{consultation.consultation.firstName}}\n              {{consultation.consultation.lastName | uppercase}}</ion-row\n            >\n            <ion-row class=\"time\"\n              >{{consultation.consultation.createdAt | date:'d MMMM\n              HH:mm':'fr-FR'}}\n            </ion-row>\n          </ion-col>\n          <ion-col\n            style=\"padding:0; display: flex; align-items:center;\"\n            size=\"1\"\n          >\n            <ion-badge\n              *ngIf=\"consultation.unreadCount\"\n              style=\"line-height: 1.3; border-radius: 20px; width: 20px; height: 20px; text-align: center;\"\n              color=\"danger\"\n              >{{consultation.unreadCount}}</ion-badge\n            >\n          </ion-col>\n          <ion-col\n            style=\" display: flex; align-items:center;\"\n            class=\"arrow\"\n            size=\"1\"\n          >\n            <ion-icon name=\"arrow-dropright\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_consultations_consultations_module_ts.js.map