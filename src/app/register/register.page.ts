import { Component, OnInit  } from '@angular/core';
import { ConfigService } from '../config.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {CountrySelectPage} from "./country-select/country-select.page";
import {NurseService} from "../shared/services/nurse.service";
import {ValidationService} from "../shared/services/validation.service";


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
    sex: ['male', [Validators.required]],
    terms: [false, [Validators.requiredTrue]]
  });
  errorMessage: string;
  constructor(
      private fb: FormBuilder,
      private router: Router,
      private modalController: ModalController,
      private nurseService: NurseService,
      public validationService: ValidationService,
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
    console.log(value, 'value');
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
      next: (response) => {
        console.log('Registered successfully:', response);
        this.router.navigate([`/register-success`])

      }, error: (err) => {
        this.errorMessage = err.error?.error || 'Something went wrong';
        // this.router.navigate([`/fail`])
        console.log(err, 'err');
      }
    })
  }

  getErrorMessage(formField: string) {
    switch (formField) {
      case 'email':
        const emailErrors = this.form.controls.email.errors;
        if (emailErrors.required) {
          return 'Email is required';
        } else {
          return 'Invalid email address';
        }
      case 'firstName':
        const nameErrors = this.form.controls.firstName.errors;
        if (nameErrors.required) {
          return 'Firstname is required';
        }
        break;
      case 'lastName':
        const surnameErrors = this.form.controls.lastName.errors;
        if (surnameErrors.required) {
          return 'Lastname is required';
        }
        break;
      case 'phoneNumber':
        const phoneNumberErrors = this.form.controls.phoneNumber.errors;
        if (phoneNumberErrors.required) {
          return 'Phone number is required';
        }
        break;
      case 'organization':
        const organizationErrors = this.form.controls.organization.errors;
        if (organizationErrors.required) {
          return 'Organization is required';
        }
        break;
      case 'country':
        const countryErrors = this.form.controls.country.errors;
        if (countryErrors.required) {
          return 'Country is required';
        }
        break;
    }
  }

}
