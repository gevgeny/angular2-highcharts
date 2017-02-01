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
var ChartPointComponent = (function () {
    function ChartPointComponent() {
        this.click = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.unselect = new core_1.EventEmitter();
        this.mouseOver = new core_1.EventEmitter();
        this.mouseOut = new core_1.EventEmitter();
        this.update = new core_1.EventEmitter();
    }
    return ChartPointComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "click", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "remove", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "select", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "unselect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "mouseOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "mouseOut", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChartPointComponent.prototype, "update", void 0);
ChartPointComponent = __decorate([
    core_1.Directive({
        selector: 'point'
    })
], ChartPointComponent);
exports.ChartPointComponent = ChartPointComponent;
//# sourceMappingURL=ChartPointComponent.js.map