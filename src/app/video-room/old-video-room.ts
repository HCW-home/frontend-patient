// import { IceService } from './../ice.service';
// import { promise } from 'protractor';
// import { access } from 'fs';
// import { Subscription } from 'rxjs'
// import { environment } from './../../environments/environment'
// import { CallService } from './../call.service'
// import { ConsultationService } from './../consultation.service'
// import {
//   Component,
//   OnInit,
//   OnDestroy,
//   HostListener,
//   ViewChild,
//   ElementRef,
//   QueryList,
//   ViewChildren,
//   EventEmitter,
//   Output,
//   Input,
//   NgZone,
// } from '@angular/core'
// import { Platform, ModalController, AlertController } from '@ionic/angular'

// import { UserModel } from '../shared/models/user-model'
// import {
//   OpenViduLayout,
//   OpenViduLayoutOptions,
// } from '../shared/layout/openvidu-layout'
// import {
//   OpenVidu,
//   Session,
//   Stream,
//   StreamEvent,
//   Publisher,
//   SignalOptions,
//   StreamManagerEvent,
//   ConnectionEvent,
// } from 'openvidu-browser'
// import { OpenViduService } from '../shared/services/openvidu.service'

// import {
//   trigger,
//   keyframes,
//   state,
//   style,
//   transition,
//   animate,
// } from '@angular/animations'
// import { ChatComponent } from '../shared/components/chat/chat.component'

// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx'
// import { StreamComponent } from '../shared/components/stream/stream.component'
// import { isFulfilled, reject } from 'q'

// import { SocketEventsService } from '../socket-events.service'
// import { NativeAudio } from '@ionic-native/native-audio/ngx'
// import { OpenViduErrorName } from 'openvidu-browser/lib/OpenViduInternal/Enums/OpenViduError'

// declare var cordova

// @Component({
//   selector: 'app-video-room',
//   templateUrl: './video-room.page.html',
//   styleUrls: ['./video-room.page.scss'],
//   animations: [
//     trigger('slideLeftRight', [
//       state(
//         'in',
//         style({
//           transform: 'translateX(0px)',
//         }),
//       ),
//       state(
//         'out',
//         style({
//           transform: 'translateX(100px)',
//         }),
//       ),
//       transition(
//         'in => out',
//         animate(
//           '200ms',
//           keyframes([
//             style({ transform: 'translateX(100px)', display: 'none' }),
//           ]),
//         ),
//       ),
//       transition(
//         'out => in',
//         animate('200ms', keyframes([style({ transform: 'translateX(0px)' })])),
//       ),
//     ]),
//     trigger('slideLeftRightChat', [
//       state(
//         'in',
//         style({
//           transform: 'translateX(0px)',
//         }),
//       ),
//       state(
//         'out',
//         style({
//           transform: 'translateX(100px)',
//         }),
//       ),
//       transition(
//         'in => out',
//         animate(
//           '200ms',
//           keyframes([
//             style({ transform: 'translateX(100px)', display: 'none' }),
//           ]),
//         ),
//       ),
//       transition(
//         'out => in',
//         animate('200ms', keyframes([style({ transform: 'translateX(0px)' })])),
//       ),
//     ]),
//     trigger('slideTopBottom', [
//       state(
//         'in',
//         style({
//           transform: 'translateY(0px)',
//         }),
//       ),
//       state(
//         'out',
//         style({
//           transform: 'translateY(100px)',
//         }),
//       ),
//       transition(
//         'in => out',
//         animate(
//           '200ms',
//           keyframes([
//             style({ transform: 'translateY(100px)', display: 'none' }),
//           ]),
//         ),
//       ),
//       transition(
//         'out => in',
//         animate('200ms', keyframes([style({ transform: 'translateY(0px)' })])),
//       ),
//     ]),
//   ],
// })
// export class VideoRoomPage implements OnInit, OnDestroy {
//   constructor(
//     public platform: Platform,
//     private openViduSrv: OpenViduService,
//     public modalController: ModalController,
//     private androidPermissions: AndroidPermissions,
//     public alertController: AlertController,
//     private socketSer: SocketEventsService,
//     private consultationServ: ConsultationService,
//     private zone: NgZone,
//     private callServ: CallService,
//     private nativeAudio: NativeAudio,
//     private callService: CallService,
//     private iceService:IceService

