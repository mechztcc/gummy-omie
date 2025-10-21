import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReintegrateOrdersComponent } from './pages/reintegrate-orders/reintegrate-orders.component';

const routes: Routes = [
  {
    path: 'reintegrate',
    component: ReintegrateOrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
