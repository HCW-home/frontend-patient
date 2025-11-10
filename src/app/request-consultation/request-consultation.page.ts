import {Component, OnInit} from "@angular/core";
import {ConfigService} from "../services/config.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ModalController, ToastController} from "@ionic/angular";
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
        private toastController: ToastController,
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
                    actions.push(this.messageService.sendMessage(res.id, value.message).pipe(
                        catchError(err => {
                            console.log('Message send error:', err);
                            return of({ error: true, type: 'message' });
                        })
                    ));
                }
                if (this.files.length) {
                    this.files.forEach((file, index) => {
                        actions.push(this.consultationService.postFile(file, res.id).pipe(
                            catchError(err => {
                                console.log('File upload error:', err);
                                return of({ error: true, type: 'file', fileName: file.name, details: err });
                            })
                        ));
                    })
                }

                if (actions.length === 0) {
                    return of({ consultation: res, errors: [] });
                }

                return forkJoin(actions).pipe(
                    switchMap(results => {
                        const errors = results.filter((r: any) => r?.error);
                        return of({ consultation: res, errors });
                    })
                );
            }),
            catchError(err => {
                console.log('Consultation creation error:', err);
                this.showErrorToast(this.translate.instant('request_consultation.consultation_creation_failed') || 'Failed to create consultation. Please try again.');
                throw err;
            }),
            finalize(() => {
                this.loading = false;
            })
        ).subscribe(result => {
            if (result.errors && result.errors.length > 0) {
                const fileErrors = result.errors.filter((e: any) => e.type === 'file');
                if (fileErrors.length > 0) {
                    let errorMessage: string;
                    if (fileErrors.length === 1) {
                        errorMessage = (this.translate.instant('request_consultation.file_upload_failed_single') || 'Failed to upload file:') + ` ${fileErrors[0].fileName}`;
                    } else {
                        const fileNames = fileErrors.map((e: any) => e.fileName).join(', ');
                        errorMessage = (this.translate.instant('request_consultation.file_upload_failed_multiple') || `Failed to upload ${fileErrors.length} file(s):`) + ` ${fileNames}`;
                    }
                    this.showWarningToast(errorMessage);
                }
            }
            localStorage.setItem("currentConsultation", result.consultation.id);
            this.router.navigate([`/consultation/${result.consultation.id}`]);
        }, err => {
            console.log('Subscription error:', err);
        });
    }

    async showErrorToast(message: string) {
        const toast = await this.toastController.create({
            message,
            duration: 10000,
            position: 'top',
            color: 'danger',
            icon: 'close-circle-outline',
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel'
                }
            ]
        });
        await toast.present();
    }

    async showWarningToast(message: string) {
        const toast = await this.toastController.create({
            message,
            duration: 10000,
            position: 'top',
            color: 'warning',
            icon: 'alert-circle-outline',
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel'
                }
            ]
        });
        await toast.present();
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
