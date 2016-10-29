import * as highcharts from 'highcharts';

import { Highcharts } from './HighchartsWrapper';
import { Injectable } from '@angular/core';


@Injectable()
export class HighchartsService {
    Highcharts : highcharts.Static;

    constructor() {
        this.Highcharts = Highcharts;
    }
}