//   ) { }
//   // Constants
//   ANDROID_PERMISSIONS = [
//     'android.permission.CAMERA',
//     'android.permission.RECORD_AUDIO',
//     'android.permission.MODIFY_AUDIO_SETTINGS',
//   ]
//   BIG_ELEMENT_CLASS = 'OV_big'

//   buttonsVisibility = 'in'
//   chatNotification = 'in'
//   cameraBtnColor = 'light'
//   camBtnColor = 'light'
//   camBtnIcon = 'videocam'
//   micBtnColor = 'light'
//   micBtnIcon = 'mic'
//   chatBtnColor = 'light'
//   bigElement: HTMLElement
//   messageReceived = false
//   messageList: {
//     connectionId: string
//     message: string
//     userAvatar: string
//   }[] = []
//   modalIsPresented = false
//   noWebCam = false

//   currentVideoDevice: string
//   videoDevices: any[]
//   isBackCamera = false
//   firstCam: string
//   lastCam: string

//   audioDevices: any[] = []
//   audioDeviceId: string;

//   OV: OpenVidu = new OpenVidu()
//   @ViewChild('mainStream') mainStream: ElementRef
//   session: Session
//   openviduLayout: OpenViduLayout
//   openviduLayoutOptions: OpenViduLayoutOptions
//   @Input() mySessionId: string
//   @Input() consultation
//   @Input() token: string
//   @Input() audioOnly
//   myUserName: string
//   localUser: UserModel
//   remoteUsers: UserModel[]
//   resizeTimeout
//   @Input() accepted = false
//   user
//   @Input() message
//   publisher: Publisher
//   @ViewChildren('streamComponentRemotes') streamComponentRemotes: QueryList<
//     StreamComponent
//   >
//   @ViewChild('streamComponentLocal') streamComponentLocal: StreamComponent

//   @Output() hangup = new EventEmitter<boolean>()

//   isFullScreen = true

//   socketSub
//   rejected

//   subscriptions: Subscription[] = []

//   @HostListener('window:beforeunload')
//   beforeunloadHandler() {
//     this.exitSession()
//   }

//   @HostListener('window:resize', ['$event'])
//   sizeChange(event) {
//     clearTimeout(this.resizeTimeout)
//     this.updateLayout()
//   }

//   iceServers=[
//     {
//       urls: environment.iceServerUrls,
//       username: environment.iceServerUsername,
//       credential: environment.iceServerCredential
//     }]
//   ngOnInit() {


//     console.log('Initialize video', this.audioOnly, this.accepted)

//     this.audioOnly = this.message.type === 'audioCall'
//     this.isFullScreen = !this.audioOnly
//     console.log('this. consultation n', this.consultation)
//     this.mySessionId = this.consultation.id
//     console.log('session id set ', this.mySessionId)
//     this.localUser = new UserModel()
//     this.localUser.setType('local')
//     this.remoteUsers = []
//     this.generateParticipantInfo()


//     this.subscriptions.push(
//       this.consultationServ
//         .getConsultation(this.consultation.id)
//         .subscribe((consultation) => {
//           console.log('got consultaion ', consultation)
//           if (
//             consultation &&
//             consultation.consultation &&
//             consultation.consultation.status === 'closed'
//           ) {
//             this.exitSession()

//             // return this.endCall();
//             return true
//           }

//         }),
//     )

//     this.callServ.isFullScreen.next(true)
//     this.socketSub = this.socketSer.onRejectCall().subscribe((event) => {
//       console.log('call rejected ', event, ' sesssion id ', this.mySessionId)
//       if (event.data.consultation.id === this.mySessionId) {
//         // this.endCall();
//         this.exitSession()
//       }
//     })


//     this.OV.getDevices().then((devices) => {
//       console.log('getDevices', devices)
//       console.log(devices)
//       this.videoDevices = devices.filter(
//         (device) => device.kind === 'videoinput',
//       )
//       console.log(this.videoDevices)

//       if (this.videoDevices.length) {
//         this.firstCam = this.videoDevices[0].deviceId
//         this.lastCam = this.videoDevices[this.videoDevices.length - 1].deviceId
//         this.currentVideoDevice = this.firstCam
//         console.log('Switch camera from from', this.currentVideoDevice)
//       } else {
//         this.currentVideoDevice = null
//       }
//     })

//     if (this.accepted) {
//       this.joinToSession()
//     }
//   }

//   ngOnDestroy() {
//     console.log('Destroy video room !!!!!!!!!!')
//     this.exitSession()
//     if (this.socketSub) {
//       this.socketSub.unsubscribe()
//     }

//     if (!this.rejected) {
//       this.rejectCall()
//     }

//     this.subscriptions.forEach((sub) => {
//       sub.unsubscribe()
//     })
//   }

//   endCall() {
//     if (this.session) {
//       this.exitSession()
//     }
//     if (this.platform.is('android')) {
//       console.log('end call ')
//       // cordova.plugins.CordovaCall.endCall();
//     }
//     this.hangup.emit(true)
//   }
//   joinToSession() {
//     this.subscriptions.push(this.iceService.getIceServers().subscribe(response => {
//       console.log('GOT iceServers ', response)
//       this.iceServers = response.iceServers
//       this._join()
//     }, err => {
//         console.log('Error getting iceServers', err)
//         this._join()
//     }))
  
//   }

//   _join() {
//     console.log('join session !!!!!!!!!!!!!!!!!')
//     this.localUser = new UserModel();
//     this.localUser.setType('local');
//     this.remoteUsers = [];

//     this.zone.run(() => {
//       this.accepted = true

//       this.openviduLayout = new OpenViduLayout()
//       this.openviduLayoutOptions = {
//         maxRatio: 3 / 2, // The narrowest ratio that will be used (default 2x3)
//         minRatio: 9 / 16, // The widest ratio that will be used (default 16x9)
//         fixedRatio: true /* If this is true then the aspect ratio of the video is maintained
//       and minRatio and maxRatio are ignored (default false)*/,
//         bigClass: 'OV_big', // The class to add to elements that should be sized bigger
//         bigPercentage: 0.82, // The maximum percentage of space the big ones should take up
//         bigFixedRatio: true, // fixedRatio for the big ones
//         bigMaxRatio: 3 / 2, // The narrowest ratio to use for the big elements (default 2x3)
//         bigMinRatio: 9 / 16, // The widest ratio to use for the big elements (default 16x9)
//         bigFirst: false, // Whether to place the big one in the top left (true) or bottom right
//         animate: true, // Whether you want to animate the transitions
//       }
//       this.openviduLayout.initLayoutContainer(
//         document.getElementById('layout'),
//         this.openviduLayoutOptions,
//       )
//       this.OV = new OpenVidu();


//       this.OV.setAdvancedConfiguration({
//         iceServers: this.iceServers,
//       })
//       this.session = this.OV.initSession()
//       this.subscribeToUserChanged()
//       this.subscribeToStreamCreated()
//       this.subscribedToStreamDestroyed()
//       this.subscribeToSessionDisconnected()
//       this.subscribedToChat()
//       this.connectToSession()
//       if (this.platform.is('cordova')){
//         this.nativeAudio.stop('ringSound').then()
//       }
//       console.log('consultation , >>', this.consultation, this.message)
//       this.openViduSrv
//         .acceptCall(this.consultation.id || this.consultation._id, this.message.id)
//         .then((res) => {
//           console.log('call accepted')
//         })
//         .catch(console.log)
//       // this.nativeAudio.unload('ringSound').then();
//     })
//   }
//   exitSession(rejoin?) {
//     console.log('Exit session')
  
//     if (this.platform.is('ios')) {
//       this.toggleNoneVideoContent(true);
//     }
//     // this.openViduSrv
//     //   .rejectCall(this.consultation.id || this.consultation._id, this.message.id)
//     //   .then((r) => { })
//     //   .catch((err) => {
//     //     console.log('error ', err)
//     //   })

//     if (this.session) {
      
//       try {
        
//         console.log('Disconnect...', this.session)
//         this.session.disconnect()

