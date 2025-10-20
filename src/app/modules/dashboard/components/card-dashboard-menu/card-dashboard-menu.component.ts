import { Component, input } from '@angular/core';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';

interface Config {
  title: string;
  subtitle: string;
  buttonText: string;
}

@Component({
  selector: 'app-card-dashboard-menu',
  imports: [CustomButtonComponent],
  templateUrl: './card-dashboard-menu.component.html',
  styleUrl: './card-dashboard-menu.component.scss',
})
export class CardDashboardMenuComponent {
  data = input<any>();
}
