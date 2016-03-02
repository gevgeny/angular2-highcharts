
import '../../node_modules/angular2/bundles/angular2-polyfills';
import { Component } from '../../node_modules/angular2/core';
import { bootstrap } from '../../node_modules/angular2/platform/browser';
import {JSONP_PROVIDERS } from '../../node_modules/angular2/http';
import { SimpleChartExample } from './simpleChartExample';
import { ChartEventsExample } from './chartEventsExample';
import { StockChartExample } from './stockChartExample';
import { DynamicChartExample } from './dynamicChartExample';


@Component({
    selector: 'app',
    directives: [SimpleChartExample, ChartEventsExample, StockChartExample, DynamicChartExample],
    template: `
        <h2>angular2-highcharts examples</h2>
        <simple-chart-example></simple-chart-example>
        <!--<chart-events-example></chart-events-example>-->
        <!--<stock-chart-example></stock-chart-example>-->
        <!--<dynamic-chart-example></dynamic-chart-example>-->
    `
})
export class App { }


bootstrap(App, [JSONP_PROVIDERS]).catch(err => console.error(err));