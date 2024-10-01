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
  error: boolean = false;
  selectedCountry: string = 'Any';
  selectedTermName = 'terms.en.md'
  countries = [];
  currentLang: string = 'en';

  constructor(
      public configService: ConfigService,
      private translate: TranslateService,
      private locationStrategy: LocationStrategy,
      ) {
    this.currentLang = this.translate.currentLang || 'en';
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.configService.getCountries().subscribe((res) => {
      if (res) {
        res.unshift('Any')
       this.countries = res;
      }
    }, error => {
      this.error = true;
    })
  }

  goBack() {
    this.locationStrategy.historyGo(-1);
  }

  changeCountry(country: string) {
    this.selectedCountry  = country;
    if (country === 'Any') {
       this.selectedTermName = `terms.${this.currentLang}.md`;
    } else {
       this.selectedTermName = `terms.${country}.${this.currentLang}.md`;
    }
  }

}
