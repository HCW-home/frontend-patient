import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

export const DEFAULT_LANGUAGES = [
  "en",
  "fr",
  "es",
  "ar",
  "de",
  "ta",
  "ti",
  "fa",
  "ru",
  "it",
  "uk",
  "hy",
];

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  constructor(private translate: TranslateService) {}

  getCurrentLanguage() {
    const userLang =
      window.localStorage.getItem("hhp-lang") ||
      this.translate.getBrowserLang();
    return DEFAULT_LANGUAGES.includes(userLang)
      ? userLang
      : DEFAULT_LANGUAGES[0];
  }

  switchLanguage(lang: string) {
    this.translate.use(lang).subscribe(() => {
      localStorage.setItem("hhp-lang", lang);
      const rtlLanguages = ["ar", "fa", "he", "ur"];
      const dir = rtlLanguages.includes(lang) ? "rtl" : "ltr";

      document.documentElement.setAttribute("dir", dir);
      document.documentElement.setAttribute("lang", lang);
    });
    this.translate.setDefaultLang("en");
  }
}
