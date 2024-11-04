import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';

interface MatrixCharacter {
  value: string;
  x: number;
  y: number;
  opacity: number;
}

interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="matrix-container">
      <div *ngFor="let char of matrixCharacters" 
           class="matrix-character"
           [style.left.px]="char.x"
           [style.top.px]="char.y"
           [style.opacity]="char.opacity">
        {{char.value}}
      </div>
      
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
    </div>
  `
})
export class App implements OnInit {
  matrixCharacters: MatrixCharacter[] = [];
  loginForm: LoginForm = {
    username: '',
    password: ''
  };

  private readonly characters = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890';
  private columns: number = 0;
  private readonly fontSize: number = 20;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.initializeMatrix();
    this.animate();
  }

  onSubmit() {
    console.log('Login attempt:', this.loginForm);
    // Add your login logic here
  }

  private initializeMatrix() {
    this.columns = Math.floor(window.innerWidth / this.fontSize);
    const drops: number[] = new Array(this.columns).fill(1);

    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.matrixCharacters = [];
        
        for (let i = 0; i < drops.length; i++) {
          const char = this.characters.charAt(
            Math.floor(Math.random() * this.characters.length)
          );
          
          if (drops[i] * this.fontSize > window.innerHeight && 
              Math.random() > 0.975) {
            drops[i] = 0;
          }
          
          this.matrixCharacters.push({
            value: char,
            x: i * this.fontSize,
            y: drops[i] * this.fontSize,
            opacity: (1 - (drops[i] * this.fontSize) / window.innerHeight) + 0.3
          });
          
          drops[i]++;
        }
        
        this.ngZone.run(() => {});
      }, 50);
    });
  }

  private animate() {
    requestAnimationFrame(() => this.animate());
  }
}

bootstrapApplication(App);