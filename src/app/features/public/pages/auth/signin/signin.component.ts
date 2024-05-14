import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';

import {
  BehaviorSubject,
  Subject,
  debounceTime,
  filter,
  lastValueFrom,
  map,
  take,
  takeUntil,
} from 'rxjs';

import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { UserState } from '@app/core';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputMaskModule,
    PasswordModule,
    ButtonModule,
  ],
  providers: [UserState],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  userState = inject(UserState);

  userSigninForm = new FormGroup({
    email: new FormControl<string | null>(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl<string | null>(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  private refresh$ = new Subject<void>();
  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  refresh(): void {
    this.refresh$.next();
  }

  signin() {
    const formValues = this.userSigninForm.getRawValue();
    this.userState
      .signin({
        email: formValues.email,
        password: formValues.password,
      })
      .then(() => {
        this.refresh();
      });
  }
}
