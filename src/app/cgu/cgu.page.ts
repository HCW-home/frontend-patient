import { Component, OnInit, Directive  } from '@angular/core';
import { ConfigService } from '../config.service';


@Directive()
@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.page.html',
  styleUrls: ['./cgu.page.scss'],
})
export class CguPage implements OnInit {

  constructor( public configService: ConfigService) { }

  ngOnInit() {
  }

}
