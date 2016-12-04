/// <reference types="highcharts" />
import * as highcharts from 'highcharts';
export declare abstract class HighchartsService {
    Highcharts: highcharts.Static;
}
export declare class ClassicModeHighchartsService extends HighchartsService {
    constructor();
}
export declare class StyledModeHighchartsService extends HighchartsService {
    constructor();
}
