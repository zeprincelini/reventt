import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from 'src/app/components/home/hero/hero.component';
import { LoanComponent } from 'src/app/components/home/loan/loan.component';
import { EasyComponent } from 'src/app/components/home/easy/easy.component';
import { CountComponent } from 'src/app/components/home/count/count.component';
import { WhyComponent } from 'src/app/components/home/why/why.component';
import { AccessComponent } from 'src/app/components/home/access/access.component';
import { AdviceComponent } from 'src/app/components/home/advice/advice.component';
import { StoriesComponent } from 'src/app/components/home/stories/stories.component';
import { NewsComponent } from 'src/app/components/home/news/news.component';
import { NewsLetterComponent } from 'src/app/components/home/news-letter/news-letter.component';
import { ProvisionComponent } from 'src/app/components/home/provision/provision.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    LoanComponent,
    EasyComponent,
    CountComponent,
    WhyComponent,
    AccessComponent,
    AdviceComponent,
    StoriesComponent,
    NewsComponent,
    NewsLetterComponent,
    ProvisionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
