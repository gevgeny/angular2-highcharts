"use strict";
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
    ChartModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [CHART_DIRECTIVES],
                    exports: [CHART_DIRECTIVES]
                },] },
    ];
    ChartModule.ctorParameters = [];
    return ChartModule;
}());
exports.ChartModule = ChartModule;
;
//# sourceMappingURL=index.js.map