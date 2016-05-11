import { Directive, Output, EventEmitter, ContentChild } from '@angular/core';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartEvent } from './ChartEvent';

@Directive({
    selector: 'series'
})
export class ChartSeriesComponent {
    @ContentChild(ChartPointComponent) point: ChartPointComponent;
    @Output() click = new EventEmitter<ChartEvent>();
    @Output() afterAnimate = new EventEmitter<ChartEvent>();
    @Output() checkboxClick = new EventEmitter<ChartEvent>();
    @Output() hide = new EventEmitter<ChartEvent>();
    @Output() legendItemClick = new EventEmitter<ChartEvent>();
    @Output() mouseOver = new EventEmitter<ChartEvent>();
    @Output() mouseOut = new EventEmitter<ChartEvent>();
    @Output() show = new EventEmitter<ChartEvent>();
}