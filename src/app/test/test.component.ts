import {RoomService, Stream} from "hcw-stream-lib";
import {SocketEventsService} from "../socket-events.service";
import {ConsultationService} from "../consultation.service";
import {AndroidPermissions} from "@awesome-cordova-plugins/android-permissions/ngx";
import {Platform} from "@ionic/angular";
import {Router} from "@angular/router";
import {OpenViduService} from "../shared/services/openvidu.service";
import {Component, OnInit, HostListener, OnDestroy, NgZone} from "@angular/core";
import {Subscription} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {AuthService} from "../auth/auth.service";
import {ConfigService} from "../config.service";
import {InviteService} from "../invite.service";
import {LanguageService} from "../shared/services/language.service";
import {MediaService} from "../shared/services/media.service";

@Component({
    selector: "app-test-call",
    templateUrl: "./test.component.html",
    styleUrls: ["./test.component.scss"],
})
export class TestComponent implements OnInit, OnDestroy {
    ANDROID_PERMISSIONS = [
        "android.permission.CAMERA",
        "android.permission.RECORD_AUDIO",
        "android.permission.MODIFY_AUDIO_SETTINGS",
    ];
    session;
    websocket: WebSocket;
    testStatus = "DISCONNECTED";
    showSpinner = false;
    msgChain = [];
    volumeLevel = 0;
    accessHardwareGranted = null;
    testStarted: Boolean = false;
    loading: Boolean = false;
    globalMessage = "";
    globalWarning = "";
    inviteToken = "";
    subscriptions: Subscription[] = [];
    peerId;
    myCamStream: Stream;

    muteStatus: "on" | "off" = "off";
    camStatus: "on" | "off" = "off";

    permissionDenied = false;
    permissionError = false;
    showRetryButton = false;
    denied = true;


    currentUser;
    submitted = false;
    error = "";
    email: string;
    password: string;
    inviteKey = "";
    firstName = "";
    lastName = "";
    inviteKeyError = "";
    birthDate = "";
    birthError = "";
    invite = null;
    isExpert = false;
    expertToken = "";

    translator;
    scheduledFor;
    noInviteError = false;
    noTokenProvided = false;
    translationRequestRefused = false;

    constructor(
        private zone: NgZone,
        private router: Router,
        public platform: Platform,
        private authService: AuthService,
        private roomService: RoomService,
        private mediaService: MediaService,
        public configService: ConfigService,
        private translate: TranslateService,
        private inviteService: InviteService,
        private conServ: ConsultationService,
        private openviduSev: OpenViduService,
        private languageService: LanguageService,
        private socketService: SocketEventsService,
        private androidPermissions: AndroidPermissions,
    ) {
    }

    @HostListener("window:beforeunload")
    beforeunloadHandler() {
        this.endTestVideo();
    }

    ngOnInit() {
        this.showSpinner = true;
        this.testStarted = true;
        this.inviteToken = localStorage.getItem("inviteToken");
        this.requestMedia();
    }

