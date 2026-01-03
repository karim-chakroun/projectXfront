import { HttpRequest, HttpHandlerFn, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const router = inject(Router); // inject dependencies in standalone style

  if (localStorage.getItem('token')) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });

    return next(clonedReq).pipe(
      tap({
        error: err => {
          if (err.status === 401) {
            localStorage.removeItem('token');
            router.navigateByUrl('/login');
          } else if (err.status === 403) {
            router.navigateByUrl('/accueil');
          }
        }
      })
    );
  } else {
    return next(req);
  }
};
