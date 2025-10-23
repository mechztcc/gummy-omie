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
}
