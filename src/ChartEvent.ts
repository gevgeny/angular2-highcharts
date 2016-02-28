export class ChartEvent {
    originalEvent : Event;
    context : HighchartsChartObject | HighchartsSeriesObject | HighchartsPointObject | HighchartsAxisObject;
    constructor (event, context) {
        this.originalEvent = event;
        this.context = context;
    }
}