import {TranslatorService} from "./../translator.service";
import {environment} from "./../../environments/environment";
import {InviteService} from "./../invite.service";
import {Subscription} from "rxjs";

import {Component, NgZone, OnInit} from "@angular/core";
import {Platform} from "@ionic/angular";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {DatePipe} from "@angular/common";

import {TranslateService} from "@ngx-translate/core";
import {RoomService} from "hcw-stream-lib";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {ConsultationService} from "../consultation.service";
import {ConfigService} from "../config.service";
import {SocketEventsService} from "../socket-events.service";
import {App} from "@capacitor/app";
import {LanguageService} from "../shared/services/language.service";
import {NurseService} from "../shared/services/nurse.service";

declare let window: any;

const coeff = 1000 * 60 * 5;

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
  termsChecked: boolean = false;
  connectionErrorMessage =
    "Le serveur distant n'est pas joinable, veuillez vérifier votre connectivité";
  inviteToken;
  inviteKey = "";
  firstName = "";
  lastName = "";
  invalidInvite = false;
  inviteKeyError = "";
  birthDate = "";
  birthError = "";
  invite = null;
  isExpert = false;
  expertToken = '';

  translator;
  isScheduled = false;
  icsBlob: SafeUrl;
  scheduledFor;
  mobileLandScreen = false;
  subscriptions: Subscription[] = [];
  allowConsultationTimer;

  scheduledForRounded;
  showTranslatorConfirmation = false;
  noInviteError = false;
  noTokenProvided = false;
  translationRequestRefused = false;
  translatorAcceptError;

  markdownExists: boolean = false;
  markdownUrl: string = 'assets/home.md';
  currentLang: string = 'en';

  constructor(
    private zone: NgZone,
    private router: Router,
    public platform: Platform,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    public roomService: RoomService,
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private nurseService: NurseService,
    public configService: ConfigService,
    private translate: TranslateService,
    private inviteService: InviteService,
    private conServ: ConsultationService,
    private languageService: LanguageService,
    private translatorServ: TranslatorService,
    private socketService: SocketEventsService,
  ) {
    this.currentLang = this.translate.currentLang || 'en';
    this.connectionErrorMessage = translate.instant(
      "login.theRemoteServerIsNotReachable"
    );
  }

  ngAfterContentInit() {
    const inviteToken = localStorage.getItem('inviteToken') || '';
    if (this.inviteToken !== inviteToken || this.inviteKey !== inviteToken) {
      this.inviteToken = inviteToken;
      this.inviteKey = this.inviteToken;
    }
  }

  ngOnInit() {
    this.checkMarkdown();
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

  checkMarkdown() {
    const langSpecificMarkdownUrl = `assets/home.${this.currentLang}.md`;

    this.nurseService.checkMarkdownExists(langSpecificMarkdownUrl).subscribe({
      next: (res) => {
        this.markdownUrl = langSpecificMarkdownUrl;
        this.markdownExists = true;
      },
      error: (err) => {
        this.nurseService.checkMarkdownExists('assets/home.md').subscribe({
          next: (res) => {
            this.markdownUrl = 'assets/home.md';
            this.markdownExists = true;
          },
          error: (err) => {
            this.markdownExists = false;
          }
        });
      }
    });
  }

  validateInviteToken(token: string | null): string | null {
    if (!token) return null;

    return /^[a-zA-Z0-9-_]+$/.test(token) ? token : null;
  }

  async init() {
    try {
      const storedToken = localStorage.getItem("inviteToken");
      this.inviteToken = this.validateInviteToken(this.inviteToken || storedToken);

      this.currentUser = this.authService.currentUserValue;

      if (this.inviteToken && this.inviteToken.length) {
        this.handleToken(this.inviteToken);
      } else if (this.platform.is("mobile")) {
        this.noInviteError = true;
        this.noTokenProvided = true;
        if (this.authService.currentUserValue) {
          await this.authService.logout();
        }
      }

      this.returnUrl = this.route.snapshot.queryParams.returnUrl || "";

      alert(this.roomService.deviceInfo().flag)
      this.subscriptions.push(
          this.authService.observeInviteToken().subscribe((inviteToken) => {
            this.inviteToken = inviteToken;
            this.handleToken(this.inviteToken);

          })
      );
    } catch (e) {
      alert(e);
    }

  }

  handleConsultation(consultationId) {
    const videoCallTested = localStorage.getItem("videoCallTested");
    if (videoCallTested) {
      return this.router.navigate(["consultation", consultationId]);
    } else {
      return this.router.navigate(["test-call"]);
    }
  }

  handleToken(inviteToken, accept = false) {
    this.zone.run(() => {
      this.noTokenProvided = false;
    });
    const token = this.inviteToken ? this.inviteToken : this.isExpert ? this.expertToken : this.inviteKey;

    this.inviteToken = token;
    this.inviteKey = token;

    alert('get invite')
    // get invite
    this.subscriptions.push(
      this.inviteService.getInviteFromToken(this.inviteToken).subscribe(
        (invite) => {
          this.invite = invite;
          alert(JSON.stringify(invite));

          this.handleInvite(invite, accept);
        },
        (err) => this.handleTokenError(err)
      )
    );
  }

  async handleInvite(invite, accept?) {
    this.invite = invite;
    this.isExpert = !!invite.isExpert;
    this.expertToken = invite.expertToken;

    const lang = this.languageService.getCurrentLanguage();
    this.translate.use(lang);

    alert('handleInvite')
    if (this.currentUser) {

      if (this.currentUser.inviteToken === this.invite.id) {
        if (invite.type === "TRANSLATOR_REQUEST") {
          return;
        }
        if (accept) {
          this.conServ
              .createConsultation({
                queue: "covid19",
                gender: "unknown",
                IMADTeam: "none",
                invitationToken: this.inviteToken,
              })
              .toPromise()
              .then((consultation) => {
                if (!consultation) {
                  return this.router.navigate(["await-consultation"]);
                }
                localStorage.setItem("currentConsultation", consultation.id);
                this.handleConsultation(consultation.id);
              })
              .catch((err) => {
                this.handleTokenError(err);
              })
              .finally(() => {
                this.submitted = false;
                this.loading = false;
              });
        }


      } else {
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
        this.noInviteError = false;
      });
      setTimeout(() => {
        this.noInviteError = false;
      }, 100);
      this.socketService.disconnect();
    }

    if (accept) {
      this.acceptInvite(invite);
    }
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
      if (this.isExpert) {
        localStorage.setItem('firstName',this.firstName);
        localStorage.setItem('lastName',this.lastName);
      }

      this.router.navigate([`/test-call`]);
    }
  }

  handleTokenError(err?) {
    console.error("Handle token error ", err);
    setTimeout(() => {
      this.noInviteError = true;
    }, 100);

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

    const inviteToken = this.inviteToken ? this.inviteToken : this.isExpert ? this.expertToken : this.inviteKey;
    localStorage.setItem("inviteToken", inviteToken);

    this.loading = false;
    this.submitted = false;


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

  getCurrentUrl() {
    const inviteToken = this.inviteToken ? this.inviteToken : this.inviteKey;
    const safeInviteToken = inviteToken ? encodeURIComponent(inviteToken) : '';
    const url = `${window.location.protocol}//${window.location.host}${safeInviteToken ? '?invite=' + safeInviteToken : ''}`;

    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  clearError() {
    this.noInviteError = false;
    localStorage.clear();
    this.inviteToken = null
    this.inviteKey = null
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

  goToTerms(event: MouseEvent) {
    event.stopPropagation();
    this.router.navigate(["/cgu"]);
  }

  toggleCheckbox() {
    this.termsChecked = !this.termsChecked;
  }

  isNativeApp() {
    return !this.platform.is('mobileweb') && ( this.platform.is('ios') || this.platform.is('android'));
  }

  isProduction() {
    return environment.production;
  }

  onLanguageChange(language: string): void {
    this.currentLang = language;
    this.checkMarkdown();
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
      URL:${encodeURI(url as string)}
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
