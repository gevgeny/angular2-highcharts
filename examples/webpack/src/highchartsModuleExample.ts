import {Component} from '../../../node_modules/@angular/core';
import { Jsonp } from '../../../node_modules/@angular/http';

declare var require: any;
//const Highcharts = require('../../node_modules/highcharts/highstock.src');
//const Highcharts3d = require('../../node_modules/highcharts/highcharts-3d.js');

//Highcharts3d(Highcharts);

@Component({
    selector: 'highcharts-module-example',
    template: `<chart [options]="options"></chart>`
})
export class HighchartsModuleExample {
    constructor() {
        this.options = {
            chart: {
                type: 'column',
                margin: 75,
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 15,
                    depth: 50
                }
            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }]
        };
    }
    options: Object;
}