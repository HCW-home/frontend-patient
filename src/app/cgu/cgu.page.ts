import { Component, OnInit, Directive  } from '@angular/core';
import { ConfigService } from '../config.service';
import {LocationStrategy} from "@angular/common";


@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.page.html',
  styleUrls: ['./cgu.page.scss'],
})
export class CguPage implements OnInit {

  constructor(
      private locationStrategy: LocationStrategy,
      public configService: ConfigService) { }

  ngOnInit() {
  }

  goBack() {
    this.locationStrategy.historyGo(-1);
  }

}
