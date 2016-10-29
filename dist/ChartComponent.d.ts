/// <reference types="highcharts" />
import * as highcharts from 'highcharts';
import { ElementRef, EventEmitter } from '@angular/core';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { HighchartsService } from './HighchartsService';
import { ChartEvent } from './ChartEvent';
export declare class ChartComponent {
    series: ChartSeriesComponent;
    xAxis: ChartXAxisComponent;
    yAxis: ChartYAxisComponent;
    create: EventEmitter<highcharts.ChartObject>;
    click: EventEmitter<ChartEvent>;
    addSeries: EventEmitter<ChartEvent>;
    afterPrint: EventEmitter<ChartEvent>;
    beforePrint: EventEmitter<ChartEvent>;
    drilldown: EventEmitter<ChartEvent>;
    drillup: EventEmitter<ChartEvent>;
    load: EventEmitter<ChartEvent>;
    redraw: EventEmitter<ChartEvent>;
    selection: EventEmitter<ChartEvent>;
    chart: highcharts.ChartObject;
    element: ElementRef;
    highchartsService: HighchartsService;
    private userOpts;
    private baseOpts;
    type: string;
    options: highcharts.Options;
    private init();
    ngAfterViewInit(): void;
    constructor(element: ElementRef, highchartsService: HighchartsService);
}
