import {Injectable} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {supportedLanguages} from "../../i18n/i18n.module";

@Injectable({
    providedIn: "root"
})
export class LanguageService {

    constructor(
        private translate: TranslateService,
    ) {}

    getCurrentLanguage() {
        const userLang = window.localStorage.getItem('hhp-lang') || this.translate.getBrowserLang()
        return supportedLanguages.includes(userLang)
            ? userLang
            : supportedLanguages[0];
    }


}
