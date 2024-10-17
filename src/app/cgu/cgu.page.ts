import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from "@angular/common";
import { ConfigService } from '../config.service';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.page.html',
  styleUrls: ['./cgu.page.scss'],
})
export class CguPage implements OnInit {
  error = false;
  countryError = false;
  selectedCountry = 'Any';
  countries = [];
  currentLang: string = 'en';
  selectedTermName = 'terms.en.md';

  constructor(
      public configService: ConfigService,
      private translate: TranslateService,
      private locationStrategy: LocationStrategy,
      ) {
  }

  ngOnInit() {
    this.currentLang = this.translate.currentLang || 'en';
    this.getCountries();
  }

  onLanguageChange(language: string): void {
    this.currentLang = language;
    this.changeCountry(this.selectedCountry);
  }

  getCountries() {
    this.configService.getCountries().subscribe(
        res => {
          if (res) {
            res.unshift('Any');
            this.changeCountry('Any');
            this.countries = res;
            this.countryError = false;
          }
        },
        error => {
          this.countryError = true;
          this.selectedCountry = '';
          this.changeCountry('');
            console.log(this.countryError);
        }
    );
  }

  goBack() {
    this.locationStrategy.historyGo(-1);
  }

  changeCountry(country: string) {
    this.selectedCountry = country;
    const fallbackTerms =  !country || country === 'Any' ? `terms.md` : `terms.${country}.md`;

    const specificTerms =  !country || country === 'Any' ? `terms.${this.currentLang}.md` :  `terms.${country}.${this.currentLang}.md`;

    this.error = false;
    this.configService.checkTermsFileExists(specificTerms).subscribe(
        exists => {
          if (exists) {
            this.selectedTermName = specificTerms;
            this.error = false;
          } else {
            this.configService.checkTermsFileExists(fallbackTerms).subscribe(
                fallbackExists => {
                  if (fallbackExists) {
                    this.selectedTermName = fallbackTerms;
                    this.error = false;
                  } else {
                    this.error = true;
                  }
                },
                error => {
                  this.error = true;
                }
            );
          }
        },
        error => {
          this.error = true;
        }
    );
  }

}
