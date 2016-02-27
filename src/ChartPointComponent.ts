import { Component, ElementRef, Input, Output, EventEmitter } from 'angular2/core';
import { BaseChartComponent } from './BaseChartComponent';
import { ChartComponent } from './ChartComponent';
import {Directive} from "angular2/core";
//import { ChartEventWrapper } from './ChartEventWrapper';

@Directive({
    selector: 'point'
})
export class ChartPointComponent {
    @Output() click = new EventEmitter<Event>();
    @Output() remove = new EventEmitter<Event>();
    @Output() select = new EventEmitter<Event>();
    @Output() unselect = new EventEmitter<Event>();
    @Output() mouseOver = new EventEmitter<Event>();
    @Output() mouseOut = new EventEmitter<Event>();
    @Output() update = new EventEmitter<Event>();
}