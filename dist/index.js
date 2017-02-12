"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ChartComponent_1 = require("./ChartComponent");
exports.ChartComponent = ChartComponent_1.ChartComponent;
var ChartSeriesComponent_1 = require("./ChartSeriesComponent");
exports.ChartSeriesComponent = ChartSeriesComponent_1.ChartSeriesComponent;
var ChartPointComponent_1 = require("./ChartPointComponent");
exports.ChartPointComponent = ChartPointComponent_1.ChartPointComponent;
var ChartXAxisComponent_1 = require("./ChartXAxisComponent");
exports.ChartXAxisComponent = ChartXAxisComponent_1.ChartXAxisComponent;
var ChartYAxisComponent_1 = require("./ChartYAxisComponent");
exports.ChartYAxisComponent = ChartYAxisComponent_1.ChartYAxisComponent;
var HighchartsService_1 = require("./HighchartsService");
var CHART_DIRECTIVES = [
    ChartComponent_1.ChartComponent,
    ChartSeriesComponent_1.ChartSeriesComponent,
    ChartPointComponent_1.ChartPointComponent,
    ChartXAxisComponent_1.ChartXAxisComponent,
    ChartYAxisComponent_1.ChartYAxisComponent
];
var ChartModule = ChartModule_1 = (function () {
    function ChartModule() {
    }
    ChartModule.forRoot = function (highchartsStatic) {
        var highchartsModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            highchartsModules[_i - 1] = arguments[_i];
        }
        highchartsModules.forEach(function (module) {
            module(highchartsStatic);
        });
        return {
            ngModule: ChartModule_1,
            providers: [
                { provide: HighchartsService_1.HighchartsStatic, useValue: highchartsStatic }
            ]
        };
    };
    return ChartModule;
}());
ChartModule = ChartModule_1 = __decorate([
    core_1.NgModule({
        declarations: [CHART_DIRECTIVES],
        exports: [CHART_DIRECTIVES]
    })
], ChartModule);
exports.ChartModule = ChartModule;
var ChartModule_1;
//# sourceMappingURL=index.js.map