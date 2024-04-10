import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-easy-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './easy-card.component.html',
  styleUrls: ['./easy-card.component.scss'],
})
export class EasyCardComponent {
  @Input() title!: string;
  @Input() body!: string;
}
