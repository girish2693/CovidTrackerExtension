import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Idistr } from './distri';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(private _http: HttpClient) { }

  getDistrict(state,dist): Observable<Idistr>{
    return this._http.get<Idistr>("https://api.covid19india.org/data.json").pipe(map(res=> res[state]["districtData"][dist]),catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message||'server Error');
  }
}
