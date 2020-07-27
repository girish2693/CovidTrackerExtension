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
  public st:any=[];
  public selected=null;
  public val : any=[];
  public select = null;
  public flag = false;



  ngOnInit(): void {
    this.dserv.getState().subscribe(data=>this.st=data,error=>this.emsg=error)
    // this.dserv.getDistrict().subscribe(data=>this.res = data,error=>this.emsg=error);
  }

  public onChange(event){
    for( this.val of this.st){
      if(this.val.statecode==event){
        this.selected = this.val;
        this.flag = true;
      }
    }
  }

}
