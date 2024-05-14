import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, SidebarModule, NavbarComponent, FooterComponent],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicComponent {
    navOptions: {
        displayName: string;
        path: string;
        icon: string;
    }[] = [
        {
            displayName: 'Social',
            path: './tour-dispatch',
            icon: 'pi-car',
        },
        {
            displayName: 'Online Shop',
            path: './inventory-management',
            icon: 'pi-book',
        },
        {
            displayName: 'Portfolio',
            path: './cruise-calendar',
            icon: 'pi-calendar',
        },
    ];

    drawerExpanded = true;

    mobileDrawerIsOpen = false;

    toggleDrawerExpanded(): void {
        this.drawerExpanded = !this.drawerExpanded;
    }
    openMobileDrawer(): void {
        this.mobileDrawerIsOpen = true;
    }
}
