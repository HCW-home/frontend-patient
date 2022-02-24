import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { GlobalVariableService } from './global-variable.service';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http: HttpClient,
    private globalVariableService: GlobalVariableService

  ) { }


  getConsultationMessages(id, skip): Observable<any> {
    return this.http.get<any>(this.globalVariableService.getApiPath() + `/message?where={"consultation":"${id}"}&sort=createdAt DESC&limit=20&skip=${skip}`)
      .pipe(map((msgs) => {
        return msgs.reverse();
      }));
  }

  sendMessage(consultationId, text): Observable<any> {
    return this.http.post<any[]>(this.globalVariableService.getApiPath() + `/message`, {
      text,
      consultation: consultationId,
      type: 'text'
    });
  }


}
