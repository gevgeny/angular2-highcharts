import { Component, ElementRef, Input, Output, EventEmitter } from 'angular2/core';
import { BaseChartComponent } from './BaseChartComponent';
import { ChartComponent } from './ChartComponent';

@Component({
    selector: 'series',
    template: ''
})
export class ChartSeriesComponent {
    constructor() {
        console.log('ChartSeriesComponent');
        setInterval(() => this.click.emit("event"), 1000);
    }
    @Output('click') click = new EventEmitter();

}