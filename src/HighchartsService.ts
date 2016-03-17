import { Highcharts } from './Highcharts';
import { Injectable } from 'angular2/core';


@Injectable()
export class HighchartsService {
    Highcharts : HighchartsStatic;

    constructor() {
        this.Highcharts = Highcharts;
    }
}
