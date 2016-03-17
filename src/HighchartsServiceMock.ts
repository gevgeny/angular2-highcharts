import { Injectable } from 'angular2/core';

export class HighchartsChartObjectMock { }

@Injectable()
export class HighchartsServiceMock {
    Highcharts : Object;
    constructor() {

        this.Highcharts = {
            foo : 42,
            Chart : HighchartsChartObjectMock
        };
    }
}
