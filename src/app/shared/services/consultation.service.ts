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

  postFile(file: File, consultationId): Observable<any> {
    const endpoint =
        this.globalVariableService.getApiPath() +  `/consultation/${consultationId}/upload-file`;
    const formData: FormData = new FormData();
    formData.append("attachment", file, file.name);
    return this.http.post(endpoint, formData, {
      headers: {
        "mime-type": file.type,
        fileName: encodeURIComponent(file.name),
      },
    });
  }

}

