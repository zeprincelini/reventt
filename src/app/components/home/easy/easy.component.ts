import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../../shared/badge/badge.component';
import { EasyCardComponent } from '../easy-card/easy-card.component';

@Component({
  selector: 'app-easy',
  standalone: true,
  imports: [CommonModule, BadgeComponent, EasyCardComponent],
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.scss'],
})
export class EasyComponent {}
