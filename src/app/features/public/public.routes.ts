import { Route } from '@angular/router';

export const PUBLIC_ROUTES: Route[] = [
    {
        path: '',
        loadComponent: () =>
            import('./public.component').then((c) => c.PublicComponent),
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadComponent: () =>
                    import(
                        './pages/home/home.component'
                    ).then((c) => c.HomeComponent),
            },
            
            {
                path: 'signin',
                loadComponent: () =>
                    import(
                        './pages/auth/signin/signin.component'
                    ).then((c) => c.SigninComponent),
            },

            {
                path: 'signup',
                loadComponent: () =>
                    import(
                        './pages/auth/signup/signup.component'
                    ).then((c) => c.SignupComponent),
            },
            {
                path: 'profile',
                loadComponent: () =>
                    import(
                        './pages/auth/profile/profile.component'
                    ).then((c) => c.ProfileComponent),
            },

            {
                path: '**',
                redirectTo: 'dashboard',
            },
        ],
    },
];
