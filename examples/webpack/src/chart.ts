/////<reference path="../node_modules/angular2/typings/browser.d.ts"/>
/////<reference path="../../typings/highcharts.d.ts"/>
//
//import '../../node_modules/angular2/bundles/angular2-polyfills';
//import {Component} from '../../node_modules/angular2/core';
//import {bootstrap} from '../../node_modules/angular2/platform/browser';
//import { CHART_DIRECTIVES, Highcharts } from '../../index';
//declare var require: any;
//require('highcharts/modules/map')(Highcharts);
////console.log('exporting', exporting);
//Highcharts.setOptions({
//    colors: ['#000000', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
//});
//
//@Component({
//    selector: 'app',
//    directives: [CHART_DIRECTIVES],
//    template: `
//        <h2>angular2-highcharts examples</h2>
//        <h3>chart</h3>
//        <div>
//            <chart type="Chart"
//                   [options]="options"
//                   (click)="onClick($event)"
//                   (selection)="onSelection($event)">
//                <series (click)="onSeriesClick($event)"
//                        (mouseOver)="onMouseOver($event)">
//                        <point (select)="onPointSelect($event)"
//                            (click)="onPointClick($event)">
//                        </point>
//                </series>
//            </chart>
//        </div>
//        <h3>stock chart</h3>
//        <div>
//            <!--<stock-chart [options]="stockOptions">-->
//
//            <!--</stock-chart>-->
//        </div>
//    `
//})
//export class App {
//    constructor() {
//        console.log('start');
//        //Highcharts.setOptions({ colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'] });
//
//        this.options = {
//            chart: {
//                zoomType: 'x'
//            },
//            xAxis: {},
//            series: [{
//                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//                type: "line",
//                allowPointSelect: true
//            }]
//        };
//        this.stockOptions = {
//            xAxis: {},
//            series: [{
//                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//                type: "line",
//                allowPointSelect: true
//            }]
//        };
//    }
//    onSelection(e) {
//        console.log('chart selection', e);
//    }
//    onSeriesClick(e) {
//        //console.log('series click', e);
//    }
//    onClick(e) {
//        console.log('chart click', e);
//    }
//    onMouseOver(e) {
//        //console.log('series mouse over', e);
//    }
//    onPointSelect(e) {
//        console.log('point select', e);
//    }
//    onPointClick(e) {
//        //console.log('point click', e);
//    }
//    options: Object;
//    stockOptions: Object;
//}
//
//
//bootstrap(App);