import { Component, OnInit, Directive  } from '@angular/core';

@Directive()
@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
