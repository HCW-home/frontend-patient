import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-select-language",
  templateUrl: "select-language.component.html",
  styleUrls: ["./select-language.component.scss"],
})
export class SelectLanguageComponent {
  opened = false;

  constructor(public translate: TranslateService) {}

  changeLang(lang) {
    console.log("LANGGAGGE", lang)
    window.localStorage.setItem("hhp-lang", lang);
    this.translate.use(lang);
  }
}