    async requestMedia(): Promise<void> {
        const audioResult = await this.mediaService.getMedia("audio");
        const videoResult = await this.mediaService.getMedia("video");

        try {
            const cameraStatus = await navigator.permissions.query({ name: "camera" as any });
            cameraStatus.addEventListener("change", (evt) => {
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then((res) => {
                        this.showRetryButton = true;
                    })
                    .catch((err) => {
                        this.camStatus = "off";
                        this.showRetryButton = true;
                    });
            }, { once: true });
        } catch (error) {
            console.log('camera','(not supported) ');
        }

        try {
            const audioStatus = await navigator.permissions.query({ name: "microphone" as any });
            audioStatus.addEventListener("change", (evt) => {
                navigator.mediaDevices.getUserMedia({ audio: true })
                    .then((res) => {
                        this.showRetryButton = true;
                    })
                    .catch((err) => {
                        this.muteStatus = "off";
                        this.showRetryButton = true;
                    });
            }, { once: true });
        } catch (error) {
            console.log('microphone','(not supported) ');
        }

        this.permissionDenied = audioResult === "denied" || videoResult === "denied";
        this.permissionError = audioResult === "error" || videoResult === "error";

        if (audioResult === "denied" || videoResult === "denied") {
            this.denied = true;
            this.muteStatus = audioResult === "denied" ? "off" : "on";
            this.camStatus = videoResult === "denied" ? "off" : "on";
        } else {
            this.denied = false;
        }

        if (this.permissionDenied || this.permissionError) {
            if (audioResult === "denied" && videoResult !== "denied" && videoResult !== "error") {
                this.msgChain.push({
                    success: false,
                    msg: this.translate.instant("test.micDenied"),
                });
                this.globalMessage = this.translate.instant("test.youCanStillJoin");
            }
            if (videoResult === "denied" && audioResult !== "denied" && audioResult !== "error") {
                this.msgChain.push({
                    success: false,
                    msg: this.translate.instant("test.cameraDenied"),
                });
                this.globalMessage = this.translate.instant("test.youCanStillJoin");
            }
            if (videoResult === "denied" && audioResult === "denied") {
                this.msgChain.push({
                    success: false,
                    msg: this.translate.instant("test.bothDenied"),
                });
                this.globalMessage = this.translate.instant("test.youCanStillJoin");
            }
            if (audioResult === "error" || videoResult === "error") {
                this.msgChain.push({
                    success: false,
                    msg: this.translate.instant("test.permissionError"),
                });
                this.globalMessage = this.translate.instant("test.youCanStillJoin");
            }
            this.startTest();
        } else {
            this.muteStatus = "on";
            this.camStatus = "on";
            this.globalWarning = this.translate.instant("test.yourDeviceSeems");
            this.startTest();
        }
    }

    startTest() {
        this.testVideo();
    }

    testVideo() {
        this.openviduSev
            .getTestToken()
            .then(({token, peerId}) => {
                this.peerId = peerId;
                this.connectToSession(token);
            })
            .catch((error) => {
                this.msgChain.push({
                    success: false,
                    msg: "Error connecting to session: " + error,
                });
            });
    }

