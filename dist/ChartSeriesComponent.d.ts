import { EventEmitter } from '@angular/core';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartEvent } from './ChartEvent';
export declare class ChartSeriesComponent {
    point: ChartPointComponent;
    click: EventEmitter<ChartEvent>;
    afterAnimate: EventEmitter<ChartEvent>;
    checkboxClick: EventEmitter<ChartEvent>;
    hide: EventEmitter<ChartEvent>;
    legendItemClick: EventEmitter<ChartEvent>;
    mouseOver: EventEmitter<ChartEvent>;
    mouseOut: EventEmitter<ChartEvent>;
    show: EventEmitter<ChartEvent>;
}
