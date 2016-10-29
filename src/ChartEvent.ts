import * as highcharts from 'highcharts'

export class ChartEvent {
    originalEvent : Event;
    context : highcharts.ChartObject | highcharts.SeriesObject | highcharts.PointObject | highcharts.AxisObject;
    constructor (event, context) {
        this.originalEvent = event;
        this.context = context;
    }
}