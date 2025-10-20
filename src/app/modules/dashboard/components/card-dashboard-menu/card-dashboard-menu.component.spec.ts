import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDashboardMenuComponent } from './card-dashboard-menu.component';

describe('CardDashboardMenuComponent', () => {
  let component: CardDashboardMenuComponent;
  let fixture: ComponentFixture<CardDashboardMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDashboardMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDashboardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
