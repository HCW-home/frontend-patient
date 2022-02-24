import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})

//manage variable that are used in differents views
export class GlobalVariableService {
  private hostBehaviorSubject: BehaviorSubject<string>;

  public host: Observable<string>;
  public serverError = false;
  constructor(public platform: Platform) {
    if(!(platform.is('android') || platform.is('ios'))){
      this.resetHost()
      console.log("reset host url");
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
    localStorage.removeItem("host");
  }
  public getHost() {
    let host = localStorage.getItem("host");

    if (!host) {
      host = environment.host;
    }
    console.log("HOST IN INIT" + host)

    localStorage.setItem('host', host);

    return host;

  }
  public getHostObservable() {
    return this.hostBehaviorSubject.asObservable();
  }

  public updateHost(host) {
    console.log("updateHost host ", host)
    localStorage.setItem('host', host);
    this.hostBehaviorSubject.next(host);
  }

  public getHostValue() {
    console.log("getting host value", this.hostBehaviorSubject.getValue())
    return this.hostBehaviorSubject.getValue();
  }

  public getApiPath() {
    //prevent double slash -> https://app.hug-at-home.ch//api/v1 ->  https://app.hug-at-home.ch/api/v1
    let apiUrl = (this.hostBehaviorSubject.getValue() + environment.api).replace(/([^:]\/)\/+/g, "$1")
    apiUrl = apiUrl.replace(/(\:)\:/, "$1")
    console.log("getting api path value", apiUrl);
    return apiUrl ;
  }
}