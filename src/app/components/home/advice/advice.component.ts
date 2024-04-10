import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../../shared/badge/badge.component';

@Component({
  selector: 'app-advice',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss'],
})
export class AdviceComponent {
  list = ['Money Lending', 'Micro-Finance', 'Advisory'];
}
