import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [TranslateModule]
})

export class I18nModule {

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
  constructor(translate: TranslateService) {
    translate.addLangs(this.supportedLanguages);
    const userLang = window.localStorage.getItem('hhp-lang') || translate.getBrowserLang();
    translate.use(this.supportedLanguages.includes(userLang) ? userLang : this.defaultLanguage);
  }

}

export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

