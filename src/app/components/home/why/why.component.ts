import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../../shared/badge/badge.component';

@Component({
  selector: 'app-why',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss'],
})
export class WhyComponent {}
