import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface Card {
  label: string;
  subtitle: string;
  value: string;
  icon: IconDefinition;
}

@Component({
  selector: 'app-card-stats',
  imports: [FontAwesomeModule],
  templateUrl: './card-stats.component.html',
  styleUrl: './card-stats.component.scss',
})
export class CardStatsComponent {
  data = input<Card>();
}
