import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() onClick = new EventEmitter();
  @Input() fontSize = '16px';
  @Input() padding = '12px 32px 12px 32px';
  @Input() type: 'primary' | 'secondary' = 'primary';

  click() {
    this.onClick.emit();
  }
}