    connectToSession(token: string) {
        // this.msgChain = [];
        this.session = true;
        this.testStatus = "CONNECTING";
        this.accessHardwareGranted = null;

        if (this.platform.is("android") && this.platform.is("hybrid")) {
            this.checkAndroidPermissions()
                .then((res) => {
                    this.initSession(token);
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            this.initSession(token);
        }
    }

    initSession(token: string) {
        this.accessHardwareGranted = true;
        this.session = true;
        this.roomService.init({peerId: this.peerId});
        this.roomService.join({
            roomId: this.peerId,
            joinVideo: true,
            joinAudio: true,
            token: token,
        });

        this.roomService.onCamProducing.subscribe((stream) => {
            this.myCamStream = stream;
            this.testStatus = "PLAYING";
            this.showSpinner = false;

            this.connectWebCam();
        }, (error) => {
            this.msgChain.push({success: false, msg: this.translate.instant("test.connectivityIssue")});
        });

    }

    retryPermission() {
        this.msgChain = [];
        this.globalWarning = "";
        this.globalMessage = "";
        this.roomService.close();
        this.showRetryButton = false;
        this.requestMedia();
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

        this.router.navigate([`/test-call`]);

        this.handleToken(inviteToken, true);
    }

    handleToken(inviteToken, accept = false) {
        this.zone.run(() => {
            this.noTokenProvided = false;
        });
        const token = this.inviteToken ? this.inviteToken : this.isExpert ? this.expertToken : this.inviteKey;

        this.inviteToken = token;
        this.inviteKey = token;

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
        this.invite = invite;
        this.isExpert = !!invite.isExpert;
        this.expertToken = invite.expertToken;

        const lang = this.languageService.getCurrentLanguage();
        this.translate.use(lang);

        if (this.currentUser) {
            if (this.currentUser.inviteToken === this.invite.id) {
                if (invite.type === "TRANSLATOR_REQUEST") {
                    return;
                }

                return this.handleUser(this.currentUser);
            } else {
                await this.authService.logout();
                localStorage.setItem("inviteToken", this.inviteToken);
                this.noInviteError = null;
            }
        } else if (
            // invite.status === "ACCEPTED" ||
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
        const firstName = localStorage.getItem("firstName");
        const lastName = localStorage.getItem("lastName");
        const data: any = this.isExpert ?
            [this.expertToken, undefined, undefined, {firstName, lastName}] :
            [this.inviteToken, this.birthDate, this.translator];
        this.authService
            // @ts-ignore
            .loginWithInvite(...data)
            .toPromise()
            .then((user) => {
                return this.handleUser(user);
            })
            .catch((err) => {
                this.handleTokenError(err);
            });
    }

    handleUser(user) {
        this.currentUser = user;
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

    handleConsultation(consultationId) {
        this.router.navigate(["consultation", consultationId]);
    }

    handleTokenError(err?) {
        console.error("Handle token error ", err);
        setTimeout(() => {
            this.noInviteError = true;
        }, 100);

        this.authService.logout();
    }

    proceedToConsultation() {
        this.onSubmit();
    }

    initAudioPublisher() {
        this.roomService.onVolumeChange.subscribe((change) => {
            this.zone.run(() => {
                this.volumeLevel = change.volume * 1000;
            });
        });
    }

    connectWebCam() {
        this.testStatus = "CONNECTED";
        this.initAudioPublisher();
    }

    endTestVideo() {
        if (this.session) {
            this.roomService.close();
            this.session = null;
        }
        this.testStatus = "DISCONNECTED";
        this.showSpinner = false;
        this.msgChain = [];

        if (this.myCamStream) {
            this.myCamStream.mediaStream.getTracks().forEach(function (track) {
                track.stop();
            });
            this.myCamStream = null;
        }
        localStorage.setItem("videoCallTested", "true");
    }

    muteStatusChanged() {
        if (this.muteStatus === "on") {
            this.roomService.muteMic();
            this.muteStatus = "off";
        } else {
            this.roomService.unmuteMic();
            this.muteStatus = "on";
        }
    }

    camStatusChanged() {
        if (this.camStatus === "on") {
            this.roomService.disableWebcam();
            this.camStatus = "off";
        } else {
            this.roomService.updateWebcam({start: true});
            this.camStatus = "on";
        }
    }

    private checkAndroidPermissions(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.platform.ready().then(() => {
                this.androidPermissions
                    .requestPermissions(this.ANDROID_PERMISSIONS)
                    .then(() => {
                        this.androidPermissions
                            .checkPermission(this.androidPermissions.PERMISSION.CAMERA)
                            .then((camera) => {
                                this.androidPermissions
                                    .checkPermission(
                                        this.androidPermissions.PERMISSION.RECORD_AUDIO
                                    )
                                    .then((audio) => {
                                        this.androidPermissions
                                            .checkPermission(
                                                this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS
                                            )
                                            .then((modifyAudio) => {
                                                if (
                                                    camera.hasPermission &&
                                                    audio.hasPermission &&
                                                    modifyAudio.hasPermission
                                                ) {
                                                    resolve(null);
                                                } else {
                                                    reject(
                                                        new Error(
                                                            "Permissions denied: " +
                                                            "\n" +
                                                            " CAMERA = " +
                                                            camera.hasPermission +
                                                            "\n" +
                                                            " AUDIO = " +
                                                            audio.hasPermission +
                                                            "\n" +
                                                            " AUDIO_SETTINGS = " +
                                                            modifyAudio.hasPermission
                                                        )
                                                    );
                                                }
                                            })
                                            .catch((err) => {
                                                console.error(
                                                    "Checking permission " +
                                                    this.androidPermissions.PERMISSION
                                                        .MODIFY_AUDIO_SETTINGS +
                                                    " failed"
                                                );
                                                reject(err);
                                            });
                                    })
                                    .catch((err) => {
                                        console.error(
                                            "Checking permission " +
                                            this.androidPermissions.PERMISSION.RECORD_AUDIO +
                                            " failed"
                                        );
                                        reject(err);
                                    });
                            })
                            .catch((err) => {
                                console.error(
                                    "Checking permission " +
                                    this.androidPermissions.PERMISSION.CAMERA +
                                    " failed"
                                );
                                reject(err);
                            });
                    })
                    .catch((err) => console.error("Error requesting permissions: ", err));
            });
        });
    }

    ngOnDestroy() {
        this.endTestVideo();

        this.subscriptions.forEach((subscription) => {
            subscription.unsubscribe();
        });
    }
}
