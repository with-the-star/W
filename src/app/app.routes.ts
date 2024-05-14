import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./features/public/public.routes').then(
                (r) => r.PUBLIC_ROUTES
            ),
        // TODO: we'll need to update this once we have MSAl configured
        // canActivate: [roleGuardCanActivate],
        // data: {
        //     expectedRole: [roles.Agent],
        //     overrideRole: [roles.Admin, roles.Developer],
        // },
    },
    {
        path: 'user',
        loadChildren: () =>
            import('./features/user/user.routes').then(
                (r) => r.USER_ROUTES
            ),
        // TODO: we'll need to update this once we have MSAl configured
        // canActivate: [roleGuardCanActivate],
        // data: {
        //     expectedRole: [roles.Agent],
        //     overrideRole: [roles.Admin, roles.Developer],
        // },
    },
];
