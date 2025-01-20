import { GlobalVariableService } from './global-variable.service';
import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  constructor(
    private http: HttpClient,
    private globalVariableService: GlobalVariableService
  ) { }

  getInviteFromToken(token) {
    return this.http.get<any>(this.globalVariableService.getApiPath() + '/invite/by-token/' + token);
  }

  getAcknowledgementStatus(token: string) {
    return this.http.get<{requiresAcknowledgment: boolean}>(this.globalVariableService.getApiPath() + '/invite/status/' + token);
  }

  acknowledgeInvite(body) {
    return this.http.post(this.globalVariableService.getApiPath() + '/invite/acknowledge' , body);
  }
}
