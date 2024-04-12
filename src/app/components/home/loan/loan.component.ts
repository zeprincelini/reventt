import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
})
export class LoanComponent implements AfterViewInit, OnDestroy {
  @ViewChild('ref') ref!: ElementRef;
  observer!: IntersectionObserver;
  inView = false;
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

  ngAfterViewInit() {
    this.checkPosition();
  }

  checkPosition() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!this.inView) this.inView = true;
        }
      },
      { threshold: 0.4 }
    );
    this.observer.observe(this.ref.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
