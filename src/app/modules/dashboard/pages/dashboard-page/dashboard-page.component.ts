import { Component, inject, OnInit } from '@angular/core';
import { CardDashboardMenuComponent } from '../../components/card-dashboard-menu/card-dashboard-menu.component';
import { CardStatsComponent } from '../../components/card-stats/card-stats.component';
import { DashboardService } from '../../shared/services/dashboard.service';
import { DashboardStore } from '../../shared/stores/dashboard/dashboard.store';

@Component({
  selector: 'app-dashboard-page',
  imports: [CardStatsComponent, CardDashboardMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent implements OnInit {
  items: any[] = [
    {
      title: 'Gerenciar Pedidos',
      subtitle: 'Reintegre pedidos específicos ou múltiplos pedidos',
      buttonText: 'Acessar pedidos',
    },
    {
      title: 'Visualizar Logs',
      subtitle: 'Consulte logs de histórico e estatísticas',
      buttonText: 'Ver logs',
    },
    {
      title: 'Monitorar Filas',
      subtitle: 'Acompanhe o status das filas de processamento',
      buttonText: 'Ver filas',
    },
  ];

  store = inject(DashboardStore);

  isLoading: boolean = false;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.onList();
  }

  onList() {
    this.isLoading = true;
    this.dashboardService
      .onListHistory()
      .subscribe((data) => {
        this.store.updateDashboardData(data);
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
