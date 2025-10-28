import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { LogCardComponent } from '../../components/log-card/log-card.component';
import { HistoryLog } from '../../shared/interfaces/history-logs.interface';
import { LogsService } from '../../shared/services/logs.service';
import { LogsStore } from '../../shared/stores/logs.store';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logs-page',
  imports: [NgxPaginationModule, FontAwesomeModule, LogCardComponent],
  templateUrl: './logs-page.component.html',
  styleUrl: './logs-page.component.scss',
})
export class LogsPageComponent implements OnInit {
  isLoading: boolean = false;

  data: HistoryLog[] = [];

  p: any;

  store = inject(LogsStore);
  icons: any = {
    load: faCircleNotch
  }

  constructor(private logsService: LogsService) {}

  ngOnInit(): void {
    if(this.store.data().length == 0) {
      this.onListLogs();
    }
  }

  onListLogs() {
    this.p = null;
    this.isLoading = true;
    this.logsService
      .onListLogs()
      .subscribe((data) => {
        this.data = data;
        this.store.setData(data);
        
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
