import {Component, NgZone, OnInit} from "@angular/core";
import { AuthService } from '../../../auth/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  logoutToggle = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
  }

  logOut(hard = false) {
    this.authService.logOutNurse(hard);
  }

  goToProfile() {
    this.router.navigate([`/profile`]);
  }

  toggleLogout() {
    this.zone.run(() => {
      this.logoutToggle = !this.logoutToggle;
    });
  }

}
