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

  getState(){
    return this._http.get("https://api.covid19india.org/v2/state_district_wise.json").pipe(map(res=>res),catchError(this.errorHandler));
  }

  // getDistrict(): Observable<Idistr[]>{
  //   return this._http.get<Idistr[]>("https://api.covid19india.org/v2/state_district_wise.json").pipe(map(res=> res),catchError(this.errorHandler));
  // }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message||'server Error');
  }
}
