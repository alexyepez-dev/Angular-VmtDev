import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormService } from '../../services/login-form.service';
import { LoginModel } from '../../models/login.model';

@Component({
  selector: 'login-form',
  imports: [ReactiveFormsModule],
  template: `
    <div
      class="flex items-center justify-center h-full w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
    >
      <div class="relative">
        <div
          class="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"
        ></div>
        <div
          id="form-container"
          class="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out"
        >
          <h2 id="form-title" class="text-center text-3xl font-bold mb-10 text-gray-800">Login</h2>
          <form [formGroup]="service.formLogin" (ngSubmit)="onLogin()" class="space-y-5">
            <input
              class="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Email"
              type="text"
              formControlName="email"
              required
            />
            @if (service.isValidControl('email')) {
            <strong class="text-red-500"> {{ service.getError('email') }} </strong>
            }
            <input
              class="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Password"
              type="password"
              formControlName="password"
              required
            />
            @if (service.isValidControl('password')) {
            <strong class="text-red-500"> {{ service.getError('password') }} </strong>
            }
            <button
              type="submit"
              [disabled]="service.submitValid"
              class="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign in
            </button>
            <a class="text-blue-500 hover:text-blue-800 text-sm" href="#">Forgot Password?</a>
          </form>
        </div>
      </div>
    </div>
  `,
})
export class LoginForm {
  @Output() onFormValue = new EventEmitter<LoginModel>();

  protected service = inject(LoginFormService);

  onLogin() {
    if (this.service.formLogin.invalid) return;

    this.onFormValue.emit(this.service.formLogin.value as LoginModel);
  }
}