import { Component, OnInit, Directive  } from '@angular/core';

@Directive()
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
