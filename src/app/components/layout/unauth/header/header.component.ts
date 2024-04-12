import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  position!: number;
  onOpen = false;
  navLinks: { path: string; name: string }[] = [
    {
      path: '',
      name: 'Home',
    },
    { path: 'contact', name: 'Contact us' },
    {
      path: 'about',
      name: 'About us',
    },
    {
      path: 'more',
      name: "Let's talk",
    },
  ];

  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  checkHeight() {
    this.position = window.scrollY;
  }

  toggle() {
    this.onOpen = !this.onOpen;
  }

  onNavigate() {
    this.router.navigateByUrl(this.navLinks[this.navLinks.length - 1].path);
  }
}
