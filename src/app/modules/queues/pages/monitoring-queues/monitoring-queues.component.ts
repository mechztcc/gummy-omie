import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../../../dashboard/shared/services/dashboard.service';
import { FailedJobsComponent } from '../../components/failed-jobs/failed-jobs.component';
import { PendingJobsComponent } from '../../components/pending-jobs/pending-jobs.component';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-monitoring-queues',
  imports: [NgClass, PendingJobsComponent, FailedJobsComponent, FontAwesomeModule],
  templateUrl: './monitoring-queues.component.html',
  styleUrl: './monitoring-queues.component.scss',
})
export class MonitoringQueuesComponent implements OnInit {
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

  icons: any = {
    load: faCircleNotch,
  };
  dashboardService = inject(DashboardService);

  isLoading: boolean = false;
  isLoadingFailed: boolean = false;
  isLoadingWaiting: boolean = false;

  failedJobs: any[] = [];
  waitingJobs: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.onList();
    this.onListFailedJobs();
    this.onListWaitingJobs();
  }

  onList() {
    this.isLoading = true;
    this.dashboardService
      .onListQueueStats()
      .subscribe((response) => {
        const { omie } = response;

        this.items[0].value = omie.delayed;
        this.items[1].value = omie.active;
        this.items[2].value = omie.waiting;
        this.items[3].value = omie.failed;
      })
      .add(() => {
        this.isLoading = false;
      });
  }

  onListFailedJobs() {
    this.isLoadingFailed = true;
    this.dashboardService
      .onListFailedJobs()
      .subscribe((data) => {
        this.failedJobs = data;
      })
      .add(() => {
        this.isLoadingFailed = false;
      });
  }

  onListWaitingJobs() {
    this.isLoadingWaiting = true;
    this.dashboardService
      .onListWaitingJobs()
      .subscribe((data) => {
        this.waitingJobs = data;
        console.log(data);
      })
      .add(() => {
        this.isLoadingWaiting = false;
      });
  }
}
