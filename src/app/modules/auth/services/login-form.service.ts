import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getError } from '../../../shared/validations/get-error.validator';
import { isValidControl } from '../../../shared/validations/valid-control.validator';

@Injectable({
  providedIn: 'root',
})
export class LoginFormService {
  private readonly fb = inject(FormBuilder);

  public formLogin: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  click() {
    const value = this.formLogin.value;
    console.log(value);
  }

  getError(controlName: string) {
    return getError(this.formLogin, controlName);
  }

  isValidControl(controlName: string) {
    return isValidControl(this.formLogin, controlName);
  }

  get submitValid(): boolean {
    return this.formLogin.invalid;
  }
}