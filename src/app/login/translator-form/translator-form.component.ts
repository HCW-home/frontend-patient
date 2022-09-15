import { Component, OnInit, Input, Output, EventEmitter, Directive  } from '@angular/core';
import { ConfigService } from '../../config.service';
import {
  FormControl, FormGroupDirective, NgForm, Validators, ValidatorFn,
  FormBuilder, FormGroup, AbstractControl
} from '@angular/forms';

const phoneNumberRegex = new RegExp(/^(\+|00)[0-9 ]+$/)


@Directive()
@Component({
  selector: 'app-translator-form',
  templateUrl: './translator-form.component.html',
  styleUrls: ['./translator-form.component.scss']
})
export class TranslatorFormComponent implements OnInit {


  @Input() invite;

  @Output() onTranslatorSubmit = new EventEmitter();
  @Output() onTranslatorRefused = new EventEmitter();

  email: string;
  name: string;
  direct: string;
  myForm;
  constructor(public configService: ConfigService,
    private formBuilder: FormBuilder
    ) {

  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      emailFormControl: new FormControl('', [Validators.email]),
      directNumberFormControl: new FormControl('', [Validators.pattern(phoneNumberRegex)] ),
      nameFormControl: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    if (!this.myForm.valid ){
      return
    }
    console.log("Submitted ", this.email, this.name, this.direct, this.myForm)
    const name = this.myForm.get('nameFormControl').value
    const email = this.myForm.get('emailFormControl').value
    const direct = this.myForm.get('directNumberFormControl').value
    if (!email || !name || !direct) return
    this.onTranslatorSubmit.emit({ email: email, name: name, direct: direct })
  }

  onRefused() {
    this.onTranslatorRefused.emit(true)
  }

}
