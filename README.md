# angular2-highcharts
Angular2 charting components based on Highcharts

## [Live demo](http://gevgeny.github.io/angular2-highcharts)

## Quick Start

```
npm install angular2-highcharts --save
```
Tested with Angular 2.0.0-beta.6

## Usage

### Basic usage
Main charts functionality provided by the `chart` component and its `options` property.

```TypeScript
import { Component } from 'angular2/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';

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
```
### Handling events
Highcharts provides bunch of events, and you can use them via the `options` property of the `chart` component. But it is not an angular2 way to handle events such way. So that angular2-higcharts provides `Observable` wrappers for highcharts events.

#### Chart events 

All the events from the [options.chart.events](http://api.highcharts.com/highcharts#chart.events) are available as output properties of the `chart` component.

```TypeScript
@Component({
    selector: 'chart-events-example',
    directives: [CHART_DIRECTIVES],
    template: `
        <chart [options]="options" (selection)="onChartSelection($event)"> </chart>
    `
})
export class ChartEventsExample {
    constructor() {
        this.options = {
            title : { text : 'chart events example' },
            chart: { zoomType: 'x'},
            series: [{
                data: [29.9, 71.5, 106.4, 148.5, 216.4, 194.1, 95.6, 54.4],
                allowPointSelect: true
            }]
        };
    }
    options: Object;
    onChartSelection (e) {
        console.log('onChartSelection', e.originalEvent, e.context);
    }
}
```

### Highstock and Highmaps
The `type` property allows you to specify chart type. Possible values are:
* `Chart` (Default value)
* `StockChart`
* `Map` (To use this type you need to load the 'highcharts/modules/map' module additionally.)

```TypeScript
import {Component} from '../../node_modules/angular2/core';
import { CHART_DIRECTIVES } from '../../index';
import { Jsonp } from '../../node_modules/angular2/http';

@Component({
    selector: 'stock-chart-example',
    directives: [CHART_DIRECTIVES],
    template: `<chart type="StockChart" [options]="options"></chart>`
})
export class StockChartExample {
    constructor(jsonp : Jsonp) {
        jsonp.request('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=JSONP_CALLBACK').subscribe(res => {
            this.options = {
                title : { text : 'AAPL Stock Price' },
                series : [{
                    name : 'AAPL',
                    data : res.json(),
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            };
        });
    }
    options: Object;
}

```


