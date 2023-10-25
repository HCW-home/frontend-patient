import {Component, OnInit} from "@angular/core";
import {ConfigService} from "../config.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {CountrySelectPage} from "../register/country-select/country-select.page";
import {Queue, QueueService} from "../shared/services/queue.service";
import {ConsultationService} from "../shared/services/consultation.service";


@Component({
    selector: "app-register",
    templateUrl: "./request-consultation.page.html",
    styleUrls: ["./request-consultation.page.scss"],
})
export class RequestConsultationPage implements OnInit {
    queues: Queue[] = [];
    genders = [{name: "Male", id: "male"}, {name: "Female", id: "female"}];
    file;

    form: FormGroup = this.fb.group({
        queue: ["", [Validators.required]],
        firstName: ["", [Validators.required]],
        lastName: ["", [Validators.required]],
        phoneNumber: ["", [Validators.required]],
        organization: ["", [Validators.required]],
        country: ["", [Validators.required]],
        age: ["", [Validators.required]],
        sex: ["male", [Validators.required]],
        message: [""],
        attachment: [""]
    });

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private modalController: ModalController,
        private consultationService: ConsultationService,
        private queueService: QueueService,
        public configService: ConfigService) {
    }

    ngOnInit() {
        this.getQueues();
    }

    getQueues() {
        this.queueService.find().subscribe(
            (res) => {
                this.queues = res;
            },
            (err) => {
                console.log(err, "err");
            }
        );
    }

    uploadPhoto(fileChangeEvent) {
        this.file = fileChangeEvent;
    }

    async openCountrySelect() {
        const countrySelect = await this.modalController.create({
            component: CountrySelectPage,
            animated: true
        });
        await countrySelect.present();
        const {data} = await countrySelect.onWillDismiss();
        if (data) {
            if (data.country) {
                const country = data.country;
                this.form.controls.country.setValue(country.name);
            }
        }

    }

    onSubmit() {
        const {value} = this.form;
        this.consultationService.createConsultation({
            firstName: value.firstName,
            lastName: value.lastName,
            queue: value.queue,
            gender: value.sex,
            IMADTeam: "none",
            metadata: {
                'Age': value.age,
                'Country': value.country,
                'Hospital/facility': value.organization
            }
        }).subscribe(res => {
            localStorage.setItem("currentConsultation", res.id);
            this.router.navigate([`/consultation/${res.id}`]);
        }, err => {
            console.log(err);
        });


    }

}
