import {Component, OnInit} from "@angular/core";
import {ConfigService} from "../config.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {CountrySelectPage} from "../register/country-select/country-select.page";
import {Queue, QueueService} from "../shared/services/queue.service";
import {ConsultationService} from "../shared/services/consultation.service";
import {ValidationService} from "../shared/services/validation.service";
import {MessageService} from "../message.service";
import {forkJoin, of} from "rxjs";
import {catchError, finalize, switchMap} from "rxjs/operators";


@Component({
    selector: "app-request-consultation",
    templateUrl: "./request-consultation.page.html",
    styleUrls: ["./request-consultation.page.scss"],
})
export class RequestConsultationPage implements OnInit {
    queues: Queue[] = [];
    genders = [{name: "Male", id: "male"}, {name: "Female", id: "female"}];
    file;
    loading = false;

    form: FormGroup = this.fb.group({
        queue: ["", [Validators.required]],
        firstName: ["", [Validators.required]],
        lastName: ["", [Validators.required]],
        sex: ["", [Validators.required]],
        organization: [""],
        country: [""],
        age: [""],
        message: [""],
        attachment: [""]
    });

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private modalController: ModalController,
        private consultationService: ConsultationService,
        private queueService: QueueService,
        public validationService: ValidationService,
        private messageService: MessageService,
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
        this.loading = true;
        const { value } = this.form;
        this.consultationService.createConsultation({
            firstName: value.firstName,
            lastName: value.lastName,
            queue: value.queue,
            gender: value.sex,
            IMADTeam: "none",
            metadata: {
                "Age": value.age,
                "Country": value.country,
                "Hospital/facility": value.organization
            }
        }).pipe(
            switchMap(res => {
                const actions = [];
                if (value.message) {
                    actions.push(this.messageService.sendMessage(res.id, value.message));
                }
                if (this.file) {
                    actions.push(this.consultationService.postFile(this.file, res.id));
                }

                if (actions.length === 0) {
                    return of(res);
                }

                return forkJoin(actions).pipe(
                    switchMap(() => of(res)),
                    catchError(err => {
                        console.log(err, 'err');
                        throw err;
                    })
                );
            }),
            catchError(err => {
                console.log(err);
                throw err;
            }),
            finalize(() => {
                this.loading = false;
            })
        ).subscribe(res => {
            localStorage.setItem("currentConsultation", res.id);
            this.router.navigate([`/consultation/${res.id}`]);
        }, err => {
            console.log(err);
        });
    }

    backToDashboard() {
        this.router.navigate([`/dashboard`]);
    }

    removeFile(event: Event) {
        event.stopPropagation();
        this.file = null;
    }

    onFileListener(event: any): void {
        this.file = event.target.files[0];
    }

    // onFileDropped(event: CdkDragDrop<string[]>) {
    //     console.log('stexaaaa');
    //     let files = event.item.data;
    // }

    onFileDropped(files: FileList): void {
        this.onFileListener({ target: { files } });
    }


    getErrorMessage(formField: string) {
        switch (formField) {
            case "firstName":
                const nameErrors = this.form.controls.firstName.errors;
                if (nameErrors.required) {
                    return "Firstname is required";
                }
                break;
            case "lastName":
                const surnameErrors = this.form.controls.lastName.errors;
                if (surnameErrors.required) {
                    return "Lastname is required";
                }
                break;
            case "queue":
                const queueErrors = this.form.controls.queue.errors;
                if (queueErrors.required) {
                    return "Expert area is required";
                }
                break;
            case "sex":
                const sexErrors = this.form.controls.sex.errors;
                if (sexErrors.required) {
                    return "Gender is required";
                }
                break;
        }
    }

}
