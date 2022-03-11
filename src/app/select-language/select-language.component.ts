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

  openDropdown(event?) {
    if (event) {
      event.stopPropagation();
    }
    this.opened = !this.opened;
  }

  changeLang(event, lang) {
    event.stopPropagation();
    this.opened = false;
    window.localStorage.setItem("hhp-lang", lang);
    this.translate.use(lang);
  }
}
