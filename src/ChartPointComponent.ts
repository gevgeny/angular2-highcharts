import { Component, ElementRef, Input, Output, EventEmitter } from 'angular2/core';
import { BaseChartComponent } from './BaseChartComponent';
import { Directive } from "angular2/core";
import { ChartEvent } from './ChartEvent';
//import { ChartEventWrapper } from './ChartEventWrapper';

@Directive({
    selector: 'point'
})
export class ChartPointComponent {
    @Output() click = new EventEmitter<ChartEvent>();
    @Output() remove = new EventEmitter<ChartEvent>();
    @Output() select = new EventEmitter<ChartEvent>();
    @Output() unselect = new EventEmitter<ChartEvent>();
    @Output() mouseOver = new EventEmitter<ChartEvent>();
    @Output() mouseOut = new EventEmitter<ChartEvent>();
    @Output() update = new EventEmitter<ChartEvent>();
}