"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 1681:
/*!***********************************!*\
  !*** ./src/app/invite.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InviteService": () => (/* binding */ InviteService)
/* harmony export */ });
/* harmony import */ var _global_variable_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-variable.service */ 6898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;



let InviteService = class InviteService {
    constructor(http, globalVariableService) {
        this.http = http;
        this.globalVariableService = globalVariableService;
    }
    getInviteFromToken(token) {
        return this.http.get(this.globalVariableService.getApiPath() + '/invite/by-token/' + token);
    }
};
InviteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService }
];
InviteService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService !== "undefined" && _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService) === "function" ? _b : Object])
], InviteService);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i18n/i18n.module */ 3401);
/* harmony import */ var _select_language_select_language_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../select-language/select-language.component */ 2722);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var _translator_form_translator_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translator-form/translator-form.component */ 6994);
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
        component: _login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
            _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_0__.I18nModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        ],
        declarations: [
            _login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage,
            _select_language_select_language_component__WEBPACK_IMPORTED_MODULE_1__.SelectLanguageComponent,
            _translator_form_translator_form_component__WEBPACK_IMPORTED_MODULE_3__.TranslatorFormComponent
        ],
        exports: [
            _translator_form_translator_form_component__WEBPACK_IMPORTED_MODULE_3__.TranslatorFormComponent
        ]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _translator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../translator.service */ 8522);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../environments/environment */ 2340);
/* harmony import */ var _invite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../invite.service */ 1681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var hug_angular_lib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! hug-angular-lib */ 90);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _consultation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../consultation.service */ 9936);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config.service */ 6527);
/* harmony import */ var _socket_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../socket-events.service */ 7800);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/app */ 3253);


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;


















