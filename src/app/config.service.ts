import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { GlobalVariableService } from "./global-variable.service";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  public configSub: Subject<any> = new Subject();
  public config;
  public api: string;
  constructor(
    private http: HttpClient,
    private globalVariableService: GlobalVariableService
  ) {}

  getConfig() {
    this.globalVariableService.host.subscribe(() => {
      console.log(
        "host updated config service",
        this.globalVariableService.getApiPath()
      );
      return this.http
        .get<any>(`${this.globalVariableService.getApiPath()}/config`)
        .toPromise()
        .then((config) => {
          console.log("got config", config);
          this.config = config;
          this.configSub.next(config);
          this.globalVariableService.serverError = false;
          if (config.accessibilityMode) {
            document.documentElement.setAttribute(
              "data-theme",
              "accessibility"
            );
          }
        })
        .catch((err) => {
          this.globalVariableService.serverError = true;
        });
    });
  }
}
