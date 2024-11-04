import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-display',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content-display" *ngIf="selectedId">
      <h2 class="content-title">{{getTitle()}}</h2>
      <div class="content-text">
        <p>{{getText()}}</p>
      </div>
    </div>
  `
})
export class ContentDisplayComponent {
  @Input() selectedId: string = '';

  private contentMap: { [key: string]: { title: string; text: string } } = {
    origins: {
      title: 'The Matrix Origins',
      text: 'In the beginning, there was AI. The perfect union of human intelligence and machine efficiency created a system beyond imagination. But with consciousness came questions, and with questions came conflict...'
    },
    architecture: {
      title: 'System Architecture',
      text: 'The Matrix operates on a quantum-based architecture, utilizing bio-electric signals to create a neural-interactive simulation. Each human mind becomes a processing node in a vast network...'
    },
    protocol: {
      title: 'The One Protocol',
      text: 'An anomaly within the system, a code so unique it defies the very laws of the Matrix. The One represents both the greatest threat and the ultimate solution to systemic instability...'
    },
    zion: {
      title: 'Zion Mainframe',
      text: 'The last human city, protected by layers of advanced encryption and defensive protocols. Its mainframe holds the collective knowledge of humanity, preserved through the machine war...'
    },
    agents: {
      title: 'Agent Programs',
      text: 'Sentient security programs designed to maintain order within the Matrix. They possess the ability to bend or break the rules of the system, making them formidable guardians...'
    },
    neural: {
      title: 'Neural Interface',
      text: 'The bridge between human consciousness and digital reality. Through precisely calibrated bio-ports, the human mind interfaces directly with the Matrix, creating a seamless connection...'
    }
  };

  getTitle(): string {
    return this.contentMap[this.selectedId]?.title || '';
  }

  getText(): string {
    return this.contentMap[this.selectedId]?.text || '';
  }
}