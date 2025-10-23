import { Injectable } from '@angular/core';
import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { DashbaordState } from './dashboard-state.interface';

const initialState: DashbaordState = {
  data: [
    {
      label: 'Pedidos',
      value: 0,
      subtitle: 'Total de pedidos processados',
      icon: faBoxesPacking,
    },
    {
      label: 'Logs',
      value: 0,
      subtitle: 'Total de logs registrados',
      icon: faBoxesPacking,
    },
    {
      label: 'Filas Ativas',
      value: 0,
      subtitle: 'Jobs em processamento',
      icon: faBoxesPacking,
    },
    {
      label: 'Taxa de Sucesso',
      value: 0,
      subtitle: 'Integrações bem-sucedidas',
      icon: faBoxesPacking,
    },
  ],
};

@Injectable({ providedIn: 'root' })
export class DashboardStore extends signalStore(
  withState(initialState),
  withMethods((store) => ({
    updateDashboardData(data: any) {
      const successPercent = (data.successful_integrations / data.total_logs) * 100;
      const currentData = store.data();

      patchState(store, {
        data: [
          {
            ...currentData[0],
            value: data.total_orders?.toLocaleString('pt-BR'),
          },
          {
            ...currentData[1],
            value: data.total_logs?.toLocaleString('pt-BR'),
          },
          currentData[2],
          {
            ...currentData[3],
            value: `${successPercent.toFixed(2)}%`,
          },
        ],
      });
    },
  }))
) {}
