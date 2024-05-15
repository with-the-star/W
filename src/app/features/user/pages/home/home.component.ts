import {
  ChangeDetectorRef,
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Galleria } from 'primeng/galleria';
import { PhotoService } from './photoservice';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    GalleriaModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ProgressBarModule,
    DividerModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [PhotoService],
})
export class HomeComponent {
  photoService = inject(PhotoService);
  images: any[] | undefined;

  //   @ViewChild('galleria') galleria: Galleria | undefined;

  ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));
  }
}
