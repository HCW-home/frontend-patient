import { Platform } from '@ionic/angular';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocketEventsService } from '../services/socket-events.service';
import { ConsultationService } from '../services/consultation.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { GlobalVariableService } from '../services/global-variable.service';
import {ConfigService} from "../services/config.service";
import {StorageService} from "../services/storage.service";

declare let window: any;

@Injectable({ providedIn: 'root' })
export class AuthService {
  public currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private loggedIn: Subject<User> = new Subject();
  private inviteToken: Subject<string> = new Subject();
  public currentUser: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private platform: Platform,
    public configService: ConfigService,
    private storageService: StorageService,
    private consultationService: ConsultationService,
    private _socketEventsService: SocketEventsService,
    private globalVariableService: GlobalVariableService,

  ) {}

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
      // login successful if there's a jwt token in the response
      if (res.user && res.user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.currentUserSubject.next(res.user);
      }
      // this._socketEventsService.init(res.user);
      this.consultationService.init(res.user);
      this.loggedIn.next(res.user);


      if (this.platform.is('cordova') && window.cordova && window.cordova.plugins) {
      }
      return res.user;
    }));
  }

  refreshTokens() {
    const currentUser = this.currentUserValue;
    const refreshToken = currentUser?.refreshToken;
    return this.http.post<any>(`${this.globalVariableService.getApiPath()}/refresh-token`,{ refreshToken });
  }

  verifyRefreshToken() {
    const currentUser = this.currentUserValue;
    const refreshToken = currentUser?.refreshToken;
    return this.http.post<any>(`${this.globalVariableService.getApiPath()}/verify-refresh-token`,{ refreshToken });
  }

  logOutNurse(hard = false) {
    sessionStorage.clear();
    this.storageService.clear();
    this.currentUserSubject.next(null);
    this._socketEventsService.disconnect();



    this.http.get(`${this.globalVariableService.getApiPath()}/logout`).subscribe(r => {
      if (hard) {
        if (this.configService.config.method === "openid") {
          window.location.href = this.configService.config.openIdLogoutUri;
        } else {
          this.router.navigate(["/login"]);
        }
      } else {
        this.router.navigate(["/login"]);
      }
    }, err => {
      this.router.navigate(["/login"]);
    })
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('inviteToken');
    localStorage.removeItem('currentConsultation');
    localStorage.removeItem('birthDate');

    this.currentUserSubject.next(null);
    this._socketEventsService.disconnect()


    if (this.platform.is('cordova') && window.cordova && window.cordova.plugins) {
      //(<any>window).cordova.plugins.CookieManagementPlugin.flush();
    }
    return this.http.get(`${this.globalVariableService.getApiPath()}/logout`).toPromise()
  }

  getCurrentUser():Observable<any> {
    const headers = {};
    const token = sessionStorage.getItem('nurseToken')
    if (token) {
      headers['x-access-token'] = token;
    }
    const opts = { withCredentials: true, headers };

    return this.http.get<any>(`${this.globalVariableService.getApiPath()}/current-user`, opts).pipe(map(res => {

      this.currentUserSubject.next(res.user);

      return res.user
    }))
  }

  login(token) {
    const headers = {};
    if (token) {
      headers['x-access-token'] = token;
    }
    return this.http.get<any>(`${this.globalVariableService.getApiPath()}/current-user`, { headers })
        .pipe(map(res => {
          if (res.user && res.user.token) {
            sessionStorage.setItem('currentUser', JSON.stringify(res.user));
            sessionStorage.setItem('nurseToken', res.user.token);
            this.currentUserSubject.next(res.user);
            return res.user;
          }
        }));
  }
}
