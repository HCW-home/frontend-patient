import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Platform} from "@ionic/angular";
import {ConsultationService} from "../../../services/consultation.service";
import {AuthService} from "../../../auth/auth.service";
import {ConfigService} from "../../../services/config.service";

@Component({
    selector: "app-feedback",
    templateUrl: "./feedback.component.html",
    styleUrls: ["./feedback.component.scss"]
})
export class FeedbackComponent implements OnInit {
    @Input() consultation;
    @Output() updatedConsultation = new EventEmitter<FileList>();
    private consultationId;
    public feedbackSubmitted: boolean = false;
    public feedbackSaved: boolean = false;
    public userRating: string = null;
    public userComment: string = "";
    public ratings: string[] = ["good", "ok", "bad"];
    currentUser;

    constructor(
        private consultationService: ConsultationService,
        private authService: AuthService,
        public configService: ConfigService,
        public platform: Platform
    ) {
    }

    ngOnInit() {
        this.currentUser = this.authService.currentUserValue;
        this.consultationId = this.consultation._id;
        if (this.consultation.consultation.patientComment || this.consultation.consultation.patientRating) {
            this.feedbackSaved = true;
        }
    }

    onRatingClick(rating) {
        if (rating === this.userRating) {
            this.userRating = null;
        } else if (this.ratings.indexOf(rating) !== -1) {
            this.userRating = rating;
        }
    }


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
                    this.feedbackSaved = true;
                    if (this.userRating || this.userComment) {
                        this.updatedConsultation.emit();
                    }
                },
                (err) => {
                    this.feedbackSubmitted = false;
                }
            );
    }
}
