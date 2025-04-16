import { GlobalVariableService } from './global-variable.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(
    private http: HttpClient,
    private globalVariableService: GlobalVariableService
  ) { }

  acceptRequest(token, translator) {
    return this.http.post<any>(this.globalVariableService.getApiPath() + '/translator/accept/' + token, translator);
  }
  refuseRequest(token) {
    return this.http.post<any>(this.globalVariableService.getApiPath() + '/translator/refuse/' + token, null);
  }

}
