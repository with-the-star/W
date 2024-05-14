import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import {
  NavbarComponent,
  SidebarComponent,
  FooterComponent,
} from './components';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ScrollPanelModule,
  ],
})
export class UserComponent {
  navOptions: {
    displayName: string;
    path: string;
    icon: string;
}[] = [
    {
        displayName: 'Dashboard',
        path: './dashboard',
        icon: 'pi-home',
    },
    {
        displayName: 'Chatting',
        path: './chatting',
        icon: 'pi-book',
    },
    {
        displayName: 'Signin',
        path: './signin',
        icon: 'pi-calendar',
    },
    {
        displayName: 'Settings',
        path: './setting',
        icon: 'pi-cog',
    },
];
}
