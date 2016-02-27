import { Component, ElementRef, Input, Output, EventEmitter, ContentChild } from 'angular2/core';
//import { BaseChartComponent } from './BaseChartComponent';
//import { ChartComponent } from './ChartComponent';
//import { ChartEventWrapper } from './ChartEventWrapper';
import { ChartPointComponent } from './ChartPointComponent';
import {Directive} from "angular2/core";

@Directive({
    selector: 'series'
})
export class ChartSeriesComponent {
    @ContentChild(ChartPointComponent) point: ChartPointComponent;
    @Output() click = new EventEmitter<HighchartsAreaClickEvent>();
    @Output() afterAnimate = new EventEmitter<Event>();
    @Output() checkboxClick = new EventEmitter<HighchartsAreaCheckboxEvent>();
    @Output() hide = new EventEmitter<Event>();
    @Output() legendItemClick = new EventEmitter<Event>();
    @Output() mouseOver = new EventEmitter<Event>();
    @Output() mouseOut = new EventEmitter<Event>();
    @Output() show = new EventEmitter<Event>();
}