import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
})
export class LoanComponent {
  steps = [
    {
      name: 'Apply',
      body: 'Take your first step to financial freedom by applying for a loan from us and we will be available to help you every step of the way.',
    },
    {
      name: 'Get verified',
      body: 'We follow a well-regulated process to evaluate you/your documents we verify you and move you to the next step',
    },
    {
      name: 'Get funded',
      body: "After evaluation you will get your loan, all of this will occur within 24 hours. Our loans are quick and easy. It's that simple",
    },
  ];
}
