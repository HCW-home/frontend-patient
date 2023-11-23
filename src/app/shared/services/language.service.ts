import {Injectable} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
    providedIn: "root"
})
export class LanguageService {

    public defaultLanguage = 'en';
    public supportedLanguages = [
        'en',
        'fr',
        'es',
        'ar',
        'de',
        'ar',
        'ta',
        'ti',
        'fa',
        'ru',
        'it'
    ]
    constructor(
        private translate: TranslateService,
    ) {}

    getCurrentLanguage() {
        const userLang = localStorage.getItem('hhp-lang') || this.translate.getBrowserLang();
        return this.supportedLanguages.includes(userLang) ? userLang : this.defaultLanguage;
    }


}
