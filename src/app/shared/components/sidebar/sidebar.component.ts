import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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

interface SidebarItem {
  label: string;
  icon: IconDefinition;
}

@Component({
  selector: 'app-sidebar',
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  icons: any = {
    exit: faRightFromBracket,
  };

  items: SidebarItem[] = [
    {
      label: 'Dashboard',
      icon: faHouse,
    },
    {
      label: 'Monitoramento',
      icon: faChartSimple,
    },
    {
      label: 'Reintegrar pedido',
      icon: faBoxesPacking,
    },
    {
      label: 'Pedidos filtrados',
      icon: faBoxesStacked,
    },
    {
      label: 'Pedidos manuais',
      icon: faBoxOpen,
    },
    {
      label: 'Pedidos ausentes',
      icon: faBox,
    },
  ];
}
