import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoringQueuesComponent } from './pages/monitoring-queues/monitoring-queues.component';

const routes: Routes = [
  {
    path: '',
    component: MonitoringQueuesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueuesRoutingModule {}
