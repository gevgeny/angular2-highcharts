import '../../../node_modules/zone.js';
import '../../../node_modules/reflect-metadata';

import { Component, NgModule } from '../../../node_modules/@angular/core';
import { JsonpModule } from '../../../node_modules/@angular/http';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { platformBrowserDynamic } from '../../../node_modules/@angular/platform-browser-dynamic';

import { SimpleChartExample } from './simpleChartExample';
import { ChartEventsExample } from './chartEventsExample';
import { StockChartExample } from './stockChartExample';
import { DynamicChartExample } from './dynamicChartExample';
import { ComboMultiAxesExample } from './comboMultiAxesExample';
import { HighchartsModuleExample } from './highchartsModuleExample';
import { ChartModule } from '../../../index';


@Component({
    selector: 'app',

    template: `
        <h2>angular2-highcharts examples</h2>
        <simple-chart-example></simple-chart-example>
        <chart-events-example></chart-events-example>
        <stock-chart-example></stock-chart-example>
        <dynamic-chart-example></dynamic-chart-example>
        <combo-multi-axes-example></combo-multi-axes-example>
        <highcharts-module-example></highcharts-module-example>
    `
})
class App {

}

declare var require: any;

@NgModule({
    imports: [
        BrowserModule,
        JsonpModule,
        ChartModule.forRoot(
            require('../../../node_modules/highcharts/highstock.src'),
            require('../../../node_modules/highcharts/highcharts-3d.src.js')
        )
    ],
    declarations: [
        App,
        SimpleChartExample,
        ChartEventsExample,
        StockChartExample,
        DynamicChartExample,
        ComboMultiAxesExample,
        HighchartsModuleExample
    ],
    bootstrap: [App]
})
class ExamplesAppModule {}

platformBrowserDynamic().bootstrapModule(ExamplesAppModule);