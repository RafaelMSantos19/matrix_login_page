import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface MenuItem {
  title: string;
  id: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sidebar">
      <h3 class="sidebar-title">Archives</h3>
      <ul class="menu-list">
        <li *ngFor="let item of menuItems" 
            class="menu-item"
            (click)="selectText(item.id)"
            [class.active]="selectedId === item.id">
          > {{item.title}}
        </li>
      </ul>
    </div>
  `
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    { title: 'The Matrix Origins', id: 'origins' },
    { title: 'System Architecture', id: 'architecture' },
    { title: 'The One Protocol', id: 'protocol' },
    { title: 'Zion Mainframe', id: 'zion' },
    { title: 'Agent Programs', id: 'agents' },
    { title: 'Neural Interface', id: 'neural' },
  ];

  selectedId: string = '';

  constructor(private router: Router) {}

  selectText(id: string) {
    this.selectedId = id;
  }
}