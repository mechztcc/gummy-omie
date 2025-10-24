import { Component, input } from '@angular/core';
import { Config } from '../../../../shared/interfaces/custom-table.interface';
import { DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pending-jobs',
  imports: [DatePipe, NgxPaginationModule, FontAwesomeModule],
  templateUrl: './pending-jobs.component.html',
  styleUrl: './pending-jobs.component.scss',
})
export class PendingJobsComponent {
  data = input<{ id: number; name: string; queue: string; timestamp: string; failedReason: string }[]>([]);
  isLoading = input<boolean>();

  icons: any = {
    load: faCircleNotch
  }

  p: any;
  
  table: Config = {
    cols: ['id', 'job', 'fila', 'tentativas', 'criado em', 'Ações'],
    rows: [
      {
        id: 1,
        job: 'teste',
        queue: 'fila',
        retry: 0,
        createdAt: new Date().toString(),
      },
      {
        id: 2,
        job: 'teste',
        queue: 'fila',
        retry: 0,
        createdAt: new Date().toString(),
      },
    ],
  };
}
