///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import 'angular2/bundles/angular2-polyfills';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ChartComponent, StockChartComponent, ChartSeriesComponent} from '../lib';

@Component({
    selector: 'app',
    directives: [ChartComponent, StockChartComponent, ChartSeriesComponent],
    template: `
        <h2>angular2-highcharts examples</h2>
        <h3>chart</h3>
        <div>
            <chart [options]="options">
                <!--<series (click)="onClick()"></series>-->
            </chart>
        </div>
        <h3>stock chart</h3>
        <div>
            <!--<stock-chart [options]="stockOptions">-->

            <!--</stock-chart>-->
        </div>
    `
})
export class App {
    constructor() {
        this.options = {
            xAxis: {},
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                type: "line",
                allowPointSelect: true
            }]
        };
        this.stockOptions = {
            xAxis: {},
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                type: "line",
                allowPointSelect: true
            }]
        };
    }
    onClick() { console.log('second'); }
    options: Object;
    stockOptions: Object;
}


bootstrap(App);