import { EventEmitter } from '@angular/core';
import { ChartEvent } from './ChartEvent';
export declare class ChartYAxisComponent {
    afterSetExtremes: EventEmitter<ChartEvent>;
    pointInBreak: EventEmitter<ChartEvent>;
    setExtremes: EventEmitter<ChartEvent>;
}
