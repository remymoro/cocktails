import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthenticationApplication } from '../services/authentication.application';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly application = inject(AuthenticationApplication);
  loginForm = inject(FormBuilder).group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email(): FormControl {
    return this.loginForm.controls.email;
  }

  get password(): FormControl {
    return this.loginForm.controls.password;
  }

  get isValid(): boolean {
    return this.loginForm.valid;
  }

  save(): void {
    if (this.loginForm.value.email && this.loginForm.value.password) {
      this.application.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      );
    }
  }
}
