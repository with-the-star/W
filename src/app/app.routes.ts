import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/signin/signin.component').then(
        (c) => c.SigninComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./features/home/signup/signup.component').then(
        (c) => c.SignupComponent
      ),
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./features/home/signin/signin.component').then(
        (c) => c.SigninComponent
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/user/user.routes').then((r) => r.USER_ROUTES),
  },
];
