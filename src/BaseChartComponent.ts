/// <reference path="../typings/highcharts.d.ts" />
import { Input, ElementRef, Component, Output, EventEmitter, ContentChild } from 'angular2/core';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartEventHelper } from './ChartEventHelper';
import { Highcharts } from './Highcharts';
//import { ChartEventWrapper } from './ChartEventWrapper';

@Component({
    selector: 'chart',
    template: `<div></div><ng-content></ng-content>`
})
export class BaseChartComponent {
    @ContentChild(ChartSeriesComponent) series: ChartSeriesComponent;
    @Input() type: string = 'Chart';
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

    ngAfterContentInit() {
        console.log('init chart', this.series);
        this.options.chart = this.options.chart || {};
        this.options.chart.renderTo = this.element.nativeElement.children[0];
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
