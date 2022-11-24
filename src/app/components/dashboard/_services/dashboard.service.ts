import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { handleError, header } from 'src/app/_tools/header.tool';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getProjects() {
    return this.http.get<any>(
      `${environment.api}projects`, { headers: header }
    ).pipe(map((res: any) => { return res; }),
      catchError(handleError)
    );
  }

  addProject(payload: any) {
    // public name: string;
    // public location?: string;
    // public init_date: Date;
    // public finish_date: Date;
    return this.http.post<any>(
      `${environment.api}projects`, payload, { headers: header }
    ).pipe(map((res: any) => { return res; }),
      catchError(handleError)
    );
  }



  /**Create stock of machinary */
  asignMachine(payload: any) {
    // project: number;
    // stock: number;
    return this.http.post<any>(
      `${environment.api}projects/asign-machine`, payload, { headers: header }
    ).pipe(map((res: any) => { return res; }),
      catchError(handleError)
    );
  }

  /**Obtain all list of machinaries */
  findAllMachinaries() {
    return this.http.get<any>(
      `${environment.api}machineries`, { headers: header }
    ).pipe(map((res: any) => { return res; }),
      catchError(handleError)
    );
  }

  findAllStock(query: { status?: string; machinary?: number; }) {
    return this.http.get<any>(
      `${environment.api}machineries/stock`, { params: query }
    ).pipe(map((res: any) => { return res; }),
      catchError(handleError)
    );
  }

  findAllStockByMachinary(query: { id: number }) {
    return this.http.get<any>(
      `${environment.api}machineries/detail`, { params: query }
    ).pipe(map((res: any) => { return res; }),
      catchError(handleError)
    );
  }

  

}
