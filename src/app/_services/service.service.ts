import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { handleError, header } from '../_tools/header.tool';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(
    private http: HttpClient,
    private _storage: StorageService,
    private _router: Router,
    private _auth: AuthService
  ) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(
      `${environment.api}users/login`, data, { headers: header }
    ).pipe(
      map((res: any) => {
        this._storage.setItem("user", res);
        this._auth.setUser();
        setTimeout(() => {
          this._router.navigate(["/dashboard"]);
        }, 1000);
        return res;
      }),
      catchError(handleError)
    )
  }

}
