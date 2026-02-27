import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalVariableService} from './global-variable.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient,
        private globalVariableService: GlobalVariableService,
    ) {}

    updateProfile(userId: string, data: { firstName?: string; lastName?: string; phoneNumber?: string; organization?: string; country?: string; sex?: string }): Observable<any> {
        return this.http.patch<any>(this.globalVariableService.getApiPath() + `/user/${userId}/profile`, data);
    }
}
