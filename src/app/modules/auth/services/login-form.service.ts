import { inject, Injectable, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  getError(controlName: string): string | null {
    const control = this.formLogin.get(controlName);
    if (control?.touched && control.errors) {
      if (control.errors['required']) return 'Este campo es obligatorio.';
      if (control.errors['email']) return 'Formato de email inválido.';
    }
    return null;
  }
}