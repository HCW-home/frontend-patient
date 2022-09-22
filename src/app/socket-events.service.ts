import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { environment } from '../environments/environment'
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx'
import { GlobalVariableService } from './global-variable.service'

// declare var io: any
declare var socket: any;
import io from 'socket.io-client';
import sailsIOClient from 'sails.io.js'
const sailsIo = sailsIOClient(io);
sailsIo.sails.autoConnect = false;
@Injectable({
  providedIn: 'root',
})
export class SocketEventsService {
  socket
  user
  public messageSubj: Subject<any> = new Subject()
  public newCallSubj: Subject<any> = new Subject()
  public rejectCallSubj: Subject<any> = new Subject()
  public acceptCallSubj: Subject<any> = new Subject()
  public consultationAcceptedSubj: Subject<any> = new Subject()
  public consultationClosedSubj: Subject<any> = new Subject()
  public newConsultationSubj: Subject<any> = new Subject()
  public endCallSubj: Subject<any> = new Subject()


  constructor(
    private localNotifications: LocalNotifications,
    private globalVariableService: GlobalVariableService,
  ) { }

  async init(currentUser, cb) {
    console.log('init socket ', currentUser)

    // Don't need to reset the socket if the user is still the same...
    if (this.socket && currentUser && this.user) {
      if (currentUser.id === this.user.id) {
        return
      }
    }

    if (this.user && this.user.token && this.user.token === currentUser.token) {
      if (this.socket && socket.isConnected()) {
        return cb()
      }
    }
    if (
      !this.user ||
      !this.user.token ||
      this.user.token !== currentUser.token
    ) {
      if (this.socket && socket.isConnected()) {
        try {
          await this.socket.disconnect()
        } catch (err) {
          console.log('error disconnecting', err)
        }
        this.socket = null
      }
    }

    if (!currentUser) {
      this.disconnect()
      return
    }
    this.user = currentUser
    sailsIo.sails.query = `token=${currentUser.token}`
    sailsIo.sails.headers = {
      id: currentUser.id,
      'x-access-token': currentUser.token,
    }
    console.log('WEBSOCKET CONNECT', sailsIo.sails.headers)

    this.socket = sailsIo.sails.connect(this.globalVariableService.getHostValue(), {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
    })
      ; (<any>window).socket = this.socket

    this.socket.on('connect', () => {
      socket.get('/api/v1/subscribe-to-socket', {}, (resData, jwres) => {
        this.listenToEvents()
        cb()
      })
    })

    this.localNotifications.on('click').subscribe((e) => {
      console.log('notification event,  ', e)
    })
  }

  reconnect(cb) {
    if (!this.user) {
      return cb()
    }
    this.disconnect()

    sailsIo.sails.query = `token=${this.user.token}`
    sailsIo.sails.headers = {
      id: this.user.id,
      'x-access-token': this.user.token,
    }

    this.socket = sailsIo.sails.connect(this.globalVariableService.getHostValue(), {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
    })
      ; (<any>window).socket = this.socket

    this.socket.on('connect', () => {
      socket.get('/api/v1/subscribe-to-socket', {}, (resData, jwres) => {
        this.listenToEvents()
        cb()
      })
    })
  }

  listenToEvents() {
    this.socket.on('newMessage', (e) => {
      if (e.data.type !== 'videoCall' && e.data.type !== 'audioCall') {
        console.log('The message', e.data)
        this.localNotifications.schedule({
          id: 1,
          title: e.data.text ? e.data.text : 'New message',
          text: '',
          priority: 1,
        })
      }

      this.messageSubj.next(e)
    })

    this.socket.on('newCall', (e) => {
      this.newCallSubj.next(e)
    })

    this.socket.on('rejectCall', (e) => {
      this.rejectCallSubj.next(e)
    })

    this.socket.on('acceptCall', (e) => {
      this.acceptCallSubj.next(e)
    })

    this.socket.on('consultationAccepted', (e) =>
      this.consultationAcceptedSubj.next(e),
    )

    this.socket.on('consultationClosed', (e) =>
      this.consultationClosedSubj.next(e),
    )

    this.socket.on('newConsultation', (e) => {

      // this is needed to update the online status for the consultation and send it to the consultation participants 
      socket.get('/api/v1/subscribe-to-socket', {}, (resData, jwres) => { })


      return this.newConsultationSubj.next(e)
    })
    this.socket.on('endCall', (e) => {
      this.endCallSubj.next(e)
    })
  }
  onMessage() {
    return this.messageSubj
  }
  onCall() {
    return this.newCallSubj
  }
  onRejectCall() {
    return this.rejectCallSubj
  }
  onAcceptCall() {
    return this.acceptCallSubj
  }
  onConsultationAccepted() {
    return this.consultationAcceptedSubj
  }
  onConsultationClosed() {
    return this.consultationClosedSubj
  }
  onNewConsultation() {
    return this.newConsultationSubj
  }
  onEndCall() {
    return this.endCallSubj
  }

  disconnect() {
    if (!this.socket || !this.socket.isConnected()) {
      return
    }
    return this.socket.disconnect()
  }
}
