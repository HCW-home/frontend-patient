import { Component, OnInit, Input, Directive  } from "@angular/core";
import { ConsultationService } from "../../../consultation.service";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";


@Component({
  selector: "app-close-consultation",
  templateUrl: "./close-consultation.component.html",
  styleUrls: ["./close-consultation.component.scss"],
})
export class CloseConsultationComponent implements OnInit {
  @Input() consultationId;
  constructor(
    private consultationService: ConsultationService,
    private router: Router,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  closeConsultation() {
    console.log("Close consultation now");
    this.consultationService
      .deleteConsultation(this.consultationId)
      .subscribe((res) => {
        localStorage.removeItem("currentConsultation");
        localStorage.removeItem("currentUser");
        this.modalController.dismiss();
        this.router.navigate(["/login"]);
        console.log("Cancellation done");
      });
  }
  dismiss() {
    this.modalController.dismiss();
  }
}
