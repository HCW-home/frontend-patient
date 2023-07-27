import { Platform } from '@ionic/angular';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { SocketEventsService } from '../socket-events.service';
import { ConsultationService } from '../consultation.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { GlobalVariableService } from '../global-variable.service';
import { CapacitorCookies } from '@capacitor/core';

declare let window: any;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private loggedIn: Subject<User> = new Subject();
  private inviteToken: Subject<string> = new Subject();
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private _socketEventsService: SocketEventsService,
    private consultationService: ConsultationService,
    private router: Router,
    private globalVariableService: GlobalVariableService,
    private platform: Platform
  ) {

  }

  init() {
    this.currentUserSubject = new BehaviorSubject<User>(null);
    this.currentUser = this.currentUserSubject.asObservable();
    return this.getCurrentUser().toPromise()
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get currentInviteToken(): string {
    const sessionToken = localStorage.getItem('inviteToken');
    return sessionToken;
  }

  public setInviteToken(inviteToken) {
    console.log('SET invite token')
    localStorage.setItem('inviteToken', inviteToken);
    this.inviteToken.next(inviteToken);
  }

  public observeInviteToken(): Observable<string> {
    return this.inviteToken.asObservable();
  }

  public loggedInSub() {
    return this.loggedIn;
  }


  //
  loginWithInvite(inviteToken, phoneNumber?, translator?, options?: any) {
    const opts = { withCredentials: true };

    return this.http.post<any>(`${this.globalVariableService.getApiPath()}/login-invite`, { inviteToken, phoneNumber, translator, ...options }, opts).pipe(map(res => {
      console.log('logged in and got user data ', res);
      // login successful if there's a jwt token in the response
      if (res.user && res.user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.currentUserSubject.next(res.user);
      }
      // this._socketEventsService.init(res.user);
      this.consultationService.init(res.user);
      this.loggedIn.next(res.user);


      if (this.platform.is('cordova') && window.cordova && window.cordova.plugins) {
        console.log('Flush cookies ');
        //(<any>window).cordova.plugins.CookieManagementPlugin.flush();
      }
      return res.user;
    }));
  }
  // //
  // login() {
  //   return this.http.get<any>(`${this.globalVariableService.getApiPath()}/login-cert`, {}).pipe(map(res => {
  //     console.log('got user data ', res);
  //     // login successful if there's a jwt token in the response
  //     if (res.user && res.user.token) {
  //       // store user details and jwt token in local storage to keep user logged in between page refreshes
  //       localStorage.setItem('currentUser', JSON.stringify(res.user));
  //       this.currentUserSubject.next(res.user);
  //     }
  //     this._socketEventsService.init(res.user);
  //     this.consultationService.init(res.user);
  //     this.loggedIn.next(res.user);

  //     return res.user;
  //   }));
  // }

  logout() {
    // remove user from local storage to log user out
    console.log('LOGOUT')
    localStorage.removeItem('inviteToken');
    localStorage.removeItem('currentConsultation');
    localStorage.removeItem('birthDate');

    this.currentUserSubject.next(null);
    this._socketEventsService.disconnect()

    console.log("COOOKIIIES", document.cookie)

    if (this.platform.is('cordova') && window.cordova && window.cordova.plugins) {
      //(<any>window).cordova.plugins.CookieManagementPlugin.flush();
    }
    return this.http.get(`${this.globalVariableService.getApiPath()}/logout`).toPromise()
  }
  getToken() {
    return this.currentUserSubject.value.token;
  }

  getCurrentUser(token?):Observable<any> {
    const opts = { withCredentials: true };
    

    return this.http.get<any>(`${this.globalVariableService.getApiPath()}/current-user`, opts).pipe(map(res => {

      this.currentUserSubject.next(res.user);

      return res.user
    }))
  }
}
