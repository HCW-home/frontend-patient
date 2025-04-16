import { Component, OnInit  } from '@angular/core';
import { ConfigService } from '../services/config.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(
      private router: Router,
      public configService: ConfigService) { }

  ngOnInit() {
  }

  backToLogin() {
    this.router.navigate(["/requester"])
  }

}
