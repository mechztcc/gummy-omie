import { Component } from '@angular/core';
import { Config } from '../../../../shared/interfaces/custom-table.interface';
import { DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-pending-jobs',
  imports: [DatePipe, NgxPaginationModule],
  templateUrl: './pending-jobs.component.html',
  styleUrl: './pending-jobs.component.scss',
})
export class PendingJobsComponent {
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