//         delete this.session  
//       } catch (error) {
//         console.log('Error disconncting ', error)
//       }
//     }

//     if (this.localUser) {
      
//       const publisher = (this.localUser.getStreamManager() as Publisher)
//       if (publisher && publisher.stream && publisher.stream.getMediaStream()) {
//         publisher.stream.getMediaStream().getVideoTracks().forEach(track => {
//           track.stop()
//         })
        
//       }
//     }
//     this.remoteUsers = []
//     // this.session = null;
//     delete this.localUser 
//     delete this.OV 
//     this.openviduLayout = null
//     if (rejoin) {
//       return this.joinToSession();
//     } else {

//       // this.endCall();
//       this.hangup.emit(true)
//     }
//     // this.router.navigate(['']);
//   }
//   private subscribeToSessionDisconnected() {
//     this.session.on('sessionDisconnected', (event: ConnectionEvent) => {
//       console.log('sessionDisconnected , ', event)

//       console.log("reconnecting session ");
//       // set reconnecting true
//       // this.reconnecting = true
//       this.subscriptions.push(this.callService.getCurrentCall(this.consultation.id || this.consultation._id).subscribe(call => {
//         console.log("got call ", call);
//         this.token = call.token;

//         this.exitSession(true)

//       }, err => {
//           console.log("error getting call ", err);
//           this.rejectCall()
//       }))

//       // reconnect on the server
//       // re create the session and get a new token and reconnect
//       // if success set reconnecting false
//       // else end the call

//     })
//   }

//   resetVideoSize() {
//     const element = document.querySelector('.' + this.BIG_ELEMENT_CLASS)
//     if (element) {
//       element.classList.remove(this.BIG_ELEMENT_CLASS)
//       this.bigElement = undefined
//       this.updateLayout()
//     }
//   }

//   micStatusChanged(): void {
//     (this.localUser.getStreamManager() as Publisher).publishAudio(
//       !this.localUser.getStreamManager().stream.audioActive,
//     )
//     if (this.localUser.getStreamManager().stream.audioActive) {
//       this.micBtnIcon = 'mic'
//       this.micBtnColor = 'light'
//     } else {
//       this.micBtnIcon = 'mic-off'
//       this.micBtnColor = 'primary'
//     }
//   }

//   camStatusChanged(): void {
//     (this.localUser.getStreamManager() as Publisher).publishVideo(
//       !this.localUser.getStreamManager().stream.videoActive,
//     )
//     if (this.localUser.getStreamManager().stream.videoActive) {
//       this.camBtnIcon = 'videocam'
//       this.camBtnColor = 'light'
//     } else {
//       this.camBtnIcon = 'eye-off'
//       this.camBtnColor = 'primary'
//     }
//   }

//   toggleCamera() {
//     // this.session.disconnect();
//     console.log('Switch camera from', this.currentVideoDevice)
//     if (this.currentVideoDevice === this.firstCam) {
//       this.currentVideoDevice = this.lastCam
//     } else {
//       this.currentVideoDevice = this.firstCam
//     }
//     console.log('Switch camera to', this.currentVideoDevice)

//     var newPublisher = this.OV.initPublisher('html-element-id', {
//       videoSource: this.currentVideoDevice,
//       publishAudio: true,
//       publishVideo: true,
//       mirror: this.currentVideoDevice === this.firstCam, // Setting mirror enable if front camera is selected
//     })

//     // Unpublishing the old publisher
//     this.session.unpublish(this.publisher)

//     // Assigning the new publisher to our global variable 'publisher'
//     this.publisher = newPublisher

//     // Publishing the new publisher
//     this.session.publish(this.publisher)

//     this.localUser.setStreamManager(this.publisher)
//     this.localUser.getStreamManager().on('streamPlaying', () => {
//       this.updateLayout()
//         ; ((
//           this.localUser.getStreamManager().videos[0].video
//         ) as HTMLElement).parentElement.classList.remove('custom-class')
//     })
//   }

//   async toggleChat() {
//     this.buttonsVisibility = 'out'
//     this.chatNotification = 'out'
//     const modal = await this.modalController.create({
//       component: ChatComponent,
//       componentProps: { user: this.localUser, messageList: this.messageList },
//     })

