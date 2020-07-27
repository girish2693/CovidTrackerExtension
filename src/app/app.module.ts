import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidcesService } from "./covidces.service";
import { CovidTotalComponent } from './covid-total/covid-total.component';
import { CovidDistrictComponent } from './covid-district/covid-district.component';



@NgModule({
  declarations: [
    AppComponent,
    CovidTotalComponent,
    CovidDistrictComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ CovidcesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
