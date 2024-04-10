import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent {
  list = [
    {
      name: '40+',
      value: 'staff in different regions',
    },
    {
      name: '40M+',
      value: 'total amount loan disbursed',
    },
    {
      name: '360+',
      value: 'Approved & disbursed loan applications',
    },
  ];
}
