import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  onLogin(payload: { email: string; password: string }): Observable<any> {
    return this.http.get<any>(`${environment.api}/auth/login`).pipe(map((resp) => resp.data));
  }
}
