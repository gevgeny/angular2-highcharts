import { Component, ElementRef, Injectable, ContentChild, Input, Output, EventEmitter } from 'angular2/core';
import * as Highcharts from 'highcharts';
import { BaseChartComponent } from './BaseChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';

Highcharts.setOptions({
    title: {
        style: {
            color: '#ff0000'
        }
    }
});

@Component({
    selector: 'chart',
    template: `<div></div><ng-content></ng-content>`
})
export class ChartComponent extends BaseChartComponent {
    constructor(element: ElementRef) {
        super(element);
        this.chartConstructor = Highcharts.Chart;
    }
}