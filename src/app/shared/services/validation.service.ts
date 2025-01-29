import {AbstractControl, FormArray, FormControl, FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private getControls(formGroup: FormGroup) {
    return formGroup.controls;
  }


  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
        control.markAsDirty({onlySelf: true});
      } else if (control instanceof FormArray) {
        control.markAsTouched({onlySelf: true});
        control.markAsDirty({onlySelf: true});
        control.controls.forEach(cont => {
          if (cont instanceof FormGroup) {
            this.validateAllFormFields(cont)
          }
        })

      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  showFormArrayError(form: FormGroup, i: number, formArray: string, control: string) {
    return ((<FormArray>form.get(formArray)).controls[i].get(control)?.invalid && ((<FormArray>form.get(formArray)).controls[i].get(control)?.touched || (<FormArray>form.get(formArray)).controls[i].get(control)?.dirty));
  }

  showError(formGroup: FormGroup, fieldName: string) {
    return this.getControls(formGroup)[fieldName]?.invalid && (this.getControls(formGroup)[fieldName]?.touched || this.getControls(formGroup)[fieldName]?.dirty);
  }

  resetInputValidation(formGroup: FormGroup, fieldName: string) {
    const inputControl = this.getControls(formGroup)[fieldName];
    if (inputControl.errors && inputControl.errors["required"]) {
      console.log('stexa');
      inputControl.markAsUntouched();
      inputControl.markAsPristine();
    }
  }

  resetInputValidationForArray(form: FormGroup, i: number, formArray: string, control: string) {
    const inputControl = (<FormArray>form.get(formArray)).controls[i].get(control);
    if (inputControl && inputControl.errors && inputControl.errors["required"]) {
      inputControl.markAsUntouched();
      inputControl.markAsPristine();
    }
  }


  atListOneValidator(abstractControl: AbstractControl) {
    if (!abstractControl.value.length) {
      return {atLeastOne: false};
    }
    return null;
  }

  public clearSpace(formGroup: FormGroup, fieldName) {
    let inputValue = formGroup.get(fieldName).value;
    if (inputValue) {
      inputValue = inputValue.replace(/ +(?= )/g, '').trim();
      formGroup.get(fieldName).setValue(inputValue);
    }
  }

  public ltrim(formGroup: FormGroup, fieldName) {
    let inputValue = formGroup.get(fieldName).value;
    const inputControl = this.getControls(formGroup)[fieldName];
    if (inputValue) {
      inputValue = inputValue.replace(/^\s*/, '');
      formGroup.get(fieldName).setValue(inputValue);
    }
    if (inputControl.errors && inputControl.errors.required) {
      inputControl.markAsUntouched();
      inputControl.markAsPristine();
    }
  }

}

