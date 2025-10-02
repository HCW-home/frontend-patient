import { Injectable, Injector } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Subject } from 'rxjs'
import { LocalNotifications } from '@capacitor/local-notifications'
import { GlobalVariableService } from './global-variable.service'
import { io, Socket } from 'socket.io-client';

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

  private socketGet(url: string, data: any, callback: (resData: any, jwres?: any) => void) {
    if (!this.socket || !this.socket.connected) {
      console.warn('Socket not connected, skipping request to:', url);
      return callback({ success: false, error: 'Socket not connected' }, { statusCode: 503 });
    }

    const sailsMessage = {
      method: 'get',
      url: url,
      data: data || {},
      headers: {
        'x-access-token': this.user?.token || '',
        'authorization': `Bearer ${this.user?.token || ''}`,
        'id': this.user?.id?.toString() || ''
      }
    };

    this.socket.emit('get', sailsMessage, (response: any) => {
      console.log('Sails.js response:', response);
      if (response && response.statusCode >= 200 && response.statusCode < 300) {
        callback(response.body || response, response);
      } else {
        console.warn('Socket request failed:', response);
        callback(response || { success: false }, response || { statusCode: 500 });
      }
    });
  }

  async init(currentUser, cb) {
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

    this.socket = io(this.globalVariableService.getHostValue(), {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      transports: ['websocket', 'polling'],
      forceNew: true,
      path: '/socket.io',
      query: {
        token: currentUser.token,
        __sails_io_sdk_version: '1.2.1',
        __sails_io_sdk_platform: 'browser',
        __sails_io_sdk_language: 'javascript'
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
      this.socketGet('/api/v1/subscribe-to-socket', {}, (resData, jwres) => {
        console.info('Re-subscribed to socket after reconnection', resData, jwres)
        this.listenToEvents()
      })
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

    this.socket = io(this.globalVariableService.getHostValue(), {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      transports: ['websocket', 'polling'],
      forceNew: true,
      path: '/socket.io',
      query: {
        token: currentUser.token,
        __sails_io_sdk_version: '1.2.1',
        __sails_io_sdk_platform: 'browser',
        __sails_io_sdk_language: 'javascript'
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
