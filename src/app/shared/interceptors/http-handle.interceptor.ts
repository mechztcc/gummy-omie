import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ToasterService } from '../services/toastr/toaster.service';
import { Router } from '@angular/router';

export const httpHandleInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToasterService);
  const router = inject(Router);
  const token = localStorage.getItem('token') || '';


  req = req.clone({
    setHeaders: {
      Authorization: token,
    },
  });

  return next(req).pipe(
    catchError((error) => {
      const message = error?.error?.message ?? 'Algo inesperado aconteceu, tente novamente em breve';

      toastr.onHandle(message, 'error');
      return throwError(() => error);
    })
  );
};
