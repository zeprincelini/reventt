import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  now = new Date().getFullYear();
  navLinks: { path: string; name: string }[] = [
    { path: 'contact', name: 'Contact us' },
    {
      path: 'about',
      name: 'About us',
    },
    {
      path: 'services',
      name: 'Services',
    },
    {
      path: 'more',
      name: 'Our works',
    },
  ];
}
