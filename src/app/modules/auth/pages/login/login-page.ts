import { Component, inject } from '@angular/core';
import { LoginForm } from '../../components/login/login-form';
import { LoginModel } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login-page',
  imports: [LoginForm],
  template: ` <login-form (onFormValue)="handleLogin($event)" /> `,
})
export class LoginPage {
  private readonly service = inject(AuthService);

  handleLogin(data: LoginModel) {
    const { email, password } = data;

    if (!email || !password) return;

    this.service.login(data).subscribe({
      next: (value) => {},
      error: (err) => {},
    });
  }
}