import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReintegrateOrdersComponent } from './reintegrate-orders.component';

describe('ReintegrateOrdersComponent', () => {
  let component: ReintegrateOrdersComponent;
  let fixture: ComponentFixture<ReintegrateOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReintegrateOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReintegrateOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
