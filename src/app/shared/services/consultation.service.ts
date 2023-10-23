import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {GlobalVariableService} from "../../global-variable.service";
@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(
    private http: HttpClient,
    private globalVariableService: GlobalVariableService
  ) {

  }


  createConsultation(consultation): Observable<any> {
    return this.http.post<any[]>(this.globalVariableService.getApiPath() + `/consultation`, consultation, {headers: {
        'x-access-token': `${JSON.parse(sessionStorage.getItem('currentUser')).token}`,
      }})
  }


}

