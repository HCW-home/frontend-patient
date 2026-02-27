import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ModalController, ToastController} from "@ionic/angular";
import {TranslateService} from "@ngx-translate/core";
import {ValidationService} from "../shared/services/validation.service";
import {CountrySelectPage} from "../register/country-select/country-select.page";
import {AuthService} from "../auth/auth.service";
import {UserService} from "../services/user.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  currentUser: any;
  genders = [{name: "Male", id: "male"}, {name: "Female", id: "female"}];
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phoneNumber: [''],
    organization: [''],
    country: [''],
    sex: ['', [Validators.required]],
  });
  errorMessage: string;
  saving = false;
  constructor(
      private authService: AuthService,
      private fb: FormBuilder,
      private router: Router,
      private modalController: ModalController,
      private toastController: ToastController,
      private translate: TranslateService,
      private userService: UserService,
      public validationService: ValidationService,
  ) {
    this.form.valueChanges.subscribe(() => {
      this.errorMessage = '';
    })
  }

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
    if (this.currentUser) {
      this.fillForm();
    }
  }

  fillForm() {
    this.form = this.fb.group({
      email: [{value: this.currentUser.email, disabled: true}, [Validators.required, Validators.email]],
      firstName: [this.currentUser.firstName, [Validators.required]],
      lastName: [this.currentUser.lastName, [Validators.required]],
      phoneNumber: [this.currentUser.phoneNumber],
      organization: [this.currentUser.organization],
      country: [this.currentUser.country],
      sex: [this.currentUser.sex],
    });
  }

  backToDashboard() {
    this.router.navigate(['/dashboard'])
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
    if (this.form.invalid || this.saving) {
      return;
    }
    this.saving = true;
    const {value} = this.form;
    this.userService.updateProfile(this.currentUser.id, {
      firstName: value.firstName,
      lastName: value.lastName,
      phoneNumber: value.phoneNumber,
      organization: value.organization,
      country: value.country,
      sex: value.sex,
    }).subscribe({
      next: async (updatedUser) => {
        this.saving = false;
        this.currentUser = { ...this.currentUser, ...updatedUser };
        this.authService.currentUserSubject.next(this.currentUser);
        const toast = await this.toastController.create({
          message: this.translate.instant('profile.profileUpdated'),
          duration: 3000,
          position: 'bottom',
          color: 'success',
        });
        await toast.present();
      },
      error: async (err) => {
        this.saving = false;
        const message = err.error?.error || err.error?.message || err.message || 'Error';
        const toast = await this.toastController.create({
          message,
          duration: 4000,
          position: 'bottom',
          color: 'danger',
        });
        await toast.present();
      }
    });
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
