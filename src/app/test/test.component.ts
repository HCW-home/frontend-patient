import { RoomService, LogService, Stream } from "hug-angular-lib";
import { SocketEventsService } from "./../socket-events.service";
import { ConsultationService } from "./../consultation.service";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { Platform } from "@ionic/angular";
import { Router } from "@angular/router";
import { OpenViduService } from "./../shared/services/openvidu.service";
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
  NgZone,
} from "@angular/core";

import { Subscription } from "rxjs";
// translate
import { TranslateService } from "@ngx-translate/core";

import { InfoService } from "../info.service";

import { AuthService } from "../auth/auth.service";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-test-call",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent implements OnInit, OnDestroy {
  // Constants
  ANDROID_PERMISSIONS = [
    "android.permission.CAMERA",
    "android.permission.RECORD_AUDIO",
    "android.permission.MODIFY_AUDIO_SETTINGS",
  ];
  websocket: WebSocket;

  @ViewChild("scrollMe") private myScrollContainer: ElementRef;
  lockScroll = false;

  info = [];

  session;

  testStatus = "DISCONNECTED";
  testButton = "Tester mon matériel";
  tickClass = "trigger";
  showSpinner = false;
  msgChain = [];

  volumeLevel = 0;

  accessHardwareGranted: Boolean = null;
  testStarted: Boolean = null;
  loading: Boolean = false;

  globalMessage = "";
  inviteToken = "";

  subscriptions: Subscription[] = [];
  peerId;
  myCamStream: Stream;

  constructor(
    private infoService: InfoService,
    private openviduSev: OpenViduService,
    private router: Router,
    public platform: Platform,
    private androidPermissions: AndroidPermissions,
    private conServ: ConsultationService,
    private socketService: SocketEventsService,
    private authService: AuthService,
    private zone: NgZone,
    private translate: TranslateService,
    public configService: ConfigService,
    private roomService: RoomService,
    private logger: LogService
  ) {
    this.testButton = this.translate.instant("test.testMyEquipment");
    // Subscription to info updated event raised by InfoService
    console.log("testButton ", this.testButton);
    this.subscriptions.push(
      this.infoService.newInfo$.subscribe((info) => {
        this.info.push(info);
        this.scrollToBottom();
      })
    );
  }

  ngOnInit() {
    this.logger.debug("Test component on init");

    this.subscriptions.push(
      this.translate
        .get("test.testMyEquipment")
        .subscribe((translated: string) => {
          this.testButton = this.translate.instant("test.testMyEquipment");
        })
    );
    this.inviteToken = localStorage.getItem("inviteToken");
  }

  initHardwareDevices() {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => {
        console.log("Got stren", stream);
        stream.getTracks().forEach((track) => track.stop());

        this.initAudioPublisher();
      })
      .catch((error) => {
        console.log("EROOOOOR", error);
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then((stream) => {
            stream.getTracks().forEach((track) => track.stop());

            this.initAudioPublisher();
          })
          .catch(() => {});
        navigator.mediaDevices
          .getUserMedia({ audio: true })
          .then((stream) => {
            stream.getTracks().forEach((track) => track.stop());

            this.initAudioPublisher();
          })
          .catch(() => {});
      });
  }

  startTest() {
    if (this.testStarted) {
      this.globalMessage = "";
      this.testStatus = "DISCONNECTED";
    }

    this.showSpinner = true;
    return this.toggleTestVideo();
  }

  @HostListener("window:beforeunload")
  beforeunloadHandler() {
    // On window closed leave test session and close info websocket
    this.endTestVideo();
  }

  ngOnDestroy() {
    console.log("ng on destroy ..........");
    // On component destroyed leave test session and close info websocket
    this.endTestVideo();

    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  toggleTestVideo() {
    this.testStarted = !this.testStarted;
    if (!this.session) {
      this.testVideo();
    } else {
      this.endTestVideo();
    }
  }

  testVideo() {
    this.openviduSev
      .getTestToken()
      .then(({ token, peerId }) => {
        this.peerId = peerId;
        this.connectToSession(token);
      })
      .catch((error) => {
        if (error === 401) {
          // User unauthorized error. OpenVidu security is active
          this.testVideo();
        } else {
          console.error(error);
          this.msgChain.push({
            success: false,
            msg: "Error connecting to session: " + error,
          });
        }
      });
  }

  proceedToConsultation() {
    this.endTestVideo();
    const inviteToken = localStorage.getItem("inviteToken");

    const user = this.authService.currentUserValue;
    console.log("proceed to consultation ", user);

    if (inviteToken) {
      this.loading = true;
      this.conServ
        .createConsultation({
          queue: "covid19",
          gender: "unknown",
          IMADTeam: "none",
          invitationToken: inviteToken,
        })
        .toPromise()
        .then((consultation) => {
          if (!consultation) {
            return this.router.navigate(["await-consultation"]);
          }

          localStorage.setItem("currentConsultation", consultation.id);
          // localStorage.removeItem('inviteToken');
          this.router.navigate(["consultation", consultation.id]);
          //
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 2000);
        });
      // this.authService
      //   .loginWithInvite(inviteToken, '')
      //   .toPromise()
      //   .then((user) => {
      //     this.conServ
      //       .createConsultation({
      //         queue: 'covid19',
      //         gender: 'unknown',
      //         IMADTeam: 'none',
      //         invitationToken: inviteToken,
      //       })
      //       .toPromise()
      //       .then((consultation) => {
      //         localStorage.setItem('currentConsultation', consultation.id)
      //         this.router.navigate(['consultation', consultation.id])
      //         //
      //       })
      //       .catch((err) => {
      //         console.log(err)
      //       })
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //     this.loading = false
      //   })
      //   .finally(() => {
      //     setTimeout(() => {
      //       this.loading = false
      //     }, 2000)
      //   })
    }
  }

  initAudioPublisher() {
    this.roomService.onVolumeChange.subscribe((change) => {
      console.log("Volume change ", change);
      this.zone.run(() => {
        this.volumeLevel = change.volume * 1000;
      });
    });
    // if (this.audioPublisher) {
    //   this.audioPublisher.stream.disposeMediaStream()
    //   this.audioPublisher.off('streamAudioVolumeChange')
    //   this.audioPublisher = null
    // }

    // this.OV.initPublisherAsync(undefined, {
    //   audioSource: this.audioDeviceId,
    //   videoSource: null,
    //   publishAudio: true,
    //   publishVideo: false,
    // })
    //   .then((publisher) => {
    //     this.audioPublisher = publisher
    //     this.audioPublisher.on('streamAudioVolumeChange', (event: any) => {
    //       this.volumeLevel = event.value.newValue + 100
    //     })
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
  }

  initSession(token: string) {
    this.accessHardwareGranted = true;
    this.session = true;
    this.roomService.init({ peerId: this.peerId });
    this.msgChain.push({
      success: true,
      msg: "Accès au micro et à la caméra",
    });
    this.roomService.join({
      roomId: this.peerId,
      joinVideo: true,
      joinAudio: true,
      token: token,
    });

    this.roomService.onCamProducing.subscribe((stream) => {
      this.msgChain.push({ success: true, msg: "Connected to session" });
      this.logger.debug("Cam producing ", stream);
      this.myCamStream = stream;
      this.testButton = this.translate.instant("test.stopTheTest");
      this.testStatus = "PLAYING";
      this.globalMessage = this.translate.instant("test.yourDeviceSeems");
      this.showSpinner = false;
      this.connectWebCam();
    });

    // return this.session
    //   .connect(token)
    //   .then(() => {
    //     this.connectWebCam()
    //   })
    //   .catch((error) => {
    //     this.msgChain.push({
    //       success: false,
    //       msg: 'Error connecting to session: ' + error,
    //     })
    //   })
  }
  connectToSession(token: string) {
    this.msgChain = [];

    this.session = true;
    console.log("OV session", this.session);
    console.log("Session token", token);
    this.testStatus = "CONNECTING";
    this.testButton = this.translate.instant("test.testInProgress");
    this.accessHardwareGranted = null;

    if (this.platform.is("android") && this.platform.is("hybrid")) {
      this.checkAndroidPermissions()
        .then(() => {
          console.log("Permissions ok !");
          this.initSession(token);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      this.initSession(token);
    }
  }

  connectWebCam() {
    // this.msgChain.push({ success: true, msg: 'Connected to session' });

    console.log("Start connection webcam");
    this.testStatus = "CONNECTED";
    this.initAudioPublisher();
    // this.initHardwareDevices()

    // const publisherRemote = this.OV.initPublisher(
    //   'mirrored-video',
    //   {
    //     publishAudio: true,
    //     publishVideo: true,
    //     resolution: '640x480',
    //   },
    //   (e) => {
    //     if (!!e) {
    //       console.error(e)
    //     }
    //   },
    // )

    // publisherRemote.on('accessAllowed', () => {
    //   this.accessHardwareGranted = true
    //   this.msgChain.push({
    //     success: true,
    //     msg: 'Accès au micro et à la caméra',
    //   })
    // })

    // publisherRemote.on('accessDenied', () => {
    //   // this.endTestVideo();
    //   this.accessHardwareGranted = false
    //   this.msgChain.push({
    //     success: false,
    //     msg: 'Accès au micro et à la caméra',
    //   })

    //   this.globalMessage =
    //     this.translate.instant('test.yourDeviceAppears');
    // })

    // publisherRemote.on('videoElementCreated', (video) => {
    //   this.showSpinner = true
    //   this.msgChain.push({ success: true, msg: this.translate.instant('test.videoElementCreated') })
    // })

    // publisherRemote.on('streamCreated', (video) => {
    //   this.msgChain.push({ success: true, msg: this.translate.instant('test.streamCreated') })
    // })

    // publisherRemote.on('streamPlaying', (video) => {
    //   this.msgChain.push({ success: true, msg: this.translate.instant('test.connectionWithServer') })
    //   console.log('mesgchaing ', this.msgChain)
    //   this.testButton = this.translate.instant('test.stopTheTest')
    //   this.testStatus = 'PLAYING'
    //   this.globalMessage =
    //     this.translate.instant('test.yourDeviceSeems')
    //   this.showSpinner = false
    // })

    // this.msgChain.push({
    //   success: true,
    //   msg: this.translate.instant('test.testStarting'),
    // })

    // console.log('Will subscribe')
    // publisherRemote.subscribeToRemote()
    // console.log('subscribed')
    // this.session.publish(publisherRemote)
    // console.log('published')
  }

  endTestVideo() {
    console.log("End TEST>>>>>>>>>>>>>>>>>>>>>>>>>>>");

    if (this.session) {
      this.roomService.close();
      this.session = null;
    }
    this.testStatus = "DISCONNECTED";
    this.testButton = this.translate.instant("test.testMyEquipment");
    this.showSpinner = false;
    this.info = [];
    this.msgChain = [];

    if (this.myCamStream) {
      this.myCamStream.mediaStream.getTracks().forEach(function (track) {
        track.stop();
      });
      this.myCamStream = null;
    }
    localStorage.setItem("videoCallTested", "true");
  }

  scrollToBottom(): void {
    try {
      if (!this.lockScroll) {
        this.myScrollContainer.nativeElement.scrollTop =
          this.myScrollContainer.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error("[Error]:" + err.toString());
    }
  }

  ionViewWillLeave() {
    console.log("ion view will leave ..........");

    this.endTestVideo();
  }

  private checkAndroidPermissions(): Promise<any> {
    console.log("Requesting Android Permissions");
    return new Promise((resolve, reject) => {
      this.platform.ready().then(() => {
        this.androidPermissions
          .requestPermissions(this.ANDROID_PERMISSIONS)
          .then(() => {
            this.androidPermissions
              .checkPermission(this.androidPermissions.PERMISSION.CAMERA)
              .then((camera) => {
                console.log("permissions camera", camera);
                this.androidPermissions
                  .checkPermission(
                    this.androidPermissions.PERMISSION.RECORD_AUDIO
                  )
                  .then((audio) => {
                    console.log("permissions audio", audio);
                    this.androidPermissions
                      .checkPermission(
                        this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS
                      )
                      .then((modifyAudio) => {
                        console.log(
                          "check permission final request",
                          camera.hasPermission,
                          audio.hasPermission,
                          modifyAudio.hasPermission
                        );
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
}
