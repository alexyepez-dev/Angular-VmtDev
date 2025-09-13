import { Component } from '@angular/core';
import { Login } from '../../components/login/login';

@Component({
  selector: 'login-page',
  imports: [Login],
  template: `
  <login-component />
  `,
})
export class LoginPage {}
