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

  getState() {
    return this._http.get("https://api.covid19india.org/v2/state_district_wise.json").pipe(map(res => res), catchError(this.errorHandler));
  }

  // getDistrict(stt){
  //   return this._http.get("https://api.covid19india.org/state_district_wise.json").pipe(map(res=>{if( res[stt])console.log(res[stt].districtData) ;else console.log("none");}),catchError(this.errorHandler));
  // }
  // getDistrict(){
  //   return this._http.get("https://api.covid19india.org/v2/state_district_wise.json").pipe(map(res=>res[2].districtData.map(dt=>console.log(dt.district))),catchError(this.errorHandler));
  // }
  // getDistrict(stt) {
  //   return this._http.get<any[]>("https://api.covid19india.org/v2/state_district_wise.json").pipe(map(res => res.forEach(element => {
  //     if (element.state == stt) element.districtData.map(dt =>dt.district);
  //   })), catchError(this.errorHandler));
  // }

  // getDistrict(stt): Observable<Idistr[]> {
  //   return this._http.get<Idistr[]>("https://api.covid19india.org/v2/state_district_wise.json").pipe(map(res => res[stt].districtData.map(dt=>console.log(dt.district))), catchError(this.errorHandler));
  // }

  getDistrict(stt): Observable<Idistr[]> {
    return this._http.get<Idistr[]>("https://api.covid19india.org/v2/state_district_wise.json").pipe(map(res => res[stt]["districtData"]), catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {  
    return throwError(error.message || 'server Error');
  }
}
