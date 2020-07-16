import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Istat } from './stat';
import { Observable, throwError } from 'rxjs';
import { map,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidcesService {

  public getCovid():Observable<Istat>{
      return this._http.get<Istat>("https://api.covid19india.org/data.json").pipe(map(res=> res["statewise"][0]),catchError(this.errorHandler));
  }

  errorHandler(_error:HttpErrorResponse){
    return throwError(_error.message||'server Error');
  }

  constructor(private _http: HttpClient) { }
}
