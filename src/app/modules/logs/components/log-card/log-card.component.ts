import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { HistoryLog } from '../../shared/interfaces/history-logs.interface';

@Component({
  selector: 'app-log-card',
  imports: [FontAwesomeModule, DatePipe],
  templateUrl: './log-card.component.html',
  styleUrl: './log-card.component.scss',
})
export class LogCardComponent {
  item = input<HistoryLog>();

  icons: any = {
    down: faChevronDown,
    up: faChevronUp,
  };

  isHidden: boolean = false;

  onHandle() {
    this.isHidden = !this.isHidden;
  }
}
