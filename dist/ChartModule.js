"use strict";
var core_1 = require('@angular/core');
var ChartComponent_1 = require('./ChartComponent');
var ChartSeriesComponent_1 = require('./ChartSeriesComponent');
var ChartPointComponent_1 = require('./ChartPointComponent');
var ChartXAxisComponent_1 = require('./ChartXAxisComponent');
var ChartYAxisComponent_1 = require('./ChartYAxisComponent');
var HighchartsService_1 = require("./HighchartsService");
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
    Object.defineProperty(ChartModule, "styledMode", {
        get: function () {
            return {
                ngModule: ChartModule,
                providers: [
                    { provide: HighchartsService_1.HighchartsService, useClass: HighchartsService_1.StyledModeHighchartsService }
                ]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartModule, "classicMode", {
        get: function () {
            return ChartModule;
        },
        enumerable: true,
        configurable: true
    });
    ChartModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [CHART_DIRECTIVES],
                    exports: [CHART_DIRECTIVES],
                    providers: [
                        { provide: HighchartsService_1.HighchartsService, useClass: HighchartsService_1.ClassicModeHighchartsService }
                    ]
                },] },
    ];
    ChartModule.ctorParameters = [];
    return ChartModule;
}());
exports.ChartModule = ChartModule;
;
//# sourceMappingURL=ChartModule.js.map