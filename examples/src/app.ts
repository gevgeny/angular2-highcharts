
import '../../node_modules/angular2/bundles/angular2-polyfills';
import { Component } from '../../node_modules/angular2/core';
import { bootstrap } from '../../node_modules/angular2/platform/browser';
import { SimpleChartExample } from './simpleChartExample';

@Component({
    selector: 'app',
    directives: [SimpleChartExample],
    template: `
        <h2>angular2-highcharts examples</h2>
        <simple-chart-example></simple-chart-example>
    `
})
export class App { }


bootstrap(App);