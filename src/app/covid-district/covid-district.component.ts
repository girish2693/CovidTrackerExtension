import { Component, OnInit } from '@angular/core';
import { DistrictService } from '../district.service';
import { Idistr } from '../distri';
import { SelectorListContext } from '@angular/compiler';

@Component({
  selector: 'app-covid-district',
  templateUrl: './covid-district.component.html',
  styleUrls: ['./covid-district.component.css']
})
export class CovidDistrictComponent implements OnInit {

  constructor(public dserv: DistrictService) { }

  public emsg;
  public st:any=[];
  public selst=null;
  public val : any;
  public select = null;
  public gs:number;
  public stt="Andhra Pradesh";
  public res:any=[];





  ngOnInit(): void {
    this.dserv.getState().subscribe(data=>this.st=data,error=>this.emsg=error)
    
  }

  public onChange(event){
    for( this.val of this.st){
      if(this.val.state==event){
        this.selst = this.val;
        this.dserv.getDistrict(this.val.state).subscribe(data=>this.res = data,error=>this.emsg=error);
      }
    }
  }
  // public onChanged(event){
  //   alert("ok"+ event);
  // }

}
