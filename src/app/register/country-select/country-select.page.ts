import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CountryJson} from "../../../environments";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.page.html',
  styleUrls: ['./country-select.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CountrySelectPage implements OnInit {
  filteredCountries = [];

  countries = CountryJson;
  searchingTimeout;

  constructor(
      public modalController: ModalController,
  ) {

  }

  ngOnInit() {
    this.filteredCountries = [...this.countries];
  }

  updateCountries(ev: any) {
    if (this.searchingTimeout) {
      clearTimeout(this.searchingTimeout);
    }
    this.searchingTimeout = setTimeout(() => {
      const val = ev.target.value;
      if (val && val.trim() !== '') {
        this.filteredCountries = this.countries.filter((country) => {
          return country.name.toLowerCase().includes(val.toLowerCase()) ||
              country.dialCode.toLowerCase().includes(val.toLowerCase());
        });
      } else {
        this.filteredCountries = [...this.countries];
      }
    }, 300);
  }

  selectCountry(country) {
    this.modalController.dismiss({ country });
  }






}

