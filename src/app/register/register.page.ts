import { Component, OnInit  } from '@angular/core';
import { ConfigService } from '../config.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {CountrySelectPage} from "./country-select/country-select.page";
import {NurseService} from "../shared/services/nurse.service";
import {ValidationService} from "../shared/services/validation.service";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  genders = [{name: "Male", id: "male"}, {name: "Female", id: "female"}];
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    organization: ['', [Validators.required]],
    country: ['', [Validators.required]],
    sex: ['', [Validators.required]],
    terms: [false, [Validators.requiredTrue]]
  });
  errorMessage: string;
  constructor(
      private fb: FormBuilder,
      private router: Router,
      private modalController: ModalController,
      private nurseService: NurseService,
      public validationService: ValidationService,
      private translate: TranslateService,
      public configService: ConfigService) {
    this.form.valueChanges.subscribe(() => {
      this.errorMessage = '';
    })
  }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(["/requester"])
  }

  goToTerms() {
    this.router.navigate(["/cgu"])
  }

  async openCountrySelect() {
    const countrySelect = await this.modalController.create({
      component: CountrySelectPage,

      animated: true
    });
    await countrySelect.present();
    const { data } = await countrySelect.onWillDismiss();
    if (data) {
      if (data.country) {
        const country = data.country;
        this.form.controls.country.setValue(country.name);
      }
    }

  }

  onSubmit() {
    const {value} = this.form;
    const user = {
      email: value.email,
      firstName: value.firstName,
      lastName: value.lastName,
      phoneNumber: value.phoneNumber,
      organization: value.organization,
      country: value.country,
      sex: value.sex,
    }
    this.nurseService.registerNurse(user).subscribe({
      next: () => {
        this.router.navigate([`/register-success`])
      }, error: (err) => {
        this.errorMessage = err.error?.error || this.translate.instant('appComponent.serverError');
      }
    })
  }

  getErrorMessage(formField: string) {
    switch (formField) {
      case 'email':
        const emailErrors = this.form.controls.email.errors;
        if (emailErrors.required) {
          return this.translate.instant("register.email_required");
        } else {
          return this.translate.instant("register.invalid_email");
        }
      case 'firstName':
        const nameErrors = this.form.controls.firstName.errors;
        if (nameErrors.required) {
          return this.translate.instant("register.firstName_required");
        }
        break;
      case 'lastName':
        const surnameErrors = this.form.controls.lastName.errors;
        if (surnameErrors.required) {
          return this.translate.instant("register.lastName_required");
        }
        break;
      case 'phoneNumber':
        const phoneNumberErrors = this.form.controls.phoneNumber.errors;
        if (phoneNumberErrors.required) {
          return this.translate.instant("register.phone_required");
        }
        break;
      case 'organization':
        const organizationErrors = this.form.controls.organization.errors;
        if (organizationErrors.required) {
          return this.translate.instant("register.organization_required");
        }
        break;
      case 'country':
        const countryErrors = this.form.controls.country.errors;
        if (countryErrors.required) {
          return this.translate.instant("register.country_required");
        }
        break;
    }
  }

}
