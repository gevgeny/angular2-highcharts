import { Component } from '../../../node_modules/@angular/core';

declare var require: any;
const Highcharts = require('../../../node_modules/highcharts/highstock.src');

Highcharts.setOptions({
    colors: ['#058DC7', '#50B432', '#ED561B']
});

@Component({
    selector: 'simple-chart-example',
    template: `
        <chart [options]="options"></chart>
    `
})
export class SimpleChartExample {
    constructor() {
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: Array.from(new Array(100), (x,i) => i),
            }]
        };
    }
    options: Object;
}