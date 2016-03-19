import { Injectable } from 'angular2/core';

let opts;

export class ChartEventEmitter {
    static emitChartEvent(eventName) {
        opts.chart.events[eventName]();
    }
}

export class HighchartsChartObjectMock {
    constructor (_opts) {
        opts = _opts;
        //HighchartsServiceMock.highchartsChartObjectMock = this;
    }
}

@Injectable()
export class HighchartsServiceMock {
    //static highchartsChartObjectMock : HighchartsChartObjectMock;
    Highcharts : Object;
    constructor() {

        this.Highcharts = {
            Chart : HighchartsChartObjectMock,
            StockChart : HighchartsChartObjectMock
        };
    }
}
