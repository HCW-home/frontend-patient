import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-select-language",
  templateUrl: "select-language.component.html",
  styleUrls: ["./select-language.component.scss"],
})
export class SelectLanguageComponent {
  selectedLanguage: string
  constructor(public translate: TranslateService) {
    this.selectedLanguage = localStorage.getItem("hhp-lang") || 'en';
  }

  changeLang(lang: string) {
    this.selectedLanguage  = lang;
    localStorage.setItem("hhp-lang", lang);
    this.translate.use(lang);
  }
}
