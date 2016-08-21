import { EventEmitter } from '@angular/core';
import { ChartEvent } from './ChartEvent';
export declare class ChartXAxisComponent {
    afterBreaks: EventEmitter<ChartEvent>;
    afterSetExtremes: EventEmitter<ChartEvent>;
    pointBreak: EventEmitter<ChartEvent>;
    pointInBreak: EventEmitter<ChartEvent>;
    setExtremes: EventEmitter<ChartEvent>;
}
