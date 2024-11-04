import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="top-bar">
      <div class="system-status">
        <span class="status-item">SYSTEM STATUS: ONLINE</span>
        <span class="status-item">UPTIME: {{uptime}}</span>
        <span class="status-item">SECURITY LEVEL: ALPHA</span>
      </div>
      <div class="connection-info">
        <span class="connection-status">SECURE CONNECTION</span>
        <div class="connection-indicator"></div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: calc(100% - 250px);
      margin-left: 250px;
    }
    
    .top-bar {
      height: 60px;
      background: rgba(0, 20, 0, 0.8);
      border-bottom: 1px solid #0F0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
      color: #0F0;
      font-family: monospace;
    }

    .system-status {
      display: flex;
      gap: 2rem;
    }

    .status-item {
      text-shadow: 0 0 5px #0F0;
      font-size: 0.9em;
    }

    .connection-info {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .connection-status {
      font-size: 0.9em;
      text-shadow: 0 0 5px #0F0;
    }

    .connection-indicator {
      width: 10px;
      height: 10px;
      background: #0F0;
      border-radius: 50%;
      box-shadow: 0 0 10px #0F0;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.5; }
      100% { opacity: 1; }
    }
  `]
})
export class TopBarComponent {
  uptime = '07:23:45';

  constructor() {
    this.updateUptime();
  }

  private updateUptime() {
    setInterval(() => {
      const time = new Date();
      this.uptime = `${String(time.getHours()).padStart(2, '0')}:${
        String(time.getMinutes()).padStart(2, '0')}:${
        String(time.getSeconds()).padStart(2, '0')}`;
    }, 1000);
  }
}