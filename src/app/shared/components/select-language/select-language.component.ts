import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-select-language",
  templateUrl: "select-language.component.html",
  styleUrls: ["./select-language.component.scss"],
})
export class SelectLanguageComponent {

  constructor(public translate: TranslateService) {}

  changeLang(lang: string) {
    window.localStorage.setItem("hhp-lang", lang);
    this.translate.use(lang);
  }
}
