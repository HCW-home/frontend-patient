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

    getCountries() {
        return this.http.get<string[]>('assets/terms/countries.json');
    }

  getConfig() {
    this.globalVariableService.host.subscribe(() => {
      return this.http
        .get<any>(`${this.globalVariableService.getApiPath()}/config`)
        .toPromise()
        .then((config) => {
          this.config = config;
          this.configSub.next(config);
          if (config.patientAppPrimaryColor) {
              this.updatePrimaryColor(config.patientAppPrimaryColor);
          }
            if (config.matomoUrl && config.matomoId) {
                this.initializeMatomo(config.matomoUrl, config.matomoId);
            }
          this.globalVariableService.serverError = false;
          if (
            config.accessibilityMode &&
            config.accessibilityMode !== "false"
          ) {
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

    updatePrimaryColor(color: string) {
        document.documentElement.style.setProperty('--ion-color-primary', color);
    }


    //Matomo
    initializeMatomo(url: string, siteId: string): void {
        // @ts-ignore
        var _paq = window._paq = window._paq || [];
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
            var u = url;
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', siteId]);
            var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
            g.async = true; g.src = u+'matomo.js'; s.parentNode.insertBefore(g, s);
        })();
    }

}
