/// <reference path="../typings/plain-highcharts.d.ts" />
import { Component, ElementRef } from 'angular2/core';
import * as Highcharts from 'highcharts/highstock'
import { BaseChartComponent } from './BaseChartComponent'


@Component({
    selector: 'stock-chart',
    template: ``
})
export class StockChartComponent extends BaseChartComponent {
    constructor(element: ElementRef) {
        super(element);
        this.chartConstructor = Highcharts.StockChart;
    }
}