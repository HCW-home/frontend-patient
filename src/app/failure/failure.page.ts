import { Component, OnInit  } from '@angular/core';
import { ConfigService } from '../config.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-failure',
  templateUrl: './failure.page.html',
  styleUrls: ['./failure.page.scss'],
})
export class FailurePage implements OnInit {

  constructor(
      private router: Router,
      public configService: ConfigService) { }

  ngOnInit() {
  }

  backToLogin() {
    this.router.navigate(["/requester"])
  }

}
