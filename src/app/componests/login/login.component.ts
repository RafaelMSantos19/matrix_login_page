import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatrixBackgroundComponent } from '../matrix-background/matrix-background.component';

interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatrixBackgroundComponent],
  template: `
    <app-matrix-background>
      <div class="login-container">
        <h2 class="login-title">Enter The Matrix</h2>
        <form class="login-form" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="username">Username</label>
            <input 
              type="text" 
              id="username"
              name="username"
              [(ngModel)]="loginForm.username"
              autocomplete="off">
          </div>
          
          <div class="form-group">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password"
              name="password"
              [(ngModel)]="loginForm.password">
          </div>
          
          <button type="submit" class="login-button">
            ACCESS SYSTEM
          </button>
        </form>
      </div>
    </app-matrix-background>
  `
})
export class LoginComponent {
  loginForm: LoginForm = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // In a real app, you would validate credentials here
    this.router.navigate(['/dashboard']);
  }
}