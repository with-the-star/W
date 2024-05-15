import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    standalone: true,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [ButtonModule],
})
export class HomeComponent {
}