const coeff = 1000 * 60 * 5;
let LoginPage = class LoginPage {
  constructor(authService, route, router, conServ, platform, inviteService, sanitizer, datePipe, zone, translate, translatorServ, configService, socketService, roomService) {
    this.authService = authService;
    this.route = route;
    this.router = router;
    this.conServ = conServ;
    this.platform = platform;
    this.inviteService = inviteService;
    this.sanitizer = sanitizer;
    this.datePipe = datePipe;
    this.zone = zone;
    this.translate = translate;
    this.translatorServ = translatorServ;
    this.configService = configService;
    this.socketService = socketService;
    this.roomService = roomService;
    this.loading = false;
    this.submitted = false;
    this.error = "";
    this.connectionErrorMessage = "Le serveur distant n'est pas joinable, veuillez vérifier votre connectivité";
    this.inviteToken = "";
    this.inviteKey = "";
    this.invalidInvite = false;
    this.inviteKeyError = "";
    this.birthDate = "";
    this.birthError = "";
    this.invite = null;
    this.isScheduled = false; // Whether or not to display the mobile landing screen

    this.mobileLandScreen = false;
    this.subscriptions = [];
    this.showTranslatorConfirmation = false;
    this.noInviteError = false;
    this.noTokenProvided = false;
    this.translationRequestRefused = false;
    this.showNativeAppSuggestionAndroid = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.showNativeAppSuggestionAndroid;
    this.showNativeAppSuggestionIOS = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.showNativeAppSuggestionIOS;
    this.connectionErrorMessage = translate.instant("login.theRemoteServerIsNotReachable");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
    const inviteToken = localStorage.getItem("inviteToken");

    if (this.inviteToken !== inviteToken || this.inviteKey !== inviteToken) {
      this.inviteToken = inviteToken;
      this.inviteKey = this.inviteToken;
    }
  }

  ngOnInit() {
    const showNativeAppSuggestion = this.platform.is("ios") && _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.showNativeAppSuggestionIOS || this.platform.is("android") && _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.showNativeAppSuggestionAndroid;
    this.mobileLandScreen = this.platform.is("mobile") && (this.platform.is("ios") || this.platform.is("android")) && showNativeAppSuggestion;
    this.init();
    this.subscriptions.push(this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    }));
  }

  init() {
    var _this = this;

    return (0,_home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("init login");
      _this.inviteToken = _this.inviteToken || localStorage.getItem("inviteToken");
      _this.currentUser = _this.authService.currentUserValue;
      console.log(_this.inviteToken, _this.currentUser);

      if (_this.inviteToken && _this.inviteToken.length) {
        _this.handleToken(_this.inviteToken);
      } else if (_this.platform.is("mobile")) {
        console.log("No invite ...");
        _this.noInviteError = true;
        _this.noTokenProvided = true;

        if (_this.authService.currentUserValue) {
          console.log("Logout because there is a user and no invite token on init");
          yield _this.authService.logout();
        }
      }

      console.log("[LOGIN] Invite token: " + _this.inviteToken);
      _this.returnUrl = _this.route.snapshot.queryParams.returnUrl || "";

      _this.subscriptions.push(_this.authService.observeInviteToken().subscribe(inviteToken => {
        console.log("GOT inviteToken in login ");
        _this.inviteToken = inviteToken;

        _this.handleToken(_this.inviteToken);
      }));
    })();
  }

  handleUser(user) {
    console.log("HANDLE user>>>>>>>>>>>>>", user);
    this.currentUser = user; // Check if the client was in a consultation

    const consultationId = localStorage.getItem("currentConsultation");
    const videoCallTested = localStorage.getItem("videoCallTested");

    if (consultationId) {
      return this.handleConsultation(consultationId);
    } else {
      if (videoCallTested) {
        // create consultation
        this.conServ.createConsultation({
          queue: "covid19",
          gender: "unknown",
          IMADTeam: "none",
          invitationToken: this.inviteToken
        }).toPromise().then(consultation => {
          console.log("Consultation created ", consultation);

          if (!consultation) {
            return this.router.navigate(["await-consultation"]);
          }

          localStorage.setItem("currentConsultation", consultation.id);
          this.handleConsultation(consultation.id);
        }).catch(err => {
          console.log("Error creating consultation", err);
          this.handleTokenError(err);
        }).finally(() => {
          this.submitted = false;
          this.loading = false;
        });
      } else {
        console.log("Naviage to test");
        return this.router.navigate(["test-call"]);
      }
    }
  }

  handleConsultation(consultationId) {
    console.log("Handle consultation ", consultationId);
    const videoCallTested = localStorage.getItem("videoCallTested");

    if (videoCallTested) {
      return this.router.navigate(["consultation", consultationId]);
    } else {
      return this.router.navigate(["test-call"]);
    }
  }

  handleToken(inviteToken, accept = false) {
    console.log("HAndle token .........", this.inviteToken);
    this.zone.run(() => {
      this.noTokenProvided = false;
    });
    this.inviteToken = inviteToken;
    this.inviteKey = inviteToken; // get invite

    this.subscriptions.push(this.inviteService.getInviteFromToken(this.inviteToken).subscribe(invite => {
      this.invite = invite;
      this.handleInvite(invite, accept);
    }, err => this.handleTokenError(err)));
  }

  handleInvite(invite, accept) {
    var _this2 = this;

    return (0,_home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("handle invite.................", invite, invite.status);
      console.log("current user ", _this2.currentUser);
      _this2.invite = invite;
      const lang = window.localStorage.getItem("hhp-lang");

      _this2.translate.use(lang);
      /**
      if (invite.patientLanguage) {
        if (this.translate.getLangs().includes(invite.patientLanguage)) {
          this.translate.use(invite.patientLanguage);
          window.localStorage.setItem("hhp-lang", invite.patientLanguage);
        } else {
          this.translate.use("fr");
          window.localStorage.setItem("hhp-lang", "fr");
        }
      }
       */


      if (_this2.currentUser) {
        if (_this2.currentUser.inviteToken === _this2.invite.id) {
          if (invite.type === "TRANSLATOR_REQUEST") {
            return;
          }

          return _this2.handleUser(_this2.currentUser);
        } else {
          console.log("Logout because there is a user and invite token don't match");
          yield _this2.authService.logout();
          localStorage.setItem("inviteToken", _this2.inviteToken);
          _this2.noInviteError = null;
        }
      } else if (invite.status === "ACCEPTED" || invite.status === "REFUSED" || invite.status === "CANCELED") {
        _this2.handleTokenError("Invite status " + invite.status);

        return;
      } else {
        _this2.noInviteError = false;

        _this2.zone.run(() => {
          console.log("No error ");
          _this2.noInviteError = false;
        });

        setTimeout(() => {
          console.log("No error ");
          _this2.noInviteError = false;
        }, 100);
        console.log("DISCONNECT WEBSOCKET IF CONNECTED");

        _this2.socketService.disconnect();
      }

      if (accept) {
        _this2.acceptInvite(invite);
      } // handle user

    })();
  }

  acceptInvite(invite) {
    if (invite.type === "TRANSLATOR_REQUEST") {
      return;
    }

    if (invite.scheduledFor - Date.now() > 10 * 60 * 1000) {
      this.isScheduled = true;
      this.scheduledFor = new Date(invite.scheduledFor);
      this.scheduledForRounded = new Date(Math.round(this.scheduledFor.getTime() / coeff) * coeff);
      this.icsBlob = this.generateIcsBlob(this.scheduledFor);
      this.setAllowConsultationTimer(invite);
    } else {
      this.authService.loginWithInvite(this.inviteToken, this.birthDate, this.translator).toPromise().then(user => this.handleUser(user)).catch(err => {
        this.handleTokenError(err);
      });
    }
  }

  handleTokenError(err) {
    console.error("Handle token error ", err);
    setTimeout(() => {
      this.noInviteError = true;
    }, 100);
    console.log("Logout because of token error ", err);
    this.authService.logout(); // localStorage.clear()
  }

  onSubmit() {
    if (this.submitted) {
      return;
    }

    if (!this.inviteToken && !this.inviteKey) {
      this.inviteKeyError = this.translate.instant("login.pleaseEnterYourInvitationKey");
    } else {
      this.inviteKeyError = "";
    }

    if (this.inviteKeyError || this.birthError) {
      return;
    }

    this.submitted = true;
    this.loading = true;
    const inviteToken = this.inviteToken ? this.inviteToken : this.inviteKey;
    console.log(inviteToken);
    localStorage.setItem("inviteToken", inviteToken);
    this.loading = false;
    this.submitted = false; //console.log("SET LOADING FALSE AVEC");
    // Prevent loading issue not reverted when coming back to this page

    /*setTimeout(() => {
      this.zone.run(() => {
        console.log("SET LOADING FALSE AVEC 5s");
        this.loading = false;
        this.submitted = false;
      });
    }, 3000);
    */

    this.handleToken(inviteToken, true);
  }

  translatorSubmit(translator) {
    this.loading = true;
    console.log("On translator submit", translator, this.inviteToken, this);
    this.translator = translator;
    this.subscriptions.push(this.translatorServ.acceptRequest(this.inviteToken, translator).subscribe(res => {
      console.log("accepted ", res, this.showTranslatorConfirmation);
      this.zone.run(() => {
        this.translationRequestRefused = false;
        this.showTranslatorConfirmation = true;
      });
      this.loading = false;
      this.invite = null;
      this.inviteKey = null;
      this.inviteToken = null;
      localStorage.removeItem("inviteToken");
    }, err => {
      this.loading = false;
      console.log("error accepting request ", err);
      this.translatorAcceptError = err.error ? err.error.error || err.error : err;

      if (this.translatorAcceptError && this.translatorAcceptError.name === "ERROR_INVITE_ACCEPTED" || this.translatorAcceptError && this.translatorAcceptError.name === "ERROR_NO_INVITE") {
        localStorage.removeItem("inviteToken");
        this.invite = null;
        this.inviteKey = null;
        this.inviteToken = null;
      }
    }));
  }

  translatorRefused() {
    this.loading = true;
    this.subscriptions.push(this.translatorServ.refuseRequest(this.inviteToken).subscribe(res => {
      this.loading = false;
      this.invite = null;
      this.inviteKey = null;
      this.inviteToken = null;
      localStorage.removeItem("inviteToken");
      this.showTranslatorConfirmation = true;
      this.translationRequestRefused = true;
    }));
  }

  setAllowConsultationTimer(invite) {
    const inviteToken = this.inviteToken ? this.inviteToken : this.inviteKey;
    this.allowConsultationTimer = setTimeout(() => {
      this.isScheduled = false;
      this.loginInvite(inviteToken);
    }, invite.scheduledFor - 10 * 60 * 1000 - Date.now());
    console.log("timer set for ", new Date(invite.scheduledFor - 10 * 60 * 1000));
  }

  loginInvite(inviteToken) {
    const videoCallTested = localStorage.getItem("videoCallTested");

    if (videoCallTested) {
      this.authService.loginWithInvite(inviteToken, this.birthDate, this.translator).toPromise().then(user => {
        if (user.role === "translator") {
          return this.router.navigate(["await-consultation"]);
        }

        return this.conServ.createConsultation({
          queue: "covid19",
          gender: "unknown",
          IMADTeam: "none",
          invitationToken: inviteToken
        }).toPromise();
      }).then(consultation => {
        localStorage.setItem("currentConsultation", consultation.id);
        this.router.navigate(["consultation", consultation.id]); // this.router.navigate(['test-call']);
      }).catch(err => {
        console.log(err); // alert(err);

        this.noInviteError = true;
      }).finally(() => {
        this.submitted = false;
        this.loading = false;
      });
    } else {
      this.authService.loginWithInvite(inviteToken, this.birthDate, this.translator).toPromise().then(user => {
        this.router.navigate(["test-call"]);
      }).catch(err => {
        console.log(err);
      });
    }
  }

  ngOnDestroy() {
    if (this.subInviteToken) {
      this.subInviteToken.unsubscribe();
    }

    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
    clearInterval(this.allowConsultationTimer);
  }

  openApp() {
    if (this.platform.is("android")) {
      this.openAndroidApp();
    } else {
      const url = this.getCurrentUrl();
      console.log("Trying to open ", url);
      window.location.href = url;
    }
  }

  openAndroidApp() {
    const inviteToken = this.inviteToken ? this.inviteToken : this.inviteKey;

    if (inviteToken) {
      const url = "hugathome" + "://" + window.location.host + (inviteToken ? "?invite=" + inviteToken : "") + "&scheme=" + window.location.protocol;
      console.log("try top open" + url); // debugger;

      window.location.replace(url);
    }
  }

  getCurrentUrl() {
    const inviteToken = this.inviteToken ? this.inviteToken : this.inviteKey;
    return window.location.protocol + "//" + window.location.host + (inviteToken ? "?invite=" + inviteToken : "");
  }

  clearError() {
    this.noInviteError = false;
    localStorage.clear();
    this.inviteToken = null;
    this.inviteKey = null;
  }

  closeLandingScreen() {
    console.log("closeLandingScreen");
    console.log(this.inviteToken); // this.mobileLandScreen = false;

    if (this.inviteToken && this.inviteToken.length) {
      this.onSubmit();
    } else {
      this.noInviteError = true;
    }
  }

  closeApp() {
    localStorage.clear();
    _capacitor_app__WEBPACK_IMPORTED_MODULE_10__.App.exitApp();
  }
  /**
   * Check if the user is running on mobile (either web or native app).
   */


  isMobileUser() {
    return this.platform.is('ios') || this.platform.is('android');
  }
  /**
   * Check if the user is running an installed app.
   */


  isNativeApp() {
    return !this.platform.is('mobileweb') && (this.platform.is('ios') || this.platform.is('android'));
  }

  isProduction() {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production;
  }

  generateIcsBlob(date) {
    const url = this.getCurrentUrl();
    const event = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:HUGatHOME
CALSCALE:GREGORIAN
BEGIN:VTIMEZONE
TZID:Europe/Zurich
TZURL:http://tzurl.org/zoneinfo-outlook/Europe/Zurich
X-LIC-LOCATION:Europe/Zurich
BEGIN:DAYLIGHT
TZOFFSETFROM:+0100
TZOFFSETTO:+0200
TZNAME:CEST
DTSTART:19700329T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:+0200
TZOFFSETTO:+0100
TZNAME:CET
DTSTART:19701025T030000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTAMP:${this.datePipe.transform(new Date(), "yyyyMMddTHHmmss")}
UID:${Math.random().toString(36).substr(2, 9)}
DTSTART;TZID=Europe/Berlin:${this.datePipe.transform(date, "yyyyMMddTHHmmss")}
SUMMARY:Téléconsultation
URL:${encodeURI(url)}
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:Téléconsultation
TRIGGER:-PT1H
END:VALARM
END:VEVENT
END:VCALENDAR`;
    const blob = new Blob([event], {
      type: "text/calendar"
    });
    return this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
  }

};

LoginPage.ctorParameters = () => [{
  type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _consultation_service__WEBPACK_IMPORTED_MODULE_7__.ConsultationService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
}, {
  type: _invite_service__WEBPACK_IMPORTED_MODULE_5__.InviteService
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.NgZone
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService
}, {
  type: _translator_service__WEBPACK_IMPORTED_MODULE_3__.TranslatorService
}, {
  type: _config_service__WEBPACK_IMPORTED_MODULE_8__.ConfigService
}, {
  type: _socket_events_service__WEBPACK_IMPORTED_MODULE_9__.SocketEventsService
}, {
  type: hug_angular_lib__WEBPACK_IMPORTED_MODULE_17__.RoomService
}];

LoginPage = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
  selector: "app-login",
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
}), __metadata("design:paramtypes", [typeof (_a = typeof _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService !== "undefined" && _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute) === "function" ? _b : Object, typeof (_c = typeof _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router) === "function" ? _c : Object, typeof (_d = typeof _consultation_service__WEBPACK_IMPORTED_MODULE_7__.ConsultationService !== "undefined" && _consultation_service__WEBPACK_IMPORTED_MODULE_7__.ConsultationService) === "function" ? _d : Object, typeof (_e = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform) === "function" ? _e : Object, typeof (_f = typeof _invite_service__WEBPACK_IMPORTED_MODULE_5__.InviteService !== "undefined" && _invite_service__WEBPACK_IMPORTED_MODULE_5__.InviteService) === "function" ? _f : Object, typeof (_g = typeof _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer !== "undefined" && _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer) === "function" ? _g : Object, typeof (_h = typeof _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe !== "undefined" && _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe) === "function" ? _h : Object, typeof (_j = typeof _angular_core__WEBPACK_IMPORTED_MODULE_15__.NgZone !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_15__.NgZone) === "function" ? _j : Object, typeof (_k = typeof _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService !== "undefined" && _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService) === "function" ? _k : Object, typeof (_l = typeof _translator_service__WEBPACK_IMPORTED_MODULE_3__.TranslatorService !== "undefined" && _translator_service__WEBPACK_IMPORTED_MODULE_3__.TranslatorService) === "function" ? _l : Object, typeof (_m = typeof _config_service__WEBPACK_IMPORTED_MODULE_8__.ConfigService !== "undefined" && _config_service__WEBPACK_IMPORTED_MODULE_8__.ConfigService) === "function" ? _m : Object, typeof (_o = typeof _socket_events_service__WEBPACK_IMPORTED_MODULE_9__.SocketEventsService !== "undefined" && _socket_events_service__WEBPACK_IMPORTED_MODULE_9__.SocketEventsService) === "function" ? _o : Object, typeof (_p = typeof hug_angular_lib__WEBPACK_IMPORTED_MODULE_17__.RoomService !== "undefined" && hug_angular_lib__WEBPACK_IMPORTED_MODULE_17__.RoomService) === "function" ? _p : Object])], LoginPage);


/***/ }),

/***/ 6994:
/*!********************************************************************!*\
  !*** ./src/app/login/translator-form/translator-form.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslatorFormComponent": () => (/* binding */ TranslatorFormComponent)
/* harmony export */ });
/* harmony import */ var _translator_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translator-form.component.html?ngResource */ 6600);
/* harmony import */ var _translator_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translator-form.component.scss?ngResource */ 397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.service */ 6527);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;





const phoneNumberRegex = new RegExp(/^(\+|00)[0-9 ]+$/);
let TranslatorFormComponent = class TranslatorFormComponent {
    constructor(configService, formBuilder) {
        this.configService = configService;
        this.formBuilder = formBuilder;
        this.onTranslatorSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.onTranslatorRefused = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.myForm = this.formBuilder.group({
            emailFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
            directNumberFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(phoneNumberRegex)]),
            nameFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
        });
    }
    onSubmit() {
        if (!this.myForm.valid) {
            return;
        }
        console.log("Submitted ", this.email, this.name, this.direct, this.myForm);
        const name = this.myForm.get('nameFormControl').value;
        const email = this.myForm.get('emailFormControl').value;
        const direct = this.myForm.get('directNumberFormControl').value;
        if (!email || !name || !direct)
            return;
        this.onTranslatorSubmit.emit({ email: email, name: name, direct: direct });
    }
    onRefused() {
        this.onTranslatorRefused.emit(true);
    }
};
TranslatorFormComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder }
];
TranslatorFormComponent.propDecorators = {
    invite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    onTranslatorSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    onTranslatorRefused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
TranslatorFormComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-translator-form',
        template: _translator_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_translator_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService !== "undefined" && _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService) === "function" ? _a : Object, typeof (_b = typeof _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder !== "undefined" && _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder) === "function" ? _b : Object])
], TranslatorFormComponent);



/***/ }),

/***/ 2722:
/*!**************************************************************!*\
  !*** ./src/app/select-language/select-language.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectLanguageComponent": () => (/* binding */ SelectLanguageComponent)
/* harmony export */ });
/* harmony import */ var _select_language_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-language.component.html?ngResource */ 5149);
/* harmony import */ var _select_language_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-language.component.scss?ngResource */ 931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
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




let SelectLanguageComponent = class SelectLanguageComponent {
    constructor(translate) {
        this.translate = translate;
        this.opened = false;
    }
    changeLang(event, lang) {
        console.log("LANGGAGGE", lang);
        window.localStorage.setItem("hhp-lang", lang);
        this.translate.use(lang);
    }
};
SelectLanguageComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService }
];
SelectLanguageComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-select-language",
        template: _select_language_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_select_language_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService !== "undefined" && _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService) === "function" ? _a : Object])
], SelectLanguageComponent);



/***/ }),

/***/ 8522:
/*!***************************************!*\
  !*** ./src/app/translator.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslatorService": () => (/* binding */ TranslatorService)
/* harmony export */ });
/* harmony import */ var _global_variable_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-variable.service */ 6898);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
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
var _a, _b;



let TranslatorService = class TranslatorService {
    constructor(http, globalVariableService) {
        this.http = http;
        this.globalVariableService = globalVariableService;
    }
    acceptRequest(token, translator) {
        return this.http.post(this.globalVariableService.getApiPath() + '/translator/accept/' + token, translator);
    }
    refuseRequest(token) {
        return this.http.post(this.globalVariableService.getApiPath() + '/translator/refuse/' + token, null);
    }
};
TranslatorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService }
];
TranslatorService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService !== "undefined" && _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService) === "function" ? _b : Object])
], TranslatorService);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".subtitle {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\n.login-full-width {\n  width: 100%;\n  height: 50px;\n  padding: 0px;\n}\n\n.login-full-width input {\n  height: 100%;\n}\n\n.terms-btn {\n  background: #fff;\n  font-size: 0.8em;\n}\n\n.at {\n  margin: 16px;\n  font-size: 37px;\n  text-align: center;\n  color: white;\n  font-weight: 500;\n}\n\n.at > span {\n  display: block;\n  font-size: 12px;\n}\n\n.wrap {\n  width: 100%;\n  min-height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\np {\n  color: #fff;\n}\n\n.buttons {\n  margin-top: 50px;\n}\n\n.container {\n  display: block;\n  margin: 30px auto;\n  width: 70%;\n}\n\nion-label {\n  color: white;\n}\n\nion-item {\n  --color: #fff;\n  --border-color: white;\n  --highlight-color-valid: white;\n}\n\nion-item ion-input,\nion-item ion-datetime {\n  --placeholder-color: #ceecff;\n}\n\na {\n  color: #fff;\n  text-decoration: none;\n}\n\n.footer {\n  text-align: center;\n  color: #7cafd0;\n  margin-top: 40px;\n}\n\n.footer a {\n  margin: 0 5px;\n}\n\n.icons {\n  text-align: center;\n}\n\n.icons img {\n  max-height: 60px;\n}\n\n.ics {\n  text-align: center;\n}\n\n.ics a {\n  display: inline-block;\n}\n\nion-card {\n  margin: 40px auto;\n}\n\n.title {\n  color: #ffffff;\n  text-align: center;\n  margin: 80px auto 40px;\n}\n\n@media screen and (max-width: 800px) {\n  .container {\n    width: 92%;\n  }\n  .title {\n    margin: 40px auto 40px;\n  }\n}\n\n.invite-error {\n  text-align: center;\n  font-size: 21px;\n  margin-top: 26px;\n  padding: 3px;\n}\n\nion-content {\n  background: transparent;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  color: white;\n  justify-content: center;\n}\n\nfooter div {\n  display: flex;\n  align-content: center;\n  align-items: center;\n}\n\n::ng-deep html[data-theme=accessibility] p {\n  text-align: left;\n}\n\n::ng-deep html[data-theme=accessibility] .container {\n  margin-left: 20px !important;\n  padding-right: 15px;\n}\n\n::ng-deep html[data-theme=accessibility] .footer {\n  text-align: left;\n  display: flex;\n}\n\n::ng-deep html[data-theme=accessibility] #hhpMultiLang {\n  align-items: center !important;\n}\n\n::ng-deep html[data-theme=accessibility] .token-error-title {\n  font-size: 1em;\n}\n\n::ng-deep html[data-theme=accessibility] .token-error-content {\n  font-size: 0.81em;\n}\n\n::ng-deep html[data-theme=accessibility] .title {\n  text-align: left;\n  margin-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFGRjs7QUFJRTs7RUFFRSw0QkFBQTtBQUZKOztBQUtBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBRkY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURGOztBQUVFO0VBQ0UsYUFBQTtBQUFKOztBQUlBO0VBQ0Usa0JBQUE7QUFERjs7QUFHRTtFQUNFLGdCQUFBO0FBREo7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUVFO0VBQ0UscUJBQUE7QUFBSjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxVQUFBO0VBQUY7RUFFQTtJQUNFLHNCQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUdBO0VBQ0UsdUJBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUdJO0VBQ0UsZ0JBQUE7QUFBTjs7QUFFSTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUFOOztBQUVJO0VBQ0UsOEJBQUE7QUFBTjs7QUFHSTtFQUNFLGNBQUE7QUFETjs7QUFHSTtFQUNFLGlCQUFBO0FBRE47O0FBR0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBRE4iLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9naW4tZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmxvZ2luLWZ1bGwtd2lkdGggaW5wdXQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZXJtcy1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uYXQge1xuICBtYXJnaW46IDE2cHg7XG4gIGZvbnQtc2l6ZTogMzdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hdCA+IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5uZy1jb250YWluZXIge1xufVxuXG4ud3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxucCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIHdpZHRoOiA3MCU7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZmZmZjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7IC8vIGRlZmF1bHQgdW5kZXJsaW5lIGNvbG9yXG4gIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiB3aGl0ZTsgLy8gdmFsaWQgdW5kZXJsaW5lIGNvbG9yXG5cbiAgaW9uLWlucHV0LFxuICBpb24tZGF0ZXRpbWUge1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNjZWVjZmY7XG4gIH1cbn1cbmEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3Y2FmZDA7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGEge1xuICAgIG1hcmdpbjogMCA1cHg7XG4gIH1cbn1cblxuLmljb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGltZyB7XG4gICAgbWF4LWhlaWdodDogNjBweDtcbiAgfVxufVxuLmljcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG5pb24tY2FyZCB7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDgwcHggYXV0byA0MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTIlO1xuICB9XG4gIC50aXRsZSB7XG4gICAgbWFyZ2luOiA0MHB4IGF1dG8gNDBweDtcbiAgfVxufVxuXG4uaW52aXRlLWVycm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIxcHg7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuOjpuZy1kZWVwIHtcbiAgaHRtbFtkYXRhLXRoZW1lPVwiYWNjZXNzaWJpbGl0eVwiXSB7XG4gICAgcCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIH1cbiAgICAuZm9vdGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAjaGhwTXVsdGlMYW5nIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAudG9rZW4tZXJyb3ItdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuICAgIC50b2tlbi1lcnJvci1jb250ZW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMC44MWVtO1xuICAgIH1cbiAgICAudGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 397:
/*!*********************************************************************************!*\
  !*** ./src/app/login/translator-form/translator-form.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  color: #fff;\n}\n.container .buttons-container {\n  margin-top: 40px;\n}\n.container .buttons-container ion-col {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zbGF0b3ItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7QUFFSjtBQURJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBR04iLCJmaWxlIjoidHJhbnNsYXRvci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGNvbG9yOiAjZmZmO1xuICAuYnV0dG9ucy1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgaW9uLWNvbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 931:
/*!***************************************************************************!*\
  !*** ./src/app/select-language/select-language.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "#hhpMultiLang {\n  margin-top: 10px;\n  cursor: pointer;\n  left: calc(50% - 21px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#hhpMultiLang .sl-container {\n  display: flex;\n  align-items: center;\n  height: 42px;\n  position: relative;\n}\n#hhpMultiLang .caret-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7em;\n}\n.lang {\n  color: white;\n  background-color: #0072bb;\n  border: 1px;\n}\nion-icon {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1sYW5ndWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBR0E7RUFDRSxZQUFBO0FBQUYiLCJmaWxlIjoic2VsZWN0LWxhbmd1YWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hocE11bHRpTGFuZyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMXB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLnNsLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmNhcmV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gIH1cbn1cblxuLmxhbmcge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDcyYmI7XG4gIGJvcmRlcjogMXB4O1xuXG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content padding>\n  <div\n    *ngIf=\"configService.config && roomService.deviceInfo().flag !== 'unknown'\"\n    class=\"wrap\"\n  >\n    <div class=\"container\" *ngIf=\"showTranslatorConfirmation\">\n      <div class=\"title\">\n        <img\n          class=\"logo\"\n          *ngIf=\"configService.config.logo\"\n          [src]=\"configService.config.logo\"\n          [alt]=\"configService.config.branding\"\n          onerror=\"this.style.opacity='0'\"\n        />\n        <p *ngIf=\"!translationRequestRefused\">\n          {{'login.translationRequestAccepted' | translate }}\n        </p>\n        <p *ngIf=\"translationRequestRefused\">\n          {{'login.translationRequestRefused' | translate }}\n        </p>\n      </div>\n    </div>\n\n    <div *ngIf=\"!showTranslatorConfirmation\" class=\"container\">\n      <div class=\"title\">\n        <img\n          class=\"logo\"\n          *ngIf=\"configService.config.logo\"\n          [src]=\"configService.config.logo\"\n          [alt]=\"configService.config.branding\"\n          onerror=\"this.style.opacity='0'\"\n        />\n      </div>\n\n      <p>\n        {{ 'login.homeIsAHUGTeleconsultation' | translate:configService.config\n        }}\n      </p>\n\n      <app-translator-form\n        *ngIf=\"invite && invite.type === 'TRANSLATOR_REQUEST'  && !this.noInviteError\"\n        (onTranslatorSubmit)=\"translatorSubmit($event)\"\n        (onTranslatorRefused)=\"translatorRefused($event)\"\n        [invite]=\"invite\"\n      ></app-translator-form>\n\n      <div *ngIf=\"translatorAcceptError\" class=\"validator-error\">\n        {{translatorAcceptError.userMessage}}\n      </div>\n\n      <ng-container *ngIf=\"noInviteError\">\n        <ng-container *ngIf=\"noTokenProvided\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>{{ 'login.warning' | translate }}</ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n              {{ 'login.thisApplicationIsIntented' | translate }}\n            </ion-card-content>\n          </ion-card>\n\n          <button\n            class=\"btn red big\"\n            mat-button\n            (click)=\"closeApp()\"\n            type=\"button\"\n            *ngIf=\"isNativeApp()\"\n          >\n            {{ 'login.closeTheApplication' | translate }}\n          </button>\n        </ng-container>\n        <ng-container *ngIf=\"!noTokenProvided\" class=\"token-error\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title class=\"token-error-title\"\n                >{{ 'login.anErrorHasOccurred' | translate }}</ion-card-title\n              >\n            </ion-card-header>\n            <ion-card-content class=\"token-error-content\">\n              {{ 'login.theInvitationIsNotOrNoLongerValide' | translate }}\n            </ion-card-content>\n          </ion-card>\n\n          <button\n            class=\"btn big\"\n            mat-button\n            (click)=\"clearError()\"\n            type=\"button\"\n          >\n            {{ 'login.back' | translate }}\n          </button>\n\n          <button\n            class=\"btn red big\"\n            mat-button\n            (click)=\"closeApp()\"\n            type=\"button\"\n            *ngIf=\"isNativeApp()\"\n          >\n            {{ 'login.closeTheApplication' | translate }}\n          </button>\n        </ng-container>\n      </ng-container>\n\n      <ng-container\n        *ngIf=\"!noInviteError && !(invite && invite.type === 'TRANSLATOR_REQUEST')\"\n      >\n\n \n      </ng-container>\n      <ng-container *ngIf=\"!noInviteError\">\n        <p *ngIf=\"!inviteToken\">\n          {{ 'login.ifYouReceivedThisInvitation' | translate }}\n        </p>\n\n        <ion-card *ngIf=\"!inviteToken\">\n          <ion-card-header>\n            <ion-card-title>{{ 'login.warning' | translate }}</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content>\n            {{ 'login.thisAppOnlyWorksByInivitation' | translate }}\n          </ion-card-content>\n        </ion-card>\n\n        <form\n          *ngIf=\" !invite || invite.type === 'PATIENT' || invite.type === 'TRANSLATOR' || invite.type === 'GUEST' \"\n          (submit)=\"onSubmit()\"\n          class=\"login-form\"\n        >\n          <ion-item lines=\"full\" *ngIf=\"!isProduction()\">\n            <ion-label position=\"floating\" text-wrap>\n              {{ 'login.invitationKey' | translate }}\n            </ion-label>\n            <ion-input\n              [(ngModel)]=\"inviteKey\"\n              name=\"inviteKey\"\n              type=\"string\"\n              placeholder=\"ae9f049f76e6addbcc8d0858cc229fdf4af1c862\"\n              pattern=\"[a-f0-9]{40}\"\n            ></ion-input>\n          </ion-item>\n          <div class=\"validator-error\">\n            {{inviteKeyError}}\n          </div>\n\n          <div\n            class=\"buttons\"\n          >\n            <button\n              class=\"btn green\"\n              mat-button\n              type=\"submit\"\n              [class.submitted]=\"submitted\"\n            >\n              <ng-container *ngIf=\"!submitted\"\n                >{{ 'login.joinTheConsultation' | translate }}</ng-container\n              >\n              <img\n                src=\"/assets/images/three-dots-spinner.svg\"\n                alt=\"Chargement en cours\"\n              />\n            </button>\n          </div>\n          <p *ngIf=\"submitted\">\n            {{ 'login.pleaseWaitWhileYourRequest' | translate }}\n          </p>\n        </form>\n      </ng-container>\n\n      <ng-container *ngIf=\"isScheduled\">\n        <h2 class=\"title\">\n          {{ 'login.yourConsultationIsPlannedFor' | translate }}\n          {{(scheduledFor) | date: \"medium\":null: invite.patientLanguage }}.\n        </h2>\n        <p class=\"ics\">\n          <a\n            [href]=\"icsBlob\"\n            class=\"btn green\"\n            type=\"text/calendar\"\n            download=\"event.ics\"\n          >\n            {{ 'login.addTheEventToYourCalendar' | translate }}\n          </a>\n        </p>\n      </ng-container>\n\n      <div class=\"footer\">\n        <button\n          type=\"button\"\n          [routerLink]=\"['/cgu']\"\n          title=\"Lire les CGU\"\n          class=\"btn terms-btn\"\n        >\n          {{ 'login.termsOfService' | translate }}\n        </button>\n      </div>\n\n      <app-select-language></app-select-language>\n    </div>\n  </div>\n  <div *ngIf=\"roomService.deviceInfo().flag === 'unknown'\" class=\"wrap\">\n    <div class=\"container\">\n      <div class=\"title\">\n        <img\n          class=\"logo\"\n          *ngIf=\"configService.config.logo\"\n          [src]=\"configService.config.logo\"\n          [alt]=\"configService.config.branding\"\n          onerror=\"this.style.opacity='0'\"\n        />\n        <p>{{'login.unsupportedBrowser' | translate }}</p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<footer class=\"page-footer font-small pt-4\">\n  <div class=\"text-center py-3\">\n    {{ 'login.supportedByThePrivateFunction' | translate }}\n    <img\n      src=\"/assets/images/logo-fondation-prive.png\"\n      style=\"padding-left: 3px\"\n      width=\"100px\"\n    />\n  </div>\n</footer>\n";

/***/ }),

/***/ 6600:
/*!*********************************************************************************!*\
  !*** ./src/app/login/translator-form/translator-form.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container\">\n  <p>\n    {{ \"translatorForm.youAboutToJoinInviteWithPatientAndDOctor\" | translate:configService.config }}\n  </p>\n\n  <ul>\n    <li>\n      {{ \"translatorForm.caregiverName\" | translate }}:\n      {{ invite.invitedBy.firstName | uppercase }}\n      {{ invite.invitedBy.lastName }}\n    </li>\n  </ul>\n\n  <p>\n    {{ \"translatorForm.pleaseFillYourInfo\" | translate }}\n  </p>\n\n  <form \n  *ngIf=\"myForm\"\n  (submit)=\"onSubmit()\"\n  [formGroup]=\"myForm\"\n  >\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label color=\"light\" position=\"floating\">\n              {{ \"translatorForm.name\" | translate }}\n            </ion-label>\n            <ion-input\n              color=\"light\"\n              name=\"name\"\n              type=\"string\"\n              placeholder=\"\"\n              required\n              formControlName=\"nameFormControl\"\n\n            ></ion-input>\n          </ion-item>\n          \n          <div \n        class=\"validator-error\"  *ngIf=\"myForm.controls.nameFormControl.hasError('required') && (myForm.controls.nameFormControl.dirty || myForm.controls.nameFormControl.touched)\"\n        > {{\"translatorForm.nameIsRequired\" | translate}}</div>\n        </ion-col>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label color=\"light\" position=\"floating\">\n              {{ \"translatorForm.email\" | translate }}\n            </ion-label>\n            <ion-input\n              color=\"light\"\n              name=\"direct\"\n              type=\"string\"\n              placeholder=\"\"\n              required\n              formControlName=\"emailFormControl\"\n\n              type=\"email\"\n            ></ion-input>\n          </ion-item>\n          <div \n        class=\"validator-error\"  *ngIf=\"myForm.controls.emailFormControl.hasError('required') && (myForm.controls.emailFormControl.dirty || myForm.controls.emailFormControl.touched)\"\n        > {{\"translatorForm.emailIsRequired\" | translate}}</div>\n        <div \n        class=\"validator-error\"  *ngIf=\"myForm.controls.emailFormControl.hasError('email') && (myForm.controls.emailFormControl.dirty || myForm.controls.emailFormControl.touched)\"\n        > {{\"translatorForm.emailIsInvalid\" | translate}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"12\" size-md=\"6\">\n          <ion-item>\n            <ion-label color=\"light\" position=\"floating\">\n              {{ \"translatorForm.directNumber\" | translate }}\n            </ion-label>\n            <ion-input\n              color=\"light\"\n              name=\"direct\"\n              type=\"string\"\n              placeholder=\"\"\n              required\n              formControlName=\"directNumberFormControl\"\n\n            ></ion-input>\n          </ion-item>\n          <div \n        class=\"validator-error\"  *ngIf=\"myForm.controls.directNumberFormControl.hasError('required') && (myForm.controls.directNumberFormControl.dirty || myForm.controls.directNumberFormControl.touched)\"\n        > {{\"translatorForm.directNumberIsRequired\" | translate}}</div>\n        <div\n      class=\"validator-error\"  *ngIf=\"myForm.controls.directNumberFormControl.hasError('pattern') && (myForm.controls.directNumberFormControl.dirty || myForm.controls.directNumberFormControl.touched)\"\n      > {{\"translatorForm.directNumberIsInvalid\" | translate}}</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"buttons-container\">\n        <ion-col\n          *ngIf=\"\n            invite.translationOrganization &&\n            invite.translationOrganization.canRefuse\n          \"\n          ><ion-button (click)=\"onRefused()\" color=\"danger\">{{\n            \"translatorForm.refuse\" | translate\n          }}</ion-button></ion-col\n        >\n        <ion-col\n          ><ion-button color=\"success\" type=\"submit\">\n            {{ \"translatorForm.acceptRequest\" | translate }}\n          </ion-button></ion-col\n        >\n      </ion-row>\n    </ion-grid>\n  </form>\n</div>\n";

/***/ }),

/***/ 5149:
/*!***************************************************************************!*\
  !*** ./src/app/select-language/select-language.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"hhpMultiLang\">\n  <div class=\"sl-container\">\n    <ion-icon name=\"globe\"></ion-icon>\n    <select class=\"lang\" #langSelect (change)=\"changeLang(this, langSelect.value)\">\n      <option\n        *ngFor=\"let lang of translate.getLangs()\"\n        [value]=\"lang\"\n        [attr.selected]=\"lang === translate.currentLang ? '' : null\"\n      >{{lang | translate}}</option>\n    </select>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map