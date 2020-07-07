import { Component, OnInit } from '@angular/core';
import { CovidcesService } from '../covidces.service';
import { Istat } from '../stat';

@Component({
  selector: 'app-covid-total',
  templateUrl: './covid-total.component.html',
  styleUrls: ['./covid-total.component.css']
})
export class CovidTotalComponent implements OnInit {

  constructor(public cservice:CovidcesService) { }

  public rt : Istat;
  public errorMsg; 
  public date = new Date();

  ngOnInit(): void {
    this.cservice.getCovid().subscribe(data=>this.rt = data,error=>this.errorMsg=error);
  }

}
