/// <reference path="../typings/highcharts.d.ts" />
/// <reference path="../typings/highstock.d.ts" />
import { Component, ElementRef } from 'angular2/core';
import * as Highcharts from 'highcharts';
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