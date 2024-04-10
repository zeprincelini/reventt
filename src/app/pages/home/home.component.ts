import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from 'src/app/components/home/hero/hero.component';
import { LoanComponent } from 'src/app/components/home/loan/loan.component';
import { EasyComponent } from 'src/app/components/home/easy/easy.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, LoanComponent, EasyComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
