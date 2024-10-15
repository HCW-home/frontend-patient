import { AuthService } from "./../auth/auth.service";
import { Component, OnInit  } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

import { ConsultationService } from "../consultation.service";
import { ConfigService } from "../config.service";
import { Platform } from "@ionic/angular";
import { App } from '@capacitor/app';

@Component({
  selector: "app-closing-screen",
  templateUrl: "./closing-screen.page.html",
  styleUrls: ["./closing-screen.page.scss"],
})
export class ClosingScreenPage implements OnInit {
  private consultationId;
  public feedbackSubmitted: boolean = false;
  public feedbackSaved: boolean = false;
  public userRating: string = null;
  public userComment: string = "";
  public ratings: string[] = ["good", "ok", "bad"];

  currentUser;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private consultationService: ConsultationService,
    private authService: AuthService,
    public configService: ConfigService,
    public platform: Platform
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
    this.consultationId = this.activeRoute.snapshot.params.id;
  }

  /**
   * Event fired when the user clicks on one of the ratings
   * @param rating The clicked rating
   */
  onRatingClick(rating) {
    if (rating === this.userRating) {
      this.userRating = null;
    } else if (this.ratings.indexOf(rating) !== -1) {
      this.userRating = rating;
    }
  }

  closeApp() {
    localStorage.clear();
    App.exitApp();
  }

  /**
   * Check if the user is running an installed app.
   */

  isNativeApp() {
    return this.platform.is("ios") || this.platform.is("android");
  }

  /**
   * Event fired when the user submits the feedback form
   */
  onFormSubmit() {

    if (this.feedbackSubmitted || !this.userRating == null) {
      return;
    }
    this.feedbackSubmitted = true;
    this.consultationService
      .saveConsultationFeedback(
        this.consultationId,
        this.userRating,
        this.userComment
      )
      .subscribe(
        (res) => {
          if (this.currentUser.role === 'nurse' || this.currentUser.role === 'admin') {
            this.router.navigate([`/dashboard`]);
          } else {
            this.feedbackSaved = true;
          }
        },
        (err) => {
          this.feedbackSubmitted = false;
        }
      );
  }
}
