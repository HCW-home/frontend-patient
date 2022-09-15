import { Component, OnInit, Directive  } from '@angular/core';


@Directive()
@Component({
  selector: 'app-incomming-call',
  templateUrl: './incomming-call.page.html',
  styleUrls: ['./incomming-call.page.scss'],
})
export class IncommingCallPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
