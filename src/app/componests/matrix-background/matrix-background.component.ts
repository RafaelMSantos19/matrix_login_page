import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MatrixCharacter {
  value: string;
  x: number;
  y: number;
  opacity: number;
}

@Component({
  selector: 'app-matrix-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="matrix-container">
      <div *ngFor="let char of matrixCharacters" 
           class="matrix-character"
           [style.left.px]="char.x"
           [style.top.px]="char.y"
           [style.opacity]="char.opacity">
        {{char.value}}
      </div>
      <ng-content></ng-content>
    </div>
  `
})
export class MatrixBackgroundComponent implements OnInit {
  matrixCharacters: MatrixCharacter[] = [];
  private readonly characters = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890';
  private columns: number = 0;
  private readonly fontSize: number = 20;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.initializeMatrix();
    this.animate();
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