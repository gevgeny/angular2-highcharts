
import '../../node_modules/angular2/bundles/angular2-polyfills';
import { Component } from '../../node_modules/angular2/core';
import { bootstrap } from '../../node_modules/angular2/platform/browser';
import { SimpleChartExample } from './simpleChartExample';
import { ChartEventsExample } from './chartEventsExample';

@Component({
    selector: 'app',
    directives: [SimpleChartExample, ChartEventsExample],
    template: `
        <h2>angular2-highcharts examples</h2>
        <simple-chart-example></simple-chart-example>
        <chart-events-example></chart-events-example>
    `
})
export class App { }


bootstrap(App);