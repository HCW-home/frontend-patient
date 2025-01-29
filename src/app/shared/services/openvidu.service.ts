import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, first } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GlobalVariableService } from '../../global-variable.service';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class OpenViduService {



  constructor(private http: HttpClient,
    private globalVariableService: GlobalVariableService
  ) { }

  getTestToken(): Promise<any> {
    return new Promise((resolve, reject) => {


      return this.http.get<any>(this.globalVariableService.getApiPath() + '/consultation/test-call')
        .pipe(
          catchError(error => {
            error.status === 409 ? resolve(null) : reject(error);
            return observableThrowError(error);
          })
        )
        .subscribe(response => {
          resolve(response);
        });
    });
  }

  getToken(mySessionId: string): Promise<any> {
    return this.createSessionAndGetToken(mySessionId);
  }

  createSessionAndGetToken(sessionId: string): Promise<any> {
    return new Promise((resolve, reject) => {

      const body = JSON.stringify({ customSessionId: sessionId });
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',

        })
      };
      return this.http.post<any>(this.globalVariableService.getApiPath() + '/consultation/' + sessionId + '/call', body, options)
        .pipe(
          first(),
          catchError(error => {
            error.status === 409 ? resolve(sessionId) : reject(error);
            return observableThrowError(error);
          })
        )
        .subscribe(response => {
          resolve(response);
        });
    });
  }
  rejectCall(consultation: string, message): Promise<any> {
    return new Promise((resolve, reject) => {

      const body = JSON.stringify({});
      const options = {

        headers: new HttpHeaders({
          'Content-Type': 'application/json',

        })
      };
      return this.http.post<any>(this.globalVariableService.getApiPath() + '/consultation/' + consultation + '/' + message + '/reject-call', {}, options)
        .pipe(
          first()
        )
        .subscribe(response => {
          resolve(null);
        });
    });
  }

  acceptCall(consultation: string, message): Promise<any> {
    return new Promise((resolve, reject) => {

      const body = JSON.stringify({});
      const options = {

        headers: new HttpHeaders({
          'Content-Type': 'application/json',

        })
      };
      return this.http.post<any>(this.globalVariableService.getApiPath() + '/consultation/' + consultation + '/' + message + '/accept-call', {}, options)
        .pipe(
          first()
        )
        .subscribe(response => {
          resolve(null);
        });
    });
  }



}
