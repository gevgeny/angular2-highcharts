import { ElementRef, EventEmitter } from '@angular/core';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { HighchartsService } from './HighchartsService';
import { ChartEvent } from './ChartEvent';
export declare class ChartComponent {
    series: ChartSeriesComponent;
    create: EventEmitter<HighchartsChartObject>;
    click: EventEmitter<ChartEvent>;
    addSeries: EventEmitter<ChartEvent>;
    afterPrint: EventEmitter<ChartEvent>;
    beforePrint: EventEmitter<ChartEvent>;
    drilldown: EventEmitter<ChartEvent>;
    drillup: EventEmitter<ChartEvent>;
    load: EventEmitter<ChartEvent>;
    redraw: EventEmitter<ChartEvent>;
    selection: EventEmitter<ChartEvent>;
    chart: HighchartsChartObject;
    element: ElementRef;
    highchartsService: HighchartsService;
    private userOpts;
    private baseOpts;
    type: string;
    options: HighchartsOptions;
    private init();
    ngAfterViewInit(): void;
    constructor(element: ElementRef, highchartsService: HighchartsService);
}
