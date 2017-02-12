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
var core_1 = require("@angular/core");
var ChartSeriesComponent_1 = require("./ChartSeriesComponent");
var ChartXAxisComponent_1 = require("./ChartXAxisComponent");
var ChartYAxisComponent_1 = require("./ChartYAxisComponent");
var HighchartsService_1 = require("./HighchartsService");
var initChart_1 = require("./initChart");
var createBaseOpts_1 = require("./createBaseOpts");
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
    return ChartComponent;
}());
__decorate([
    core_1.ContentChild(ChartSeriesComponent_1.ChartSeriesComponent),
    __metadata("design:type", ChartSeriesComponent_1.ChartSeriesComponent)
], ChartComponent.prototype, "series", void 0);
__decorate([
    core_1.ContentChild(ChartXAxisComponent_1.ChartXAxisComponent),
    __metadata("design:type", ChartXAxisComponent_1.ChartXAxisComponent)
], ChartComponent.prototype, "xAxis", void 0);
__decorate([
    core_1.ContentChild(ChartYAxisComponent_1.ChartYAxisComponent),
    __metadata("design:type", ChartYAxisComponent_1.ChartYAxisComponent)
], ChartComponent.prototype, "yAxis", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "create", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "click", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "addSeries", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "afterPrint", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "beforePrint", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "drilldown", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "drillup", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "load", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "redraw", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "selection", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChartComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ChartComponent.prototype, "options", null);
ChartComponent = __decorate([
    core_1.Component({
        selector: 'chart',
        template: '&nbsp;',
        providers: [HighchartsService_1.HighchartsService],
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, HighchartsService_1.HighchartsService])
], ChartComponent);
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=ChartComponent.js.map