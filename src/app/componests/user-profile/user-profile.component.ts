import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="user-profile">
      <div class="profile-image">
        <img [src]="userProfile.imageUrl" alt="Profile" />
      </div>
      <div class="profile-info">
        <div class="codename">{{userProfile.codename}}</div>
        <div class="user-id">ID: {{userProfile.id}}</div>
        <div class="trust-level">
          <span class="trust-label">Trust Level:</span>
          <div class="trust-bar">
            <div class="trust-fill" [style.width.%]="userProfile.trustLevel"></div>
          </div>
          <span class="trust-value">{{userProfile.trustLevel}}%</span>
        </div>
      </div>
    </div>
  `
})
export class UserProfileComponent {
  userProfile = {
    codename: 'Neo',
    id: 'THX-1138',
    imageUrl: 'https://via.placeholder.com/60',
    trustLevel: 85
  };
}