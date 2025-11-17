import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import { GlobalVariableService } from "./global-variable.service";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {Title} from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  public configSub: Subject<any> = new Subject();
  public config;
  public api: string;
  constructor(
    private http: HttpClient,
    private titleService: Title,
    private globalVariableService: GlobalVariableService
  ) {}

    getCountries() {
        return this.http.get<string[]>('assets/terms/countries.json');
    }


    getConfig() {
        return this.http.get<any>(this.globalVariableService.getApiPath() +  '/config').pipe(
            tap(config => {
                this.config = config;
                this.configSub.next(config);

                if (config.branding) {
                    this.titleService.setTitle(config.branding);
                }

                if (config.patientAppPrimaryColor) {
                    this.updatePrimaryColor(config.patientAppPrimaryColor);
                }

                if (config.matomoUrl && config.matomoId) {
                    this.initializeMatomo(config.matomoUrl, config.matomoId);
                }

                if (config.accessibilityMode && config.accessibilityMode !== 'false') {
                    document.documentElement.setAttribute('data-theme', 'accessibility');
                }

                this.globalVariableService.serverError = false;
            }),
            catchError(error => {
                return of(null);
            })
        );
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

    checkTermsFileExists(fileName: string) {
        return this.http.get(`assets/terms/${fileName}`, { responseType: 'text' }).pipe(
            map(() => new Observable()),
            catchError(() => of(false))
        );
    }

    shouldHideCallerName(userRole: string): boolean {
        return this.config?.hideCallerName && userRole !== 'admin' && userRole !== 'nurse';
    }

}
