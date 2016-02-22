import { Input, ElementRef, Injectable } from 'angular2/core';

export class BaseChartComponent {
    chart: any;
    chartConstructor: any;
    element: ElementRef;
    protected initChart(opts: any) {
        opts.chart = opts.chart || {};
        opts.chart.renderTo = this.element.nativeElement.children[0];
        this.chart = new this.chartConstructor(opts);
    }
    constructor(element: ElementRef) {
        this.element = element;
    }
    //@Input('options') set options(opts: any) {
    //    opts.chart = opts.chart || {};
    //    //opts.chart.renderTo = this.element.nativeElement;
    //    //this.chart = new this.chartConstructor(opts);
    //}
}
