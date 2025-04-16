import {Component, NgZone, OnInit} from "@angular/core";
import { AuthService } from '../../../auth/auth.service';
import {Router} from "@angular/router";
import {ConfigService} from "../../../services/config.service";

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
    private zone: NgZone,
    public configService: ConfigService,
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

  toDoctor() {
    if (this.configService.config?.nurseExternalLink) {
      window.open(this.configService.config.nurseExternalLink, '_blank')
    }
  }

  requestConsultation() {
    this.router.navigate(["/request-consultation"]);
  }


  toggleLogout() {
    this.zone.run(() => {
      this.logoutToggle = !this.logoutToggle;
    });
  }

}
