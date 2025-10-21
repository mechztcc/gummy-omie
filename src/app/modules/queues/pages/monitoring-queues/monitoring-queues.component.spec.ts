import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringQueuesComponent } from './monitoring-queues.component';

describe('MonitoringQueuesComponent', () => {
  let component: MonitoringQueuesComponent;
  let fixture: ComponentFixture<MonitoringQueuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoringQueuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoringQueuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
