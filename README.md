# angular2-highcharts
Angular2 charting components based on Highcharts


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

```HTML
<chart [options]="options" (selection)="onChartSelection($event)"> </chart>
```
```TypeScript
onChartSelection (e) {
    console.log('onChartSelection', e.originalEvent, e.context);
}
```

#### Series events 

The [options.plotOptions.series.events](http://api.highcharts.com/highcharts#plotOptions.series.events) are available as output properties of the `series` component.

```HTML
<chart [options]="options">
    <series (mouseOver)="onSeriesMouseOver($event)">
    </series>
</chart>
```
```TypeScript
onSeriesMouseOver (e) {
    console.log('onSeriesMouseOver', e.originalEvent, e.context);
}
```

#### Point events 

The [options.plotOptions.series.point.events](http://api.highcharts.com/highcharts#plotOptions.series.point.events) are available as output properties of the `point` component.

```HTML
<chart [options]="options">
    <series>
        <point (select)="onPointSelect($event)"></point>
    </series>
</chart>
```
```TypeScript
onPointSelect (e) {
    console.log('onPointSelect', e.originalEvent, e.context);
}
```
### Dynamically modifying the chart

angular2-higcharts provides possbility to interact with native `HighchartsChartObject` chart object. To use highchart native types you need to ref to [Highcharts Typings](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/highcharts/highcharts.d.ts)

```TypeScript 
@Component({
    selector: 'dynamic-chart-example',
    directives: [CHART_DIRECTIVES],
    template: `
        <chart [options]="options" (load)="saveInstance($event.context)"></chart>
        <button (click)="addPoint()">Add Point</button>
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
```
### Highstock and Highmaps
The `type` property allows you to specify chart type. Possible values are:
* `Chart` (Default value)
* `StockChart`
* `Map` (To use this type you need to load the 'highcharts/modules/map' module additionally.)

```TypeScript
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

## License
MIT


