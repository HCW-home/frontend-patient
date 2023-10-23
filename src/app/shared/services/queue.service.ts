import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {GlobalVariableService} from "../../global-variable.service";

export class Queue {
  id?: string;
  name: string;
}


@Injectable({
  providedIn: 'root',
})
export class QueueService {
  constructor(private http: HttpClient,
              private globalVariableService: GlobalVariableService
  ) {}


  find(): Observable<Queue[]> {
    return this.http.get<Queue[]>(this.globalVariableService.getApiPath() + `/queue`, {headers: {
        'x-access-token': `${JSON.parse(sessionStorage.getItem('currentUser')).token}`,
      }});
  }


}
