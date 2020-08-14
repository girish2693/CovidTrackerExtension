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
  public st : any = [];
  public selst = null ; 
  public seldt = null;
  public val : any;
  public vald : Idistr;
  public selects = null;
  public selectd = null;
  public gs:number=0;
  public stt="Andhra Pradesh";
  public res:Idistr[];
  public flags = false;
  public flagd = false;





  ngOnInit(): void {
    this.dserv.getState().subscribe(data=>this.st=data,error=>this.emsg=error)
    
  }

  public onChange(event){
    for( this.val of this.st){
      if(this.val.state==event){
        this.selst = this.val;
        this.dserv.getDistrict(this.gs).subscribe(data=>this.res = data,error=>this.emsg=error);
        this.flags=true;
      }
      this.gs++;
    }
    this.gs=0;
  }

  public onChanged(eventd){
    for( this.vald of this.res){
      if(this.vald.district==eventd){
        this.seldt = this.vald;
        this.flagd = true;
      }
    }
  }

}
