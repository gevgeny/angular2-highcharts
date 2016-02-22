/// <reference path="../typings/plain-highcharts.d.ts" />
import { Component, ElementRef, Injectable, ContentChild, Input } from 'angular2/core';
import * as Highcharts from 'highcharts/highcharts'
import { BaseChartComponent } from './BaseChartComponent'
import { ChartSeriesComponent } from './ChartSeriesComponent'

@Component({
    selector: 'chart',
    template: `<div></div><ng-content></ng-content>`
})
export class ChartComponent extends BaseChartComponent {
    @ContentChild(ChartSeriesComponent) series: ChartSeriesComponent;
    @Input('options') set options(opts: any) {
        this.initChart(opts)
    }
    ngAfterContentInit() {
        console.log('series', this.series);
    }
    constructor(element: ElementRef) {
        super(element);
        this.chartConstructor = Highcharts.Chart;
    }
}