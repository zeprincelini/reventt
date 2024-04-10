import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent {
  x = 0;
  reviews = [
    {
      text: 'I used to struggle with my business due to low capital until i met Revent that took my business to a new level with the loan granted to me at the best rates ever',
      name: 'Magarette Chikamso',
      image: 'assets/images/png/woman_3.png',
    },
    {
      text: 'I used to struggle with my business due to low capital until i met Revent that took my business to a new level with the loan granted to me at the best rates ever',
      name: 'Magarette Chikamso',
      image: 'assets/images/png/woman_3.png',
    },
  ];

  next() {
    this.x++;
  }

  prev() {
    this.x--;
  }
}
