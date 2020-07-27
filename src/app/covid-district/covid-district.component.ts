import { Component, OnInit } from '@angular/core';
import { DistrictService } from '../district.service';
import { Idistr } from '../distri';

@Component({
  selector: 'app-covid-district',
  templateUrl: './covid-district.component.html',
  styleUrls: ['./covid-district.component.css']
})
export class CovidDistrictComponent implements OnInit {

  constructor(public dserv: DistrictService) { }

  public res : Idistr[];
  public emsg;



  ngOnInit(): void {
    this.dserv.getDistrict().subscribe(data=>this.res = data,error=>this.emsg=error);
  }

}
