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
var ChartPointComponent_1 = require("./ChartPointComponent");
var ChartSeriesComponent = (function () {
    function ChartSeriesComponent() {
        this.click = new core_1.EventEmitter();
        this.afterAnimate = new core_1.EventEmitter();
        this.checkboxClick = new core_1.EventEmitter();
        this.hide = new core_1.EventEmitter();
        this.legendItemClick = new core_1.EventEmitter();
        this.mouseOver = new core_1.EventEmitter();
        this.mouseOut = new core_1.EventEmitter();
        this.show = new core_1.EventEmitter();
    }
    return ChartSeriesComponent;
}());
__decorate([
    core_1.ContentChild(ChartPointComponent_1.ChartPointComponent),
    __metadata("design:type", ChartPointComponent_1.ChartPointComponent)
], ChartSeriesComponent.prototype, "point", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "click", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "afterAnimate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "checkboxClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "hide", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "legendItemClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "mouseOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "mouseOut", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartSeriesComponent.prototype, "show", void 0);
ChartSeriesComponent = __decorate([
    core_1.Directive({
        selector: 'series'
    })
], ChartSeriesComponent);
exports.ChartSeriesComponent = ChartSeriesComponent;
//# sourceMappingURL=ChartSeriesComponent.js.map