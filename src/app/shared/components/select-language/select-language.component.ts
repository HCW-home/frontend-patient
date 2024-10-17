import {Component, EventEmitter, Input, Output} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: "app-select-language",
  templateUrl: "select-language.component.html",
  styleUrls: ["./select-language.component.scss"],
})
export class SelectLanguageComponent {
  @Input('hideIcon') hideIcon = false;
  @Output() selectedLanguageChange = new EventEmitter();
  selectedLanguage: string;

  constructor(public translate: TranslateService,
              private languageService: LanguageService
  ) {
    this.selectedLanguage = this.languageService.getCurrentLanguage();
  }

  changeLang(lang: string) {
    this.selectedLanguage  = lang;
    localStorage.setItem("hhp-lang", lang);
    this.translate.use(lang);
    this.selectedLanguageChange.emit(lang);
  }
}