//     modal.onWillDismiss().then(() => {
//       this.modalIsPresented = false
//       this.toggleButtons()
//       this.updateLayout()
//     })

//     return await modal.present().then(() => {
//       this.modalIsPresented = true
//       this.chatBtnColor = 'light'
//       this.messageReceived = false
//     })
//   }

//   public toggleButtons() {
//     console.log('toggle buttons ', this.isFullScreen)
//     if (!this.isFullScreen) {
//       return
//     }
//     this.buttonsVisibility = this.buttonsVisibility === 'in' ? 'out' : 'in'
//     this.chatNotification = this.buttonsVisibility
//   }

//   public toggleButtonsOrEnlargeStream(event) {
//     event.preventDefault()
//     event.stopPropagation()
//     const path = event.path || event.composedPath()
//     const element: HTMLElement = path.filter(
//       (e: HTMLElement) => e.className && e.className.includes('OT_root'),
//     )[0]
//     if (this.bigElement && element === this.bigElement) {
//       this.toggleButtons()
//     } else if (this.bigElement !== element) {
//       if (this.bigElement) {
//         this.bigElement.classList.remove(this.BIG_ELEMENT_CLASS)
//       } else {
//         this.toggleButtons()
//       }
//       element.classList.add(this.BIG_ELEMENT_CLASS)
//       this.bigElement = element
//     }
//     this.updateLayout()
//   }

//   private generateParticipantInfo() {
//     this.myUserName = 'OpenVidu_User' + Math.floor(Math.random() * 100000)
//   }

//   private deleteRemoteStream(stream: Stream): void {
//     const userStream = this.remoteUsers.filter(
//       (user: UserModel) => user.getStreamManager().stream === stream,
//     )[0]
//     const index = this.remoteUsers.indexOf(userStream, 0)
//     if (index > -1) {
//       this.remoteUsers.splice(index, 1)
//     }
//   }

//   private subscribeToUserChanged() {
//     console.log('subscribe to user changed ')
//     this.session.on('signal:userChanged', (event: any) => {
//       const data = JSON.parse(event.data)
//       this.remoteUsers.forEach((user: UserModel) => {
//         if (user.getConnectionId() === event.from.connectionId) {
//           if (data.avatar !== undefined) {
//             user.setUserAvatar(data.avatar)
//           }
//         }
//       })
//     })
//   }

//   private subscribeToStreamCreated() {
    
//     if (this.platform.is('ios')) {
//       this.toggleNoneVideoContent(false);
//     }
//     this.session.on('streamCreated', (event: StreamEvent) => {
//       console.log('a stream created', event)
//       if (!this.session) {
//         return
//       }
//       const subscriber = this.session.subscribe(event.stream, undefined)
//       subscriber.on('streamPlaying', (e: StreamManagerEvent) => {
//         this.updateLayout()
//           ; ((
//             subscriber.videos[0].video as HTMLElement
//           )).parentElement.classList.remove('custom-class')
//       })
//       const newUser = new UserModel()
//       newUser.setStreamManager(subscriber)
//       newUser.setConnectionId(event.stream.connection.connectionId)
//       const nickname = event.stream.connection.data.split('%')[0]
//       try {
//         newUser.setNickname(JSON.parse(nickname).clientData)
//       } catch (err) {
//         newUser.setNickname(nickname)
//       }
//       newUser.setType('remote')

//       this.remoteUsers.push(newUser)
//       // this.sendSignalUserAvatar(this.localUser)

//       if (!this.isFullScreen) {
//         this.buttonsVisibility = 'out'
//       }
//       this.chatNotification = 'out'
//     })
//   }

//   private subscribedToStreamDestroyed() {

//     this.session.on('streamDestroyed', (event: StreamEvent) => {
//       console.log('Sream destroyed >>>>>>>>>>>>>>>>>>')
//       // if (this.session) {
//       //   return this.connectToSession();
//       // }
//       this.deleteRemoteStream(event.stream)
//       clearTimeout(this.resizeTimeout)
//       this.resizeTimeout = setTimeout(() => {
//         this.updateLayout()
//       }, 20)
//       event.preventDefault()
//     })
//   }

