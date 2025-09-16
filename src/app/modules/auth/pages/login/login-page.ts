import { Component } from '@angular/core';
import { LoginForm } from '../../components/login/login-form';

@Component({
  selector: 'login-page',
  imports: [LoginForm],
  template: `
  <login-form />
  `,
})
export class LoginPage {}
