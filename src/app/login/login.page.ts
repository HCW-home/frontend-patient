import { TranslatorService } from "./../translator.service";
import { environment } from "./../../environments/environment";
import { InviteService } from "./../invite.service";
import { Subscription } from "rxjs";

import { Component, OnInit, NgZone, Directive } from "@angular/core";
import { Platform } from "@ionic/angular";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { DatePipe } from "@angular/common";

import { TranslateService } from "@ngx-translate/core";
import { RoomService } from "hug-angular-lib";
import { Router, ActivatedRoute } from "@angular/router";
declare let cordova: any;
declare let window: any;
import { AuthService } from "../auth/auth.service";
import { ConsultationService } from "../consultation.service";
import { access } from "fs";
import { ConfigService } from "../config.service";
import { SocketEventsService } from "../socket-events.service";
import { App } from '@capacitor/app';

const coeff = 1000 * 60 * 5;

// get token from url or input or observable
// get invite
// if invite is shcedueled and it's for patient show time
// login invite
// handle user

@Component({
  providers: [DatePipe],
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  currentUser;
  subInviteToken;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = "";
  email: string;
  password: string;
  connectionErrorMessage =
    "Le serveur distant n'est pas joinable, veuillez vérifier votre connectivité";
  inviteToken = "";
  inviteKey = "";
  invalidInvite = false;
  inviteKeyError = "";
  birthDate = "";
  birthError = "";
  invite = null;

  translator;
  isScheduled = false;
  icsBlob: SafeUrl;
  scheduledFor;
  // Whether or not to display the mobile landing screen
  mobileLandScreen = false;
  subscriptions: Subscription[] = [];
  allowConsultationTimer;

  scheduledForRounded;
  showTranslatorConfirmation = false;
  noInviteError = false;
  noTokenProvided = false;
  translationRequestRefused = false;
  showNativeAppSuggestionAndroid = environment.showNativeAppSuggestionAndroid;
  showNativeAppSuggestionIOS = environment.showNativeAppSuggestionIOS;

  translatorAcceptError;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private conServ: ConsultationService,
    public platform: Platform,
    private inviteService: InviteService,
    private sanitizer: DomSanitizer,
    private datePipe: DatePipe,
    private zone: NgZone,
    private translate: TranslateService,
    private translatorServ: TranslatorService,
    public configService: ConfigService,
    private socketService: SocketEventsService,
    public roomService: RoomService
  ) {
    this.connectionErrorMessage = translate.instant(
      "login.theRemoteServerIsNotReachable"
    );
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
    const showNativeAppSuggestion =
      (this.platform.is("ios") && environment.showNativeAppSuggestionIOS) ||
      (this.platform.is("android") &&
        environment.showNativeAppSuggestionAndroid);

    this.mobileLandScreen =
      this.platform.is("mobile") &&
      (this.platform.is("ios") || this.platform.is("android")) &&
      showNativeAppSuggestion;

    this.init();

    this.subscriptions.push(
      this.authService.currentUser.subscribe((user) => {
        this.currentUser = user;
      })
    );
  }

  async init() {
    console.log("init login");

    this.inviteToken = this.inviteToken || localStorage.getItem("inviteToken");
    this.currentUser = this.authService.currentUserValue;

    console.log(this.inviteToken, this.currentUser);
    if (this.inviteToken && this.inviteToken.length) {
      this.handleToken(this.inviteToken);
    } else if (this.platform.is("mobile")) {
      console.log("No invite ...");
      this.noInviteError = true;
      this.noTokenProvided = true;
      if (this.authService.currentUserValue) {
        console.log(
          "Logout because there is a user and no invite token on init"
        );
        await this.authService.logout();
      }
    }

    console.log("[LOGIN] Invite token: " + this.inviteToken);
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || "";

    this.subscriptions.push(
      this.authService.observeInviteToken().subscribe((inviteToken) => {
        console.log("GOT inviteToken in login ");
        this.inviteToken = inviteToken;
        this.handleToken(this.inviteToken);
      })
    );
  }
  handleUser(user) {
    console.log("HANDLE user>>>>>>>>>>>>>", user);
    this.currentUser = user;
    // Check if the client was in a consultation
    const consultationId = localStorage.getItem("currentConsultation");
    const videoCallTested = localStorage.getItem("videoCallTested");

    if (consultationId) {
      return this.handleConsultation(consultationId);
    } else {
      if (videoCallTested) {
        // create consultation
        this.conServ
          .createConsultation({
            queue: "covid19",
            gender: "unknown",
            IMADTeam: "none",
            invitationToken: this.inviteToken,
          })
          .toPromise()
          .then((consultation) => {
            console.log("Consultation created ", consultation);
            if (!consultation) {
              return this.router.navigate(["await-consultation"]);
            }
            localStorage.setItem("currentConsultation", consultation.id);
            this.handleConsultation(consultation.id);
          })
          .catch((err) => {
            console.log("Error creating consultation", err);
            this.handleTokenError(err);
          })
          .finally(() => {
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
    this.inviteKey = inviteToken;

    // get invite
    this.subscriptions.push(
      this.inviteService.getInviteFromToken(this.inviteToken).subscribe(
        (invite) => {
          this.invite = invite;

          this.handleInvite(invite, accept);
        },
        (err) => this.handleTokenError(err)
      )
    );
  }

  async handleInvite(invite, accept?) {
    console.log("handle invite.................", invite, invite.status);
    console.log("current user ", this.currentUser);
    this.invite = invite;
    if (invite.patientLanguage) {
      if (this.translate.getLangs().includes(invite.patientLanguage)) {
        this.translate.use(invite.patientLanguage);
        window.localStorage.setItem("hhp-lang", invite.patientLanguage);
      } else {
        this.translate.use("fr");
        window.localStorage.setItem("hhp-lang", "fr");
      }
    }

    if (this.currentUser) {
      if (this.currentUser.inviteToken === this.invite.id) {
        if (invite.type === "TRANSLATOR_REQUEST") {
          return;
        }

        return this.handleUser(this.currentUser);
      } else {
        console.log(
          "Logout because there is a user and invite token don't match"
        );
        await this.authService.logout();
        localStorage.setItem("inviteToken", this.inviteToken);
        this.noInviteError = null;
      }
    } else if (
      invite.status === "ACCEPTED" ||
      invite.status === "REFUSED" ||
      invite.status === "CANCELED"
    ) {
      this.handleTokenError("Invite status " + invite.status);
      return;
    } else {
      this.noInviteError = false;
      this.zone.run(() => {
        console.log("No error ");

        this.noInviteError = false;
      });
      setTimeout(() => {
        console.log("No error ");

        this.noInviteError = false;
      }, 100);
      console.log("DISCONNECT WEBSOCKET IF CONNECTED");
      this.socketService.disconnect();
    }

    if (accept) {
      this.acceptInvite(invite);
    }
    // handle user
  }

  acceptInvite(invite) {
    if (invite.type === "TRANSLATOR_REQUEST") {
      return;
    }

    if (invite.scheduledFor - Date.now() > 10 * 60 * 1000) {
      this.isScheduled = true;
      this.scheduledFor = new Date(invite.scheduledFor);
      this.scheduledForRounded = new Date(
        Math.round(this.scheduledFor.getTime() / coeff) * coeff
      );
      this.icsBlob = this.generateIcsBlob(this.scheduledFor);
      this.setAllowConsultationTimer(invite);
    } else {
      this.authService
        .loginWithInvite(this.inviteToken, this.birthDate, this.translator)
        .toPromise()
        .then((user) => this.handleUser(user))
        .catch((err) => {
          this.handleTokenError(err);
        });
    }
  }
  handleTokenError(err?) {
    console.error("Handle token error ", err);
    setTimeout(() => {
      this.noInviteError = true;
    }, 100);

    console.log("Logout because of token error ", err);
    this.authService.logout();
    // localStorage.clear()
  }

  onSubmit() {
    if (this.submitted) {
      return;
    }
    if (!this.inviteToken && !this.inviteKey) {
      this.inviteKeyError = this.translate.instant(
        "login.pleaseEnterYourInvitationKey"
      );
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

    console.log("SET LOADING FALSE AVEC");
    // Prevent loading issue not reverted when coming back to this page
    setTimeout(() => {
      this.zone.run(() => {
        console.log("SET LOADING FALSE AVEC 5s");
        this.loading = false;
        this.submitted = false;
      });
    }, 3000);

    this.handleToken(inviteToken, true);
  }

  translatorSubmit(translator) {
    this.loading = true;
    console.log("On translator submit", translator, this.inviteToken, this);
    this.translator = translator;

    this.subscriptions.push(
      this.translatorServ.acceptRequest(this.inviteToken, translator).subscribe(
        (res) => {
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
        },
        (err) => {
          this.loading = false;
          console.log("error accepting request ", err);
          this.translatorAcceptError = err.error
            ? err.error.error || err.error
            : err;

          if (
            (this.translatorAcceptError &&
              this.translatorAcceptError.name === "ERROR_INVITE_ACCEPTED") ||
            (this.translatorAcceptError &&
              this.translatorAcceptError.name === "ERROR_NO_INVITE")
          ) {
            localStorage.removeItem("inviteToken");
            this.invite = null;
            this.inviteKey = null;
            this.inviteToken = null;
          }
        }
      )
    );
  }

  translatorRefused() {
    this.loading = true;
    this.subscriptions.push(
      this.translatorServ.refuseRequest(this.inviteToken).subscribe((res) => {
        this.loading = false;
        this.invite = null;
        this.inviteKey = null;
        this.inviteToken = null;
        localStorage.removeItem("inviteToken");
        this.showTranslatorConfirmation = true;
        this.translationRequestRefused = true;
      })
    );
  }
  setAllowConsultationTimer(invite) {
    const inviteToken = this.inviteToken ? this.inviteToken : this.inviteKey;
    this.allowConsultationTimer = setTimeout(() => {
      this.isScheduled = false;
      this.loginInvite(inviteToken);
    }, invite.scheduledFor - 10 * 60 * 1000 - Date.now());
    console.log(
      "timer set for ",
      new Date(invite.scheduledFor - 10 * 60 * 1000)
    );
  }

  loginInvite(inviteToken) {
    const videoCallTested = localStorage.getItem("videoCallTested");
    if (videoCallTested) {
      this.authService
        .loginWithInvite(inviteToken, this.birthDate, this.translator)
        .toPromise()
        .then((user) => {
          if (user.role === "translator") {
            return this.router.navigate(["await-consultation"]);
          }

          return this.conServ
            .createConsultation({
              queue: "covid19",
              gender: "unknown",
              IMADTeam: "none",
              invitationToken: inviteToken,
            })
            .toPromise();
        })
        .then((consultation) => {
          localStorage.setItem("currentConsultation", consultation.id);
          this.router.navigate(["consultation", consultation.id]);
          // this.router.navigate(['test-call']);
        })
        .catch((err) => {
          console.log(err);
          // alert(err);
          this.noInviteError = true;
        })
        .finally(() => {
          this.submitted = false;
          this.loading = false;
        });
    } else {
      this.authService
        .loginWithInvite(inviteToken, this.birthDate, this.translator)
        .toPromise()
        .then((user) => {
          this.router.navigate(["test-call"]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  ngOnDestroy() {
    if (this.subInviteToken) {
      this.subInviteToken.unsubscribe();
    }
    this.subscriptions.forEach((subscription) => {
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
      const url =
        "hugathome" +
        "://" +
        window.location.host +
        (inviteToken ? "?invite=" + inviteToken : "") +
        "&scheme=" +
        window.location.protocol;

      console.log("try top open" + url);
      // debugger;
      window.location.replace(url);
    }
  }
  getCurrentUrl() {
    const inviteToken = this.inviteToken ? this.inviteToken : this.inviteKey;
    return (
      window.location.protocol +
      "//" +
      window.location.host +
      (inviteToken ? "?invite=" + inviteToken : "")
    );
  }

  closeLandingScreen() {
    console.log("closeLandingScreen");
    console.log(this.inviteToken);
    // this.mobileLandScreen = false;
    if (this.inviteToken && this.inviteToken.length) {
      this.onSubmit();
    } else {
      this.noInviteError = true;
    }
  }

  closeApp() {
    localStorage.clear();
    App.exitApp();
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
  isMobileApp() {
    return this.isMobileUser() && this.platform.is("hybrid");
  }

  isNativeApp() {
    return this.platform.is("ios") || this.platform.is("android");
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
    const blob = new Blob([event], { type: "text/calendar" });
    return this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(blob)
    );
  }
}
