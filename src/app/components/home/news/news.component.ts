import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  list = [
    {
      title: 'A digital prescription for the pharma industry',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sodales elit......',
    },
    {
      title: 'A digital prescription for the pharma industry',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sodales elit......',
    },
    {
      title: 'A digital prescription for the pharma industry',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sodales elit......',
    },
  ];
}
