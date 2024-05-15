import { Route } from '@angular/router';

export const USER_ROUTES: Route[] = [
    {
        path: '',
        loadComponent: () =>
            import('./user.component').then((c) => c.UserComponent),
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
                path: 'profile',
                loadComponent: () =>
                    import(
                        './pages/account/profile/profile.component'
                    ).then((c) => c.ProfileComponent),
            },

            {
                path: '**',
                redirectTo: 'home',
            },
        ],
    },
];
