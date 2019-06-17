export class ChartEvent {
    originalEvent : Event;
    context : any;
    constructor (event, context) {
        this.originalEvent = event;
        this.context = context;
    }
}