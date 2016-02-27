import { Input, ElementRef, Injectable, Output, EventEmitter, ContentChild } from 'angular2/core';
import { BaseChartComponent } from './BaseChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';

const chartEvents = [
    //'click',
    'addSeries',
    'afterPrint',
    'beforePrint',
    'drilldown',
    'drillup',
    'load',
    'redraw',
    'selection'
];

const seriesEvents = [
    'click',
    'afterAnimate',
    'checkboxClick',
    'hide',
    'legendItemClick',
    'mouseOut',
    'mouseOver',
    'show'
];

const pointEvents = [
    'click',
    'remove',
    'select',
    'unselect',
    'mouseOut',
    'mouseOver',
    'update'
];

export class ChartEventHelper {
    /**
     * Inits all chart events
     * */
    static initEvents (chartCmp : BaseChartComponent,
                       seriesCmp : ChartSeriesComponent,
                       pointCmp : ChartPointComponent, opts : any) {
        ChartEventHelper.initChartEvents(chartCmp, opts);
        if (seriesCmp) {
            ChartEventHelper.initSeriesEvents(seriesCmp, opts);
        }
        if (pointCmp) {
            ChartEventHelper.initPointEvents(pointCmp, opts);
        }
    }
    /**
     * Inits options.chart.events
     * */
    private static initChartEvents(chartCmp : BaseChartComponent, opts : any) {
        opts.chart.events = opts.chart.events || {};
        chartEvents.forEach(function (eventName) {
            opts.chart.events[eventName] = opts.chart.events[eventName] || function (event: any) {
                chartCmp[eventName].emit(event);
            }
        });
    }
    /**
     * Inits options.plotOptions.series.events
     * */
    static initSeriesEvents(seriesCmp : ChartSeriesComponent, opts : any) {
        opts.plotOptions = opts.plotOptions || {};
        opts.plotOptions.series = opts.plotOptions.series || {};
        opts.plotOptions.series.events = opts.plotOptions.series.events || {};
        seriesEvents.forEach(function (eventName) {
            opts.plotOptions.series.events[eventName] = opts.plotOptions.series.events[eventName] || function (event: any) {
                    seriesCmp[eventName].emit(event);
            }
        });
    }
    /**
     * Inits options.plotOptions.series.events
     * */
    static initPointEvents(pointCmp : ChartPointComponent, opts : any) {
        opts.plotOptions = opts.plotOptions || {};
        opts.plotOptions.series = opts.plotOptions.series || {};
        opts.plotOptions.series.point = opts.plotOptions.series.point || {};
        opts.plotOptions.series.point.events = opts.plotOptions.series.point.events || {};
        pointEvents.forEach(function (eventName) {
            opts.plotOptions.series.point.events[eventName] = opts.plotOptions.series.point.events[eventName] || function (event: any) {
                    pointCmp[eventName].emit(event);
            }
        });
    }
}
