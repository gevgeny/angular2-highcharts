import {Component} from '../../node_modules/angular2/core';
import { CHART_DIRECTIVES, Highcharts } from '../../index';

Highcharts.setOptions({
    colors: ['#058DC7', '#50B432', '#ED561B']
});

@Component({
    selector: 'simple-chart-example',
    directives: [CHART_DIRECTIVES],
    template: `
        <chart [options]="options"></chart>
    `
})
export class SimpleChartExample {
    constructor() {
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }
    options: Object;
}