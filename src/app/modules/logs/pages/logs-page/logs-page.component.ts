import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { LogCardComponent } from '../../components/log-card/log-card.component';
import { HistoryLog } from '../../shared/interfaces/history-logs.interface';
import { LogsService } from '../../shared/services/logs.service';
import { LogsStore } from '../../shared/stores/logs.store';
import { faBoxes, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { CustomInputComponent } from '../../../../shared/components/custom-input/custom-input.component';
import { FormBuilder, FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-logs-page',
  imports: [
    NgxPaginationModule,
    FontAwesomeModule,
    LogCardComponent,
    CustomInputComponent,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
  ],
  templateUrl: './logs-page.component.html',
  styleUrl: './logs-page.component.scss',
})
export class LogsPageComponent implements OnInit {
  isLoading: boolean = false;

  data: HistoryLog[] = [];

  p: any;

  store = inject(LogsStore);
  icons: any = {
    load: faCircleNotch,
    box: faBoxes,
  };

  form: FormGroup;

  constructor(private logsService: LogsService, private fb: FormBuilder) {
    this.form = this.fb.group({
      orderId: [''],
    });
  }

  ngOnInit(): void {
    if (this.store.data().length == 0) {
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



  onFindOrder() {
    this.isLoading = true;
    const orderId = this.form.get('orderId')?.value;
    const payload = orderId?.trim();

    this.logsService
      .onFindOrderLogs(payload)
      .subscribe((data) => {
        this.data = data;
        this.store.setData(data);
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
