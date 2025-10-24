import { Component, input } from '@angular/core';
import { Config } from '../../../../shared/interfaces/custom-table.interface';
import { DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-failed-jobs',
  imports: [DatePipe, NgxPaginationModule, FontAwesomeModule],
  templateUrl: './failed-jobs.component.html',
  styleUrl: './failed-jobs.component.scss',
})
export class FailedJobsComponent {
  data = input<{ id: number; name: string; queue: string; timestamp: string; failedReason: string }[]>([]);
  isLoading = input<boolean>();

  p: any;

  icons: any = {
    load: faCircleNotch
  }

  table: Config = {
    cols: ['id', 'job', 'fila', 'falhou em', 'exceção', 'ações'],
    rows: [
      {
        id: 1,
        job: 'teste',
        queue: 'fila',
        createdAt: new Date().toString(),
        msg: 'Request failed with status code 500',
      },
    ],
  };
}
