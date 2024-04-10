import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyCardComponent } from './easy-card.component';

describe('EasyCardComponent', () => {
  let component: EasyCardComponent;
  let fixture: ComponentFixture<EasyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EasyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
