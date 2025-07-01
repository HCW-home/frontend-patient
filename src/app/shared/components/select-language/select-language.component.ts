import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import {DEFAULT_LANGUAGES, LanguageService} from "../../services/language.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent implements OnInit, OnDestroy {
  @Input() hideIcon = false;
  @Output() selectedLanguageChange = new EventEmitter<string>();

  selectedLanguage: string;
  supportedLanguages = DEFAULT_LANGUAGES;

  private langSub: Subscription;

  constructor(
      private translate: TranslateService,
      private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.selectedLanguage = this.languageService.getCurrentLanguage();

    this.langSub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.selectedLanguage = event.lang;
    });
  }

  changeLang(lang: string): void {
    if (lang === this.selectedLanguage) return;
    this.languageService.switchLanguage(lang);
    this.selectedLanguageChange.emit(lang);
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }
}
