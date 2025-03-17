import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private router = inject(Router);
  private userService = inject(UsersService);

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  onSubmitLogin() {
    if (this.loginForm.valid) {
      // this.userService.submitLogin(
      //   this.loginForm.value.username ?? '',
      //   this.loginForm.value.password ?? ''
      // );
      // Redirigir a la página principal después del login
      this.router.navigate(['/']);
    }
  }
}
