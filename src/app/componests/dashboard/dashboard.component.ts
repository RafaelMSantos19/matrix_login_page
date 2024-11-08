import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrixBackgroundComponent } from '../matrix-background/matrix-background.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentDisplayComponent } from '../content-display/content-display.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    MatrixBackgroundComponent, 
    SidebarComponent, 
    ContentDisplayComponent,
    TopBarComponent
  ],
  template: `
   <!--  -->
   <app-matrix-background>
    <div class="dashboard-layout">
    <app-sidebar #sidebar></app-sidebar>
        <app-top-bar></app-top-bar>
        <div class="main-content">
          <h1 class="dashboard-title">Matrix Archives</h1>
          <app-content-display [selectedId]="sidebar.selectedId"></app-content-display>
        </div>
      </div>
    </app-matrix-background>
  `
})
export class DashboardComponent {}