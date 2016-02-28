/// <reference path="../typings/highcharts.d.ts" />
import { Input, ElementRef, Directive, Output, EventEmitter, ContentChild } from 'angular2/core';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartEventHelper } from './ChartEventHelper';
import { Highcharts } from './Highcharts';
import { ChartEvent } from './ChartEvent';
//import { ChartEventWrapper } from './ChartEventWrapper';

@Directive({
    selector: 'chart'
})
export class BaseChartComponent {
    @ContentChild(ChartSeriesComponent) series: ChartSeriesComponent;
    @Input() type: string = 'Chart';
    @Input() options: HighchartsOptions;
    @Output() click = new EventEmitter<ChartEvent>();
    @Output() addSeries = new EventEmitter<ChartEvent>();
    @Output() afterPrint = new EventEmitter<ChartEvent>();
    @Output() beforePrint = new EventEmitter<ChartEvent>();
    @Output() drilldown = new EventEmitter<ChartEvent>();
    @Output() drillup = new EventEmitter<ChartEvent>();
    @Output() load = new EventEmitter<ChartEvent>();
    @Output() redraw = new EventEmitter<ChartEvent>();
    @Output() selection = new EventEmitter<ChartEvent>();

    ngAfterContentInit() {
        console.log('init chart', this.series);
        this.options.chart = this.options.chart || {};
        this.options.chart.renderTo = this.element.nativeElement;
        ChartEventHelper.initEvents(this, this.series, this.series ? this.series.point : null, this.options);
        if (!Highcharts[this.type]) {
            throw new Error(`${this.type} is unknown chart type.`);
        }
        this.chart = new Highcharts[this.type](this.options);
    }

    chart: HighchartsChartObject;
    element: ElementRef;

    constructor(element: ElementRef) {
        this.element = element;
    }

}
