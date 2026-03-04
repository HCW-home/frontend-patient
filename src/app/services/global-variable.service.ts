import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { safeGetItem, safeSetItem, safeRemoveItem } from './safe-storage';
@Injectable({
  providedIn: 'root'
})

export class GlobalVariableService {
  private hostBehaviorSubject: BehaviorSubject<string>;

  public host: Observable<string>;
  public serverError = false;
  constructor(public platform: Platform) {
    if(!this.platform.is('mobileweb') && ( this.platform.is('ios') || this.platform.is('android'))){
      this.resetHost()
    }
    let host = this.getHost();
    if (this.hostBehaviorSubject && this.hostBehaviorSubject.getValue() != host) {
      this.hostBehaviorSubject.next(host)
    }
    else {
      this.hostBehaviorSubject = new BehaviorSubject<string>(host);
    }

    this.host = this.hostBehaviorSubject.asObservable()
  }

  public resetHost(){
    safeRemoveItem("host");
  }
  public getHost() {

    let host = safeGetItem("host");

    if ( this.platform.is('ios') || this.platform.is('android')) {

        if (!host) {
          host = environment.host;
        }

        safeSetItem('host', host);
    
      } else {
        host = environment.host
      }

      return host;
  }

  public getHostValue() {
    return this.hostBehaviorSubject.getValue();
  }

  public getApiPath() {
    //prevent double slash -> https://app.hug-at-home.ch//api/v1 ->  https://app.hug-at-home.ch/api/v1
    let apiUrl = (this.hostBehaviorSubject.getValue() + environment.api).replace(/([^:]\/)\/+/g, "$1")
    apiUrl = apiUrl.replace(/(\:)\:/, "$1")
    return apiUrl ;
  }
}
