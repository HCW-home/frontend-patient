import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalVariableService } from '../../global-variable.service';
@Injectable({
    providedIn: 'root'
})
export class NurseService {



    constructor(private http: HttpClient,
                private globalVariableService: GlobalVariableService
    ) { }

    registerNurse(body) {
        return this.http.post<any>(this.globalVariableService.getApiPath() + '/registerNurse', body);
    }

}
