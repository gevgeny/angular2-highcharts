"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ChartComponent_1 = require('./ChartComponent');
exports.ChartComponent = ChartComponent_1.ChartComponent;
var ChartSeriesComponent_1 = require('./ChartSeriesComponent');
exports.ChartSeriesComponent = ChartSeriesComponent_1.ChartSeriesComponent;
var ChartPointComponent_1 = require('./ChartPointComponent');
exports.ChartPointComponent = ChartPointComponent_1.ChartPointComponent;
var ChartXAxisComponent_1 = require('./ChartXAxisComponent');
exports.ChartXAxisComponent = ChartXAxisComponent_1.ChartXAxisComponent;
var ChartYAxisComponent_1 = require('./ChartYAxisComponent');
exports.ChartYAxisComponent = ChartYAxisComponent_1.ChartYAxisComponent;
var Highcharts_1 = require('./Highcharts');
exports.Highcharts = Highcharts_1.Highcharts;
var CHART_DIRECTIVES = [
    ChartComponent_1.ChartComponent,
    ChartSeriesComponent_1.ChartSeriesComponent,
    ChartPointComponent_1.ChartPointComponent,
    ChartXAxisComponent_1.ChartXAxisComponent,
    ChartYAxisComponent_1.ChartYAxisComponent
];
var ChartModule = (function () {
    function ChartModule() {
    }
    ChartModule = __decorate([
        core_1.NgModule({
            declarations: [CHART_DIRECTIVES],
            exports: [CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartModule);
    return ChartModule;
}());
exports.ChartModule = ChartModule;
//# sourceMappingURL=index.js.map