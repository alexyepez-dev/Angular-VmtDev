import { Routes } from '@angular/router';
import { Home } from './modules/home/home/home';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.routes').then((x) => x.routes),
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
];