import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ChartModule } from 'angular2-highcharts';

const highstock: Object = require('highcharts/highstock');
const chartModule: any = ChartModule.forRoot(highstock);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    chartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
