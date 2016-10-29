/// <reference types="highcharts" />
import * as highcharts from 'highcharts';
export declare class ChartEvent {
    originalEvent: Event;
    context: highcharts.ChartObject | highcharts.SeriesObject | highcharts.PointObject | highcharts.AxisObject;
    constructor(event: any, context: any);
}
