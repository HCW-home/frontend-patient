import {Component, OnInit} from "@angular/core";
import {ConfigService} from "../services/config.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {CountrySelectPage} from "../register/country-select/country-select.page";
import {Queue, QueueService} from "../shared/services/queue.service";
import {ConsultationService} from "../shared/services/consultation.service";
import {ValidationService} from "../shared/services/validation.service";
import {MessageService} from "../services/message.service";
import {forkJoin, of} from "rxjs";
import {catchError, finalize, switchMap} from "rxjs/operators";
import {TranslateService} from "@ngx-translate/core";


@Component({
    selector: "app-request-consultation",
    templateUrl: "./request-consultation.page.html",
    styleUrls: ["./request-consultation.page.scss"],
})
export class RequestConsultationPage implements OnInit {
    queues: Queue[] = [];
    genders = [{name: "Male", id: "male"}, {name: "Female", id: "female"}];
    files: File[] = [];
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
        private translate: TranslateService,
        public configService: ConfigService) {
    }

    ngOnInit() {
        this.files = [];
        this.getQueues();
        this.addDynamicFields();
    }

    addDynamicFields() {
        if (this.configService.config?.formRequesterMeta?.length) {
            this.configService.config.formRequesterMeta.forEach((field: string) => {
                if (!this.form.contains(field)) {
                    this.form.addControl(
                        field,
                        new FormControl('')
                    );
                }
            });
        }
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
        const metadata = {
            "Age": value.age,
            "Country": value.country,
        }
        if (this.configService.config?.formRequesterMeta?.length) {
            this.configService.config.formRequesterMeta.forEach(field => {
                const control = this.form.get(field);
                if (control) {
                    metadata[field] = control.value;
                }
            });
        }

        this.consultationService.createConsultation({
            firstName: value.firstName,
            lastName: value.lastName,
            queue: value.queue,
            gender: value.sex,
            IMADTeam: "none",
            metadata
        }).pipe(
            switchMap(res => {
                const actions = [];
                if (value.message) {
                    actions.push(this.messageService.sendMessage(res.id, value.message));
                }
                if (this.files.length) {
                    this.files.forEach(file => {
                        actions.push(this.consultationService.postFile(file, res.id));
                    })
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

    removeFile(index: number): void {
        this.files.splice(index, 1);
    }

    onFileListener(event: any): void {
        const selectedFiles: FileList = event.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
            this.files.push(selectedFiles[i]);
        }
    }

    onFileDropped(fileList: FileList): void {
        this.onFileListener({ target: { files: fileList } });
    }

    getErrorMessage(formField: string) {
        switch (formField) {
            case "firstName":
                const nameErrors = this.form.controls.firstName.errors;
                if (nameErrors.required) {
                    return this.translate.instant("request_consultation.patient_firstname_required");
                }
                break;
            case "lastName":
                const surnameErrors = this.form.controls.lastName.errors;
                if (surnameErrors.required) {
                    return this.translate.instant("request_consultation.patient_lastname_required");
                }
                break;
            case "queue":
                const queueErrors = this.form.controls.queue.errors;
                if (queueErrors.required) {
                    return this.translate.instant("request_consultation.expert_area_required");
                }
                break;
            case "sex":
                const sexErrors = this.form.controls.sex.errors;
                if (sexErrors.required) {
                    return this.translate.instant("request_consultation.gender_required");
                }
                break;
        }
    }

}
