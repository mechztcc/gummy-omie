import { Component } from '@angular/core';
import { Config } from '../../../../shared/interfaces/custom-table.interface';
import { DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-failed-jobs',
  imports: [DatePipe, NgxPaginationModule],
  templateUrl: './failed-jobs.component.html',
  styleUrl: './failed-jobs.component.scss',
})
export class FailedJobsComponent {
  p: any;
  
  table: Config = {
    cols: ['id', 'job', 'fila', 'falhou em', 'exceção', 'ações'],
    rows: [
      {
        id: 1,
        job: 'teste',
        queue: 'fila',
        createdAt: new Date().toString(),
        msg: 'Request failed with status code 500'
      },
    ],
  };
}
