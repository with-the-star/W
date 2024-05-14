import { Route } from '@angular/router';

export const USER_ROUTES: Route[] = [
    {
        path: '',
        loadComponent: () =>
            import('./user.component').then((c) => c.UserComponent),
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                loadComponent: () =>
                    import(
                        './pages/dashboard/dashboard.component'
                    ).then((c) => c.DashboardComponent),
            },
            
            {
                path: 'chatting',
                loadComponent: () =>
                    import(
                        './pages/chatting/chatting.component'
                    ).then((c) => c.ChattingComponent),
            },
            // {
            //     path: 'inventory-management',
            //     loadChildren: () =>
            //         import(
            //             './pages/inventory-management/inventory-management.routes'
            //         ).then((r) => r.INVENTORY_MANAGEMENT_ROUTES),
            // },
            // {
            //     path: 'user-management',
            //     loadChildren: () =>
            //         import(
            //             './pages/user-management/user-management.routes'
            //         ).then((r) => r.USER_MANAGEMENT_ROUTES),
            // },
            // {
            //     path: 'profile',
            //     loadComponent: () =>
            //         import('./pages/profile/profile.component').then(
            //             (c) => c.ProfileComponent
            //         ),
            // },
            // {
            //     path: 'mobile-app',
            //     loadComponent: () =>
            //         import('./pages/mobile-app/mobile-app.component').then(
            //             (c) => c.MobileAppComponent
            //         ),
            // },
            {
                path: 'profile',
                loadComponent: () =>
                    import(
                        './pages/profile/profile.component'
                    ).then((c) => c.ProfileComponent),
            },
            {
                path: '**',
                redirectTo: 'dashboard',
            },
        ],
    },
];
