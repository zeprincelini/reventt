import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-news-letter',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss'],
})
export class NewsLetterComponent {}
