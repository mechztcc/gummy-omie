import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  constructor(private http: HttpClient) {}

  onListLogs(): Observable<any[]> {
    return this.http.get<any>(`${environment.api}/history-logs?page=1&limit=5000`).pipe(
      map((resp) => {
        const data = resp.data;

        const grouped = Object.values(
          data.reduce((acc: any, item: any) => {
            const id = item.shopify_id;

            if (!acc[id]) {
              acc[id] = {
                shopify_id: id,
                logs: [],
              };
            }

            acc[id].logs.push(item);
            acc[id].logs.sort((a: any, b: any) => a.step - b.step);

            return acc;
          }, {})
        );

        return grouped;
      })
    );
  }

  onFindOrderLogs(shopifyId: string): Observable<any[]> {
    return this.http.get<any>(`${environment.api}/history-logs?page=1&limit=5000&shopify_id=${shopifyId}`).pipe(
      map((resp) => {
        const data = resp.data;

        const grouped = Object.values(
          data.reduce((acc: any, item: any) => {
            const id = item.shopify_id;

            if (!acc[id]) {
              acc[id] = {
                shopify_id: id,
                logs: [],
              };
            }

            acc[id].logs.push(item);
            acc[id].logs.sort((a: any, b: any) => a.step - b.step);

            return acc;
          }, {})
        );

        return grouped;
      })
    );
  }
}
