import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { CustomTableComponent } from '../../../../shared/components/custom-table/custom-table.component';
import { PendingJobsComponent } from '../../components/pending-jobs/pending-jobs.component';
import { FailedJobsComponent } from '../../components/failed-jobs/failed-jobs.component';

@Component({
  selector: 'app-monitoring-queues',
  imports: [NgClass, PendingJobsComponent, FailedJobsComponent],
  templateUrl: './monitoring-queues.component.html',
  styleUrl: './monitoring-queues.component.scss',
})
export class MonitoringQueuesComponent {
  items: { label: string; value: string; color: string; border: string }[] = [
    {
      label: 'Pendentes',
      value: '0',
      color: 'bg-green-200',
      border: 'border-green-300',
    },
    {
      label: 'Em processamento',
      value: '0',
      color: 'bg-blue-200',
      border: 'border-blue-300',
    },
    {
      label: 'Agendados',
      value: '0',
      color: 'bg-yellow-200',
      border: 'border-yellow-300',
    },
    {
      label: 'Falhas',
      value: '0',
      color: 'bg-red-200',
      border: 'border-red-300',
    },
  ];
}
