import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ConfigService } from '../services/config.service';

export const DEFAULT_LANGUAGES = [
  'en', 'fr', 'es', 'ar', 'de', 'ta', 'ti', 'fa', 'ru', 'it', 'uk', 'hy'
];

export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule]
})
export class I18nModule {
  constructor(
      private translate: TranslateService,
      private configService: ConfigService
  ) {
    this.initTranslation();
  }

  private initTranslation(): void {
    this.configService.getConfig().subscribe({
      next: (appConfig) => {
        const dynamicLanguages = appConfig?.patientLanguages?.length
            ? appConfig.patientLanguages
            : DEFAULT_LANGUAGES;

        this.translate.addLangs(dynamicLanguages);

        const savedLang = localStorage.getItem('hhp-lang');
        const browserLang = this.translate.getBrowserLang();
        const defaultLang = savedLang && dynamicLanguages.includes(savedLang)
            ? savedLang
            : dynamicLanguages.includes(browserLang)
                ? browserLang
                : dynamicLanguages[0];

        this.translate.setDefaultLang(defaultLang);
        this.translate.use(defaultLang);
      },
      error: () => {
        this.translate.addLangs(DEFAULT_LANGUAGES);
        this.translate.setDefaultLang(DEFAULT_LANGUAGES[0]);
        this.translate.use(DEFAULT_LANGUAGES[0]);
      }
    });
  }
}
