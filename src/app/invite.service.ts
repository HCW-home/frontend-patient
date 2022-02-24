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
}
