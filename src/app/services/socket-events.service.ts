import { Injectable, Injector } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Subject } from 'rxjs'
import { LocalNotifications } from '@capacitor/local-notifications'
import { GlobalVariableService } from './global-variable.service'
import { io, Socket } from 'socket.io-client';

declare var socket: any;


@Injectable({
  providedIn: 'root',
})
export class SocketEventsService {
  socket: Socket
  user
  public messageSubj: Subject<any> = new Subject()
  public newCallSubj: Subject<any> = new Subject()
  public rejectCallSubj: Subject<any> = new Subject()
  public acceptCallSubj: Subject<any> = new Subject()
  public consultationAcceptedSubj: Subject<any> = new Subject()
  public consultationClosedSubj: Subject<any> = new Subject()
  public newConsultationSubj: Subject<any> = new Subject()
  public endCallSubj: Subject<any> = new Subject()

  private connection: Subject<String> = new Subject()

  constructor(
      private injector: Injector,
      private globalVariableService: GlobalVariableService,
  ) { }

  // Helper method to emulate sails socket.get() functionality
  private socketGet(url: string, data: any, callback: (resData: any, jwres?: any) => void) {
    if (!this.socket || !this.socket.connected) {
      return callback({ error: 'Socket not connected' });
    }
    
    // Emit a request and wait for response
    this.socket.emit('get', { url, data }, (response: any) => {
      callback(response.data || response, response);
    });
  }

  async init(currentUser, cb) {
    // Don't need to reset the socket if the user is still the same...
    if (this.socket && currentUser && this.user) {
    if (currentUser.token === this.user.token) {
      this.reconnect(() => {});
      return
    }
      if (currentUser.id === this.user.id) {
        return
      }
    }

    if (this.user && this.user.token && this.user.token === currentUser.token) {
      if (this.socket && this.socket.connected) {
        return cb()
      }
    }
    if (
      !this.user ||
      !this.user.token ||
      this.user.token !== currentUser.token
    ) {
      if (this.socket && this.socket.connected) {
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
    this.user = currentUser;
    
    // Create socket connection with authentication
    this.socket = io(this.globalVariableService.getHostValue(), {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      query: {
        token: currentUser.token
      },
      extraHeaders: {
        id: currentUser.id.toString(),
        'x-access-token': currentUser.token,
      }
    })
      ; (<any>window).socket = this.socket

    this.socket.on('connect', () => {
      this.socketGet('/api/v1/subscribe-to-socket', {}, (resData, jwres) => {
        this.listenToEvents()
        cb()
      })
    })

    this.socket.on('error', (err) => {
      this.connection.next('connect_failed')
      console.info('Error connecting to server', err)
    })

    this.socket.on('disconnect', () => {
      console.info('Disconnect from server')
    })

    this.socket.on('reconnect', (number) => {
      this.connection.next('connect')
      console.info('Reconnected to server', number)
    })

    this.socket.on('reconnect_attempt', () => {
      this.connection.next('connect_failed')
      console.info('Reconnect Attempt')
    })

    this.socket.on('reconnecting', (number) => {
      console.info('Reconnecting to server', number)
      this.injector.get(AuthService).verifyRefreshToken().subscribe({
        next: (res) => {}, error: (err) => {
          if (err.status === 401) {
            this.injector.get(AuthService).logOutNurse();
          }
        }
      })
      if (number > 9) {
        this.injector.get(AuthService).logOutNurse();
      }
    })

    this.socket.on('reconnect_error', (err) => {
      this.connection.next('connect_failed')
      console.info('Reconnect Error', err)
    })

    this.socket.on('reconnect_failed', () => {
      this.connection.next('connect_failed')
      console.info('Reconnect failed')
    })

    this.socket.on('connect_error', () => {
      this.connection.next('connect_failed')
      console.info('connect_error')
    })
  }

  reconnect(cb) {
    if (!this.user) {
      return cb()
    }
    this.disconnect()
    const currentUser = this.injector.get(AuthService).currentUserValue;

    // Create new socket connection with authentication
    this.socket = io(this.globalVariableService.getHostValue(), {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      query: {
        token: currentUser.token
      },
      extraHeaders: {
        id: currentUser.id.toString(),
        'x-access-token': currentUser.token,
      }
    })
      ; (<any>window).socket = this.socket

    this.socket.on('connect', () => {
      this.socketGet('/api/v1/subscribe-to-socket', {}, (resData, jwres) => {
        this.listenToEvents()
        cb()
      })
    })
  }

  updateConnectionStatus(status) {
    this.connection.next(status)
  }
  connectionSub(): Subject<any> {
    return this.connection
  }

  listenToEvents() {
    this.socket.on('newMessage', (e) => {
      if (e.data.type !== 'videoCall' && e.data.type !== 'audioCall') {
        LocalNotifications.schedule({
          notifications:[{
            title: e.data.text ? e.data.text : 'New message',
            body:'',
            id: 1,
          }]
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
      this.socketGet('/api/v1/subscribe-to-socket', {}, (resData, jwres) => { })


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
    if (!this.socket || !this.socket.connected) {
      return
    }
    return this.socket.disconnect()
  }

  isSocketConnected(): boolean {
    return this.socket && this.socket.connected;
  }
}
