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
    return this.http.post<any[]>(this.globalVariableService.getApiPath() + `/consultation`, consultation)
  }

  getConsultations(): Observable<any> {
    return this.http.get<any[]>(this.globalVariableService.getApiPath() + `/consultations-overview`)
  }

}

