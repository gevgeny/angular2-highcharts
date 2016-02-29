import {Component} from '../../node_modules/angular2/core';
import { CHART_DIRECTIVES } from '../../index';


@Component({
    selector: 'dynamic-chart-example',
    directives: [CHART_DIRECTIVES],
    template: `
        <h3>chart with dynamic data</h3>
        <div>
            <chart [options]="options" (load)="saveInstance($event.context)"></chart>
            <button (click)="addPoint()">Add Point</button>
        </div>
    `
})
export class DynamicChartExample {
    constructor() {
        this.options = {
            series: [{
                data: [2,3,5,8]
            }]
        }
    }
    chart : HighchartsChartObject;
    options: HighchartsOptions;
    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }
    addPoint() {
        this.chart.series[0].addPoint(Math.random() * 10);
    }
}