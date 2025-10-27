import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  onListHistory(): Observable<{ total_orders: number; total_logs: number; successful_integrations: number }> {
    return this.http.get<any>(`${environment.api}/history-logs/stats`).pipe(map((resp) => resp.data));
  }

  onListQueueStats(): Observable<any> {
    return this.http.get<any>(`${environment.api}/queues/stats`).pipe(map((resp) => resp.data));
  }

  onListFailedJobs(): Observable<any> {
    return this.http
      .get<any>(`${environment.api}/queues/omie/jobs?status=failed&start=0&end=50`)
      .pipe(map((resp) => resp.data));
  }

  onListWaitingJobs(): Observable<any> {
    return this.http
      .get<any>(`${environment.api}/queues/omie/jobs?status=waiting&start=0&end=50`)
      .pipe(map((resp) => resp.data));
  }

  onReintegrateSingle(payload: { shopify_id: number }): Observable<any> {
    return this.http.post<any>(`${environment.api}/orders/reintegrate`, payload).pipe(map((resp) => resp.data));
  }

  onReintegrateMultiple(payload: { shopify_ids: string[] }): Observable<any> {
    return this.http.post<any>(`${environment.api}/orders/reintegrate-multiple`, payload).pipe(map((resp) => resp.data));
  }
}
