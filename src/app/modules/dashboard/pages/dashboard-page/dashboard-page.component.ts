import { Component, OnInit } from '@angular/core';
import { CardStatsComponent } from '../../components/card-stats/card-stats.component';
import { DashboardService } from '../../shared/services/dashboard.service';
import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons';
import { CardDashboardMenuComponent } from '../../components/card-dashboard-menu/card-dashboard-menu.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [CardStatsComponent, CardDashboardMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent implements OnInit {
  data: any[] = [
    {
      label: 'Pedidos',
      value: '50,000',
      subtitle: 'Total de pedidos processados',
      icon: faBoxesPacking,
    },
    {
      label: 'Pedidos',
      value: '50,000',
      subtitle: 'Total de pedidos processados',
      icon: faBoxesPacking,
    },
    {
      label: 'Pedidos',
      value: '50,000',
      subtitle: 'Total de pedidos processados',
      icon: faBoxesPacking,
    },
    {
      label: 'Pedidos',
      value: '50,000',
      subtitle: 'Total de pedidos processados',
      icon: faBoxesPacking,
    },
  ];

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

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.onList();
  }

  onList() {
    this.dashboardService.onListHistory().subscribe((data) => {
      this.data = data['data'].step_stats;
      console.log(this.data);
    });
  }
}
