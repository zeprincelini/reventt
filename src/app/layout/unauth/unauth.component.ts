import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/layout/unauth/header/header.component';
import { FooterComponent } from 'src/app/components/layout/unauth/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-unauth',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './unauth.component.html',
  styleUrls: ['./unauth.component.scss'],
})
export class UnauthComponent {}
