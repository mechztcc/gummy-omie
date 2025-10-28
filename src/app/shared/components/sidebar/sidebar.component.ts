import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBox,
  faBoxesPacking,
  faBoxesStacked,
  faBoxOpen,
  faChartSimple,
  faHouse,
  faRightFromBracket,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { SidebarStore } from '../../stores/sidebar/sidebar.store';

interface SidebarItem {
  label: string;
  icon: IconDefinition;
  action: Function;
  active: Function;
}

@Component({
  selector: 'app-sidebar',
  imports: [FontAwesomeModule, RouterModule, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  icons: any = {
    exit: faRightFromBracket,
  };

  store = inject(SidebarStore);

  constructor(private router: Router, private routes: ActivatedRoute) {
  }

  items: SidebarItem[] = [
    {
      label: 'Dashboard',
      icon: faHouse,
      action: () => {
        this.router.navigate(['/dashboard']);
      },
      active: () => {
        return window.location.href.includes('dashboard');
      },
    },
    {
      label: 'Monitoramento',
      icon: faChartSimple,
      action: () => {
        this.router.navigate(['/monitoring-queues']);
      },
      active: () => {
        return window.location.href.includes('monitoring-queues');
      },
    },
    {
      label: 'Reintegrar pedido',
      icon: faBoxesPacking,
      action: () => {
        this.router.navigate(['/orders/reintegrate']);
      },
      active: () => {
        return window.location.href.includes('orders/reintegrate');
      },
    },
    {
      label: 'Pedidos filtrados',
      icon: faBoxesStacked,
      action: () => {
        this.router.navigate(['/logs']);
      },
      active: () => {
        return window.location.href.includes('logs');
      },
    },
    {
      label: 'Pedidos manuais',
      icon: faBoxOpen,
      action: () => {
        this.router.navigate(['/osvaldo']);
      },
      active: () => {
        return window.location.href.includes('osvaldo');
      },
    },
    {
      label: 'Pedidos ausentes',
      icon: faBox,
      action: () => {
        this.router.navigate(['/astec']);
      },
      active: () => {
        return window.location.href.includes('astec');
      },
    },
  ];
}
