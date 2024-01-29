import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from "@angular/common";
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.page.html',
  styleUrls: ['./cgu.page.scss'],
})
export class CguPage implements OnInit {
  error: boolean = false;
  selectedCountry: string = 'Any';
  selectedTermName = 'terms.md'
  countries = [
      'Any','France', 'Armenia'
  ];

  constructor(
      private locationStrategy: LocationStrategy,
      public configService: ConfigService) { }

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
      this.selectedTermName = 'terms.md';
    } else {
      this.selectedTermName = `terms.${country}.md`;
    }
  }

}
