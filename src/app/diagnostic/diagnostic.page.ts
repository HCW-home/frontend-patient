import { Component, OnInit, Directive  } from '@angular/core';

@Directive()
@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.page.html',
  styleUrls: ['./diagnostic.page.scss'],
})
export class DiagnosticPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
