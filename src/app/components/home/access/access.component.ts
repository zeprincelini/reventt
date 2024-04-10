import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../../shared/badge/badge.component';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
})
export class AccessComponent {}