//   private subscribedToChat() {
//     this.session.on('signal:chat', (event: any) => {
//       const data = JSON.parse(event.data)
//       const messageOwner =
//         this.localUser.getConnectionId() === data.connectionId
//           ? this.localUser
//           : this.remoteUsers.filter(
//             (user) => user.getConnectionId() === data.connectionId,
//           )[0]

//       this.messageList.push({
//         connectionId: data.connectionId,
//         message: data.message,
//         userAvatar: messageOwner.getAvatar(),
//       })
//       ChatComponent.prototype.scrollToBottom()

//       if (!this.modalIsPresented) {
//         this.chatBtnColor = 'secondary'
//         this.messageReceived = true
//         this.chatNotification = 'in'
//       }
//     })
//   }

//   private sendSignalUserAvatar(user: UserModel): void {
//     const data = {
//       avatar: user.getAvatar(),
//     }
//     const signalOptions: SignalOptions = {
//       data: JSON.stringify(data),
//       type: 'userChanged',
//     }
//     this.session.signal(signalOptions)
//   }

//   private connectToSession(): void {
//     console.log('connect to session', this.token)
//     if (this.token) {
//       this.connect(this.token)
//     } else {
//       this.openViduSrv
//         .getToken(this.mySessionId)
//         .then((res) => {
//           this.message = res.msg
//           this.connect(res.token)
//         })
//         .catch((error) => {
//           console.error(
//             'There was an error getting the token:',
//             error.code,
//             error.message,
//           )
//           this.openAlertError(error.message)
//         })
//     }
//   }
//   private connect(token: string): void {
//     this.session
//       .connect(token, { clientData: this.myUserName })
//       .then(() => {
//         if (this.platform.is('cordova')) {
//           if (this.platform.is('android')) {
//             console.log('Android platform')
//             this.checkAndroidPermissions()
//               .then(() => {
//                 this.connectWebCam()
//               })
//               .catch((err) => {
//                 console.error(err)
//               })
//           } else if (this.platform.is('ios')) {
//             console.log('iOS platform')
//             this.connectWebCam()
//           }
//         } else {
//           console.log('platfom else ')

//           if (this.platform.is('desktop')) {
//             this.OV.getDevices().then((devices) => {
//               console.log('devices ', devices)
//               if (!devices.find((d) => d.kind === 'videoinput')) {
//                 this.noWebCam = true
//               }
//               return this.connectWebCam()
//             })
//           } else {
//             this.connectWebCam()
//           }
//         }
//       })
//       .catch((error) => {
//         console.error(
//           'There was an error connecting to the session:',
//           error.code,
//           error.message,
//         )
//         this.openAlertError(error.message)
//       })
//   }

//   private checkAndroidPermissions(): Promise<any> {
//     console.log('Requesting Android Permissions')
//     return new Promise((resolve, reject) => {
//       this.platform.ready().then(() => {
//         this.androidPermissions
//           .requestPermissions(this.ANDROID_PERMISSIONS)
//           .then(() => {
//             this.androidPermissions
//               .checkPermission(this.androidPermissions.PERMISSION.CAMERA)
//               .then((camera) => {
//                 this.androidPermissions
//                   .checkPermission(
//                     this.androidPermissions.PERMISSION.RECORD_AUDIO,
//                   )
//                   .then((audio) => {
//                     this.androidPermissions
//                       .checkPermission(
//                         this.androidPermissions.PERMISSION
//                           .MODIFY_AUDIO_SETTINGS,
//                       )
//                       .then((modifyAudio) => {
//                         if (
//                           camera.hasPermission &&
//                           audio.hasPermission &&
//                           modifyAudio.hasPermission
//                         ) {
//                           resolve(null)
//                         } else {
//                           reject(
//                             new Error(
//                               'Permissions denied: ' +
//                               '\n' +
//                               ' CAMERA = ' +
//                               camera.hasPermission +
//                               '\n' +
//                               ' AUDIO = ' +
//                               audio.hasPermission +
//                               '\n' +
//                               ' AUDIO_SETTINGS = ' +
//                               modifyAudio.hasPermission,
//                             ),
//                           )
//                         }
//                       })
//                       .catch((err) => {
//                         console.error(
//                           'Checking permission ' +
//                           this.androidPermissions.PERMISSION
//                             .MODIFY_AUDIO_SETTINGS +
//                           ' failed',
//                         )
//                         reject(err)
//                       })
//                   })
//                   .catch((err) => {
//                     console.error(
//                       'Checking permission ' +
//                       this.androidPermissions.PERMISSION.RECORD_AUDIO +
//                       ' failed',
//                     )
//                     reject(err)
//                   })
//               })
//               .catch((err) => {
//                 console.error(
//                   'Checking permission ' +
//                   this.androidPermissions.PERMISSION.CAMERA +
//                   ' failed',
//                 )
//                 reject(err)
//               })
//           })
//           .catch((err) => console.error('Error requesting permissions: ', err))
//       })
//     })
//   }
//   initHardware() {
  
//     return new Promise((resolve, reject) => {
//       navigator.mediaDevices.getUserMedia({ audio: true, video: true })
//       .then((stream) => {
//         stream.getTracks().forEach(track => track.stop());
//         this.OV.getDevices().then(devices => {
//           console.log('devices ', devices);
//           this.videoDevices = devices.filter(device => device.kind === 'videoinput');
//           if (this.videoDevices.length && this.videoDevices[0].deviceId !== '') {
//             this.currentVideoDevice = this.videoDevices[0].deviceId;
//           }
//           this.audioDevices = devices.filter(device => device.kind === 'audioinput');
//           if (this.audioDevices.length && this.audioDevices[0].deviceId !== '') {
//             this.audioDeviceId = this.audioDevices[0].deviceId;
//           }
//           resolve(null)
//         });
//       })
//       .catch((error) => {
//         navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
//           stream.getTracks().forEach(track => track.stop());
//           this.OV.getDevices().then(devices => {
//             this.videoDevices = devices.filter(device => device.kind === 'videoinput');
//             if (this.videoDevices.length && this.videoDevices[0].deviceId !== '') {
//               this.currentVideoDevice = this.videoDevices[0].deviceId;
//             }
//             resolve(null)

//           });
//         }).catch(reject);
//         navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
//           stream.getTracks().forEach(track => track.stop());
//           this.OV.getDevices().then(devices => {
//             this.audioDevices = devices.filter(device => device.kind === 'audioinput');
//             if (this.audioDevices.length && this.audioDevices[0].deviceId !== '') {
//               this.audioDeviceId = this.audioDevices[0].deviceId;
//             }
//             resolve(null)

//           });
//         }).catch(reject);
//       });
//     })
//   }
//   private async connectWebCam(): Promise<any> {
//     await this.initHardware()
//     console.log('connect webcam!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     this.localUser.setNickname(this.myUserName)
//     this.localUser.setConnectionId(this.session.connection.connectionId)
//     const isVideo = !this.audioOnly && !this.noWebCam
//     this.OV.initPublisherAsync(undefined, {
//       audioSource: undefined,
//       videoSource: isVideo ? this.currentVideoDevice : null,
//       publishAudio: true,
//       publishVideo: isVideo,
//       resolution: '640x480',
//       frameRate: 30,
//       insertMode: 'APPEND',
//     })
//       .then((publisher) => {
//         this.publisher = publisher
//         this.session.publish(publisher)
//         this.localUser.setStreamManager(publisher)
//         this.localUser.getStreamManager().on('streamPlaying', () => {
//           this.updateLayout()
//             ; ((
//               this.localUser.getStreamManager().videos[0].video as HTMLElement
//             )).parentElement.classList.remove('custom-class')
//         })
//         // this.openViduSrv.getRandomAvatar().then(avatar => {
//         //   this.localUser.setUserAvatar(avatar);
//         //   this.sendSignalUserAvatar(this.localUser);
//         // });
//       })
//       .catch((error) => {
//         console.error(error)

//         this.exitSession()

//         // this.endCall();
//       })
//   }

//   private updateLayout() {
//     this.resizeTimeout = setTimeout(() => {
//       if (!this.openviduLayout) {
//         return
//       }
//       console.log('update layout .....................................')
//       this.openviduLayout.updateLayout()
//       if (this.platform.is('cordova') && this.platform.is('ios')) {
//         // setTimeout(() => {
//         //   if (this.streamComponentLocal) {
//         //     this.streamComponentLocal.videoComponent.applyIosIonicVideoAttributes()
//         //   }
//         //   if (this.streamComponentRemotes.length > 0) {
//         //     this.streamComponentRemotes.forEach((stream: StreamComponent) => {
//         //       stream.videoComponent.applyIosIonicVideoAttributes()
//         //     })
//         //   }
//         // }, 250)
//       }
//     }, 20)
//   }

//   private async openAlertError(message: string) {
//     const alert = await this.alertController.create({
//       header: 'Error occurred!',
//       subHeader: 'There was an error connecting to the session:',
//       message: message,
//       buttons: ['OK'],
//     })
//     await alert.present()
//   }
//   toggleFullScreen() {
//     if (this.isFullScreen) {
//       this.buttonsVisibility = 'in'
//     }
//     this.isFullScreen = !this.isFullScreen
//     this.callServ.isFullScreen.next(this.isFullScreen)
//     setTimeout(() => this.updateLayout(), 2)
//   }

//   rejectCall() {
//     if (this.platform.is('android') && this.platform.is('hybrid')) {
//       if (this.platform.is('cordova') && cordova.plugins.CordovaCall) {

//         cordova.plugins.CordovaCall.endCall()
//       }
//     }

//     this.rejected = true
//     if (this.platform.is('cordova')){
//       this.nativeAudio.stop('ringSound').then()
//     }
//     // this.nativeAudio.unload('ringSound').then(this.onSuccess,this.onError);

//     console.log('reject call ', this.mySessionId)
//     this.openViduSrv
//       .rejectCall(this.consultation.id || this.consultation._id, this.message.id)
//       .then((r) => {
//         console.log('exit ', this.mySessionId)
//       })
//       .catch((err) => {
//         console.log('error ', err)
//       })
//     this.exitSession()
//     // this.openViduSrv.rejectCall(this.mySessionId, this.message.id).then(r => {
//     //   console.log('exit ', this.mySessionId);
//     //   // this.session = null;

//     // }).catch(err => {
//     //   console.log('error ', err);
//     // });
//     // this.exitSession();

//     // this.endCall();
//   }

//   toggleNoneVideoContent(show) {
//     const chatContainer = document.getElementById("chatContainer") //.style.display = "block"
//     const chatInputContainer = document.getElementById("chatInputContainer")
//     const ionContentMain = document.getElementById("ionContentMain")
//     const chatHeader = document.getElementById("chatHeader")

//     const warning = document.getElementById("warning")
//     if (show) {

//       if (chatContainer) {
//         chatContainer.style.display = "block"
//       }
//       if (chatInputContainer) {
//         chatInputContainer.style.display = "block"
//       }
//       if (chatHeader) {
//         chatHeader.style.display = "block"
//       }

//       if (warning) {
//         warning.style.display = "block"
//       }
//       if (ionContentMain) {
//         ionContentMain.style.backgroundColor = "#f0f7f7"
//       }
//     } else {
//       if (chatContainer) {
//         chatContainer.style.display = "none"
//       }
//       if (chatInputContainer) {
//         chatInputContainer.style.display = "none"
//       }
//       if (chatHeader) {
//         chatHeader.style.display = "none"
//       }

//       if (warning) {
//         warning.style.display = "none"
//       }

//       if (ionContentMain) {
//         ionContentMain.style.backgroundColor = "transparent"
//       }
//     }
//   }

//   // stopAudioTracks(mediaStream: MediaStream) {
//   //   if (mediaStream) {
// 	// 	mediaStream?.getAudioTracks().forEach((track) => {
// 	// 		track.stop();

// 	// 		track.enabled = false;
// 	// 	});
// 	// 	this.webcamMediaStream?.getAudioTracks().forEach((track) => {
// 	// 		track.stop();
// 	// 	});
// 	// }
      
//   // }
// }
