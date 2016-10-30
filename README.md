# angular2-highcharts

> Angular2 charting components based on Highcharts. [Live Demo](http://plnkr.co/edit/pnkc8Iw9cSrCYn9zr0VZ?p=preview)


[![build](https://travis-ci.org/gevgeny/angular2-highcharts.svg?branch=master)](https://travis-ci.org/gevgeny/angular2-highcharts)
[![npm version](https://badge.fury.io/js/angular2-highcharts.svg)](https://badge.fury.io/js/angular2-highcharts)
[![npm dependencies](https://david-dm.org/gevgeny/angular2-highcharts.svg)](https://david-dm.org/gevgeny/angular2-highcharts)
[![npm downloads](https://img.shields.io/npm/dm/angular2-highcharts.svg)](https://www.npmjs.com/package/angular2-highcharts)

## Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
  - [Basic Usage](#basic-usage)
    - [Setup App Module](#setup-app-module)
    - [Create First Chart Component](#create-first-chart-component)
  - [Handling Events](#handling-events)
    - [Chart Events](#chart-events)
    - [Series Events](#series-events)
    - [Point Events](#point-events)
    - [Axis Events](#axis-events)
  - [Dynamic Interaction with Chart Object](#dynamic-interaction-with-chart-object)
  - [Access to the Highcharts Static Members and Modules](#access-to-the-highcharts-static-members-and-modules)
  - [Highstock and Highmaps](#highstock-and-highmaps)
  - [Using Highchart Modules](#using-highchart-modules)
 -  [More Examples](#more-examples) 
 - [FAQ](#faq)
 - [License](#license)

## Installation
```
npm install angular2-highcharts --save
```
The full installation process depends on environment you are using to run your angular2 app. Here are some examples:
- [angular2-webpack-starter (Webpack)](https://github.com/gevgeny/angular2-webpack-starter-and-angular2-highcharts)
- [angular/quickstart (SystemJS)](https://github.com/gevgeny/angular2-quickstart-and-angular2-highcharts)


## Usage

### Basic Usage
#### Setup App Module
```TypeScript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular2-highcharts';
import { App } from './App';

@NgModule({
    imports: [BrowserModule, ChartModule],
    declarations: [App],
    bootstrap: [App]
})
export class AppModule {}
```

#### Create First Chart Component
Main charts functionality provided by the `chart` component and its `options` property.

```TypeScript
import { Component } from '@angular/core';

@Component({
    selector: 'simple-chart-example',
    template: `
        <chart [options]="options"></chart>
    `
})
export class App {
    constructor() {
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }
    options: HighchartsOptions;
}
```
[Live Demo](http://plnkr.co/edit/IuwjpPB1YQW1T7i4B8SZ?p=preview)

### Handling Events
Highcharts itself provides bunch of events, and you still can use them with angular2-higcharts via the `options` property of the `chart` component. But it is not an angular2 way to handle events like this. So that angular2-higcharts provides `EventEmitter<ChartEvent>` wrappers for highcharts events. `ChartEvent` is an angular2-higcharts class which simply wraps original Highcharts events (`chartEvent.originalEvent`) and adds event handler context (`chartEvent.context`) since it differs depending on events.

#### Chart Events 

All the events from the [options.chart.events](http://api.highcharts.com/highcharts#chart.events) are available as output properties of the `chart` component.

```HTML
<chart [options]="options" (selection)="onChartSelection($event)"> </chart>
```
```TypeScript
onChartSelection (e) {
  this.from = e.originalEvent.xAxis[0].min.toFixed(2);
  this.to = e.originalEvent.xAxis[0].max.toFixed(2);
}
```
[Live Demo](http://plnkr.co/edit/vdgKVJOymMYhiyqZrPma?p=preview)
#### Series Events 

To use series events the same way you need to add the `series` component as a child of your chart. The only purpose of this auxiliary component is to provide access to [options.plotOptions.series.events](http://api.highcharts.com/highcharts#plotOptions.series.events) API

```HTML
<chart [options]="options">
    <series (mouseOver)="onSeriesMouseOver($event)">
    </series>
</chart>
<p><b>{{serieName}}</b> is hovered<p>
```
```TypeScript
onSeriesMouseOver (e) {
  this.serieName = e.context.name;
}
```
[Live Demo](http://plnkr.co/edit/GkaJlk2UJjbTwsPyGXGC?p=preview)
#### Point Events 

Similary you can use the `point` to access to [options.plotOptions.series.point.events](http://api.highcharts.com/highcharts#plotOptions.series.point.events) API.
```HTML
<chart [options]="options">
    <series>
        <point (select)="onPointSelect($event)"></point>
    </series>
</chart>
<p><b>{{point}}</b> is selected<p>
```
[Live Demo](http://plnkr.co/edit/TpKoJ60n4vyIDWxHNUkg?p=preview)
#### Axis Events 

Similary you can use the `xAxis` or `yAxes` to access to [options.xAxis.events](http://api.highcharts.com/highcharts#xAxis.events) or [options.yAxis.events](http://api.highcharts.com/highcharts#yAxis.events) API.
```HTML
<chart [options]="options">
     <xAxis (afterSetExtremes)="onAfterSetExtremesX($event)"></xAxis>
     <yAxis (afterSetExtremes)="onAfterSetExtremesY($event)"></yAxis>
</chart>
<p>{{minX}} - {{maxX}}<p>
<p>{{minY}} - {{maxY}}<p>
```
```TypeScript
onAfterSetExtremesX (e) {
  this.minX = e.context.min;
  this.maxX = e.context.max;
}
onAfterSetExtremesY (e) {
  this.minY = e.context.min;
  this.maxY = e.context.max;
}
```
[Live Demo](http://plnkr.co/edit/c4ojcIRVOOwq7xmk9kfx?p=preview)
### Dynamic Interaction with Chart Object

angular2-higcharts provides possibility to interact with native `HighchartsChartObject` chart object.

```TypeScript 
@Component({
    selector: 'my-app',
    directives: [CHART_DIRECTIVES],
    template: `
      <chart [options]="options" 
             (load)="saveInstance($event.context)">
      </chart>
    `
})
class AppComponent {
    constructor() {
        this.options = {
          chart: { type: 'spline' },
          title: { text : 'dynamic data example'}
          series: [{ data: [2,3,5,8,13] }]
        };
        setInterval(() => this.chart.series[0].addPoint(Math.random() * 10), 1000);
    }
    chart : HighchartsChartObject;
    options: HighchartsOptions;
    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }
}
```
[Live Demo](http://plnkr.co/edit/OQSFSKisIIWAH0megy4d?p=preview)
### Access to the Highcharts Static Members and Modules

The Highchart modules are not really ES6 compatiable so access to highcharts native API depends on environment configuration 
See the SystemJS and Webpack examples apps 
- https://github.com/gevgeny/angular2-webpack-starter-and-angular2-highcharts/blob/master/src/app/home/home.component.ts
- https://github.com/gevgeny/angular2-quickstart-and-angular2-highcharts/blob/master/app/app.component.ts

### Highstock and Highmaps
The `type` property allows you to specify chart type. Possible values are:
* `Chart` (Default value)
* `StockChart`
* `Map` (To use this type you need to load the 'highcharts/modules/map' module additionally. [Live Demo](http://plnkr.co/edit/AmDfKwhRhshFn3CPprkk?p=preview))

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
    options: HighchartsOptions;
}
```
[Live Demo](http://plnkr.co/edit/2xSewTZ9b213vA0ALmFq?p=preview)

##More Examples

Here are some common charts examples with Webpack integration https://github.com/gevgeny/angular2-highcharts/tree/master/examples

##FAQ

#### Why don't my series, title, axes and etc redraw after I update initial options ?

Because `angular-highcharts` is just a thin wrapper of the [Highcharts](http:/ /www.highcharts.com/) library and doesn't bind to initial options. I understand that you expect more angular-way behaviour like data binding with appropriate redrawing. But it is barely possible to implement it without redundant complications and performance decrease because almost all options can be dynamic. So my idea was to avoid any additional logic more than just a sugar (like events for series and options). In the other hand Highcharts has great [API](http://api.highcharts.com/highcharts#Chart) for dynamic manipulations with chart and `angular-highcharts` [provides you access](#dynamic-interaction-with-chart-object) to the original chart object.

## License
MIT @ Eugene Gluhotorenko


