export declare class ChartEventEmitter {
    static emitChartEvent(eventName: any): void;
    static emitSeriesEvent(eventName: any): void;
    static emitPointEvent(eventName: any): void;
    static emitXAxisEvent(eventName: any): void;
    static emitYAxisEvent(eventName: any): void;
}
export declare class HighchartsChartObjectMock {
    constructor(_opts: any);
}
export declare class HighchartsServiceMock {
    Highcharts: Object;
    constructor();
}
