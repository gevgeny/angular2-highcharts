import { Directive, Output, EventEmitter } from '@angular/core';
import { ChartEvent } from './ChartEvent';

@Directive({
    selector: 'point'
})
export class ChartPointComponent {
    @Output() click = new EventEmitter<ChartEvent>();
    @Output() drag = new EventEmitter<ChartEvent>();
    @Output() dragStart = new EventEmitter<ChartEvent>();
    @Output() drop = new EventEmitter<ChartEvent>();
    @Output() remove = new EventEmitter<ChartEvent>();
    @Output() select = new EventEmitter<ChartEvent>();
    @Output() unselect = new EventEmitter<ChartEvent>();
    @Output() mouseOver = new EventEmitter<ChartEvent>();
    @Output() mouseOut = new EventEmitter<ChartEvent>();
    @Output() update = new EventEmitter<ChartEvent>();
}
