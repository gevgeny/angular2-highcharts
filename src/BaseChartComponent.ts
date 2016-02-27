///<reference path="../typings/highcharts.d.ts"/>

import { Input, ElementRef, Injectable, Output, EventEmitter, ContentChild } from 'angular2/core';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartEventHelper } from './ChartEventHelper';
//import { ChartEventWrapper } from './ChartEventWrapper';

export class BaseChartComponent {
    @ContentChild(ChartSeriesComponent) series: ChartSeriesComponent;
    @Input() options: HighchartsOptions;
    @Output() click = new EventEmitter<HighchartsChartClickEvent>();
    @Output() addSeries = new EventEmitter<HighchartsAddSeriesEvent>();
    @Output() afterPrint = new EventEmitter<Event>();
    @Output() beforePrint = new EventEmitter<Event>();
    @Output() drilldown = new EventEmitter<HighchartsChartDrilldownEvent>();
    @Output() drillup = new EventEmitter<Event>();
    @Output() load = new EventEmitter<Event>();
    @Output() redraw = new EventEmitter<Event>();
    @Output() selection = new EventEmitter<HighchartsChartSelectionEvent>();
//
    //ngAfterContentInit() {
    //    console.log('series', this.series);
    //}
    ngAfterContentInit() {
        console.log('init chart', this.series);
        this.options.chart = this.options.chart || {};
        this.options.chart.renderTo = this.element.nativeElement.children[0];
        ChartEventHelper.setChartEvents(this, this.options);
        if (this.series) {
            ChartEventHelper.setSeriesEvents(this.series, this.options);
        }
        if (this.series.point) {
            ChartEventHelper.setPointEvents(this.series.point, this.options);
        }
        this.chart = new this.chartConstructor(this.options);
    }


    chart: HighchartsChartObject;
    chartConstructor: any;
    element: ElementRef;
    protected initChart(opts: HighchartsOptions) {

    }
    constructor(element: ElementRef) {
        this.element = element;
    }

}
