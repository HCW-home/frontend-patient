import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GlobalVariableService} from "../../global-variable.service";

@Injectable({
    providedIn: "root"
})
export class NurseService {
    constructor(private http: HttpClient,
                private globalVariableService: GlobalVariableService
    ) {}

    checkMarkdownExists(markdownUrl: string) {
        return this.http.get(markdownUrl, { responseType: 'text' })
    }

    registerNurse(body) {
        return this.http.post<any>(this.globalVariableService.getApiPath() + "/register-nurse", body);
    }

}
