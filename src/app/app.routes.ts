import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'monitoring-queues',
    loadChildren: () => import('./modules/queues/queues.module').then((m) => m.QueuesModule),
  },
  {
    path: 'orders',
    loadChildren: () => import('./modules/orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'logs',
    loadChildren: () => import('./modules/logs/logs.module').then((m) => m.LogsModule),
  },
];
