import { EventEmitter } from '@angular/core';
import { ChartEvent } from './ChartEvent';
export declare class ChartXAxisComponent {
    afterSetExtremes: EventEmitter<ChartEvent>;
    pointInBreak: EventEmitter<ChartEvent>;
    setExtremes: EventEmitter<ChartEvent>;
}
