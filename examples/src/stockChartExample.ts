/**
 * Created by egluhotorenko on 4/10/16.
 */
import {Component} from '../../node_modules/@angular/core';
import { CHART_DIRECTIVES } from '../../index';
import { Jsonp } from '../../node_modules/@angular/http';

@Component({
    selector: 'stock-chart-example',
    directives: [CHART_DIRECTIVES],
    template: `<chart type="StockChart" [options]="options"></chart>`
})
export class StockChartExample {
    constructor(jsonp : Jsonp) {
        jsonp.request('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=JSONP_CALLBACK').subscribe(res => {
            this.options = {
                title : { text : 'AAPL Stock Price' },
                series : [{
                    name : 'AAPL',
                    data : res.json(),
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            };
        });
    }
    options: Object;
}