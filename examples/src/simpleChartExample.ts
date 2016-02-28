import {Component} from '../../node_modules/angular2/core';
import { CHART_DIRECTIVES } from '../../index';

@Component({
    selector: 'simple-chart-example',
    directives: [CHART_DIRECTIVES],
    template: `
        <h3>simple chart</h3>
        <div>
            <chart [options]="options"></chart>
        </div>
    `
})
export class SimpleChartExample {
    constructor() {
        this.options = {
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                type: "line",
            }]
        };
    }
    options: Object;
}