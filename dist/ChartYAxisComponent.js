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
var ChartYAxisComponent = (function () {
    function ChartYAxisComponent() {
        this.afterBreaks = new core_1.EventEmitter();
        this.afterSetExtremes = new core_1.EventEmitter();
        this.pointBreak = new core_1.EventEmitter();
        this.pointInBreak = new core_1.EventEmitter();
        this.setExtremes = new core_1.EventEmitter();
    }
    return ChartYAxisComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartYAxisComponent.prototype, "afterBreaks", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartYAxisComponent.prototype, "afterSetExtremes", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartYAxisComponent.prototype, "pointBreak", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartYAxisComponent.prototype, "pointInBreak", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartYAxisComponent.prototype, "setExtremes", void 0);
ChartYAxisComponent = __decorate([
    core_1.Directive({
        selector: 'yAxis'
    })
], ChartYAxisComponent);
exports.ChartYAxisComponent = ChartYAxisComponent;
//# sourceMappingURL=ChartYAxisComponent.js.map