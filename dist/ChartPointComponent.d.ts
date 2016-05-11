import { EventEmitter } from '@angular/core';
import { ChartEvent } from './ChartEvent';
export declare class ChartPointComponent {
    click: EventEmitter<ChartEvent>;
    remove: EventEmitter<ChartEvent>;
    select: EventEmitter<ChartEvent>;
    unselect: EventEmitter<ChartEvent>;
    mouseOver: EventEmitter<ChartEvent>;
    mouseOut: EventEmitter<ChartEvent>;
    update: EventEmitter<ChartEvent>;
}
