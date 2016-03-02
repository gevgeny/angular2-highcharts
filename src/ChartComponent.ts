/// <reference path="../typings/highcharts.d.ts" />
/// <reference path="../node_modules/angular2/typings/browser.d.ts"" />

import { Input, ElementRef, Component, Output, EventEmitter, ContentChild } from 'angular2/core';
import { ChartSeriesComponent } from './ChartSeriesComponent';

import { ChartEvent } from './ChartEvent';
import { initChart } from './initChart';
import { createBaseOpts } from "./createBaseOpts";

@Component({
    selector: 'chart',
    template: ''
})
export class ChartComponent {
    @ContentChild(ChartSeriesComponent) series: ChartSeriesComponent;
    @Output() create = new EventEmitter<HighchartsChartObject>();
    @Output() click = new EventEmitter<ChartEvent>();
    @Output() addSeries = new EventEmitter<ChartEvent>();
    @Output() afterPrint = new EventEmitter<ChartEvent>();
    @Output() beforePrint = new EventEmitter<ChartEvent>();
    @Output() drilldown = new EventEmitter<ChartEvent>();
    @Output() drillup = new EventEmitter<ChartEvent>();
    @Output() load = new EventEmitter<ChartEvent>();
    @Output() redraw = new EventEmitter<ChartEvent>();
    @Output() selection = new EventEmitter<ChartEvent>();
    chart: HighchartsChartObject;
    element: ElementRef;
    private userOpts: any;
    private baseOpts: any;
    @Input() type: string = 'Chart';
    @Input() set options(opts : HighchartsOptions) {
        this.userOpts = opts;
        this.init();
    };

    private init() {
        if (this.userOpts && this.baseOpts) {
            this.chart = initChart(this.userOpts, this.baseOpts, this.type);
            this.create.emit(this.chart);
        }
    }

    ngAfterViewInit() {
        console.log('ngAfterViewChecked');
        this.baseOpts = createBaseOpts(this, this.series, this.series ? this.series.point : null, this.element.nativeElement);
        console.log('base opts', this.baseOpts);
        this.init();
    }

    constructor(element: ElementRef) {
        this.element = element;
    }
}
