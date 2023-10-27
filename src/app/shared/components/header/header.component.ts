import { Component, OnInit  } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { AuthService } from '../../../auth/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser;
  constructor(
    public modalController: ModalController,
    private authService: AuthService,
    public platform: Platform,
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
    console.log(this.currentUser, 'currentUser');
  }

  logOut() {
    this.authService.logout();
  }





}
