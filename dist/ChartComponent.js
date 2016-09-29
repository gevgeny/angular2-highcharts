"use strict";
var core_1 = require('@angular/core');
var ChartSeriesComponent_1 = require('./ChartSeriesComponent');
var ChartXAxisComponent_1 = require('./ChartXAxisComponent');
var ChartYAxisComponent_1 = require('./ChartYAxisComponent');
var HighchartsService_1 = require('./HighchartsService');
var initChart_1 = require('./initChart');
var createBaseOpts_1 = require('./createBaseOpts');
var ChartComponent = (function () {
    function ChartComponent(element, highchartsService) {
        this.create = new core_1.EventEmitter();
        this.click = new core_1.EventEmitter();
        this.addSeries = new core_1.EventEmitter();
        this.afterPrint = new core_1.EventEmitter();
        this.beforePrint = new core_1.EventEmitter();
        this.drilldown = new core_1.EventEmitter();
        this.drillup = new core_1.EventEmitter();
        this.load = new core_1.EventEmitter();
        this.redraw = new core_1.EventEmitter();
        this.selection = new core_1.EventEmitter();
        this.type = 'Chart';
        this.element = element;
        this.highchartsService = highchartsService;
    }
    Object.defineProperty(ChartComponent.prototype, "options", {
        set: function (opts) {
            this.userOpts = opts;
            this.init();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ChartComponent.prototype.init = function () {
        if (this.userOpts && this.baseOpts) {
            this.chart = initChart_1.initChart(this.highchartsService, this.userOpts, this.baseOpts, this.type);
            this.create.emit(this.chart);
        }
    };
    ChartComponent.prototype.ngAfterViewInit = function () {
        this.baseOpts = createBaseOpts_1.createBaseOpts(this, this.series, this.series ? this.series.point : null, this.xAxis, this.yAxis, this.element.nativeElement);
        this.init();
    };
    ChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'chart',
                    template: '',
                    providers: [HighchartsService_1.HighchartsService],
                },] },
    ];
    ChartComponent.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: HighchartsService_1.HighchartsService, },
    ];
    ChartComponent.propDecorators = {
        'series': [{ type: core_1.ContentChild, args: [ChartSeriesComponent_1.ChartSeriesComponent,] },],
        'xAxis': [{ type: core_1.ContentChild, args: [ChartXAxisComponent_1.ChartXAxisComponent,] },],
        'yAxis': [{ type: core_1.ContentChild, args: [ChartYAxisComponent_1.ChartYAxisComponent,] },],
        'create': [{ type: core_1.Output },],
        'click': [{ type: core_1.Output },],
        'addSeries': [{ type: core_1.Output },],
        'afterPrint': [{ type: core_1.Output },],
        'beforePrint': [{ type: core_1.Output },],
        'drilldown': [{ type: core_1.Output },],
        'drillup': [{ type: core_1.Output },],
        'load': [{ type: core_1.Output },],
        'redraw': [{ type: core_1.Output },],
        'selection': [{ type: core_1.Output },],
        'type': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
    };
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=ChartComponent.js.map