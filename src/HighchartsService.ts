import { Highcharts } from './Highcharts';
import { Injectable } from 'angular2/core';


@Injectable()
export class HighchartsService {
    createHighchartsChartObject (type : string, opts : Object) : HighchartsChartObject {
        return new Highcharts[type](opts);
    }
}
