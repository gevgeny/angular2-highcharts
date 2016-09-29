"use strict";
var core_1 = require('@angular/core');
var ChartPointComponent_1 = require('./ChartPointComponent');
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
    ChartSeriesComponent.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'series'
                },] },
    ];
    ChartSeriesComponent.ctorParameters = [];
    ChartSeriesComponent.propDecorators = {
        'point': [{ type: core_1.ContentChild, args: [ChartPointComponent_1.ChartPointComponent,] },],
        'click': [{ type: core_1.Output },],
        'afterAnimate': [{ type: core_1.Output },],
        'checkboxClick': [{ type: core_1.Output },],
        'hide': [{ type: core_1.Output },],
        'legendItemClick': [{ type: core_1.Output },],
        'mouseOver': [{ type: core_1.Output },],
        'mouseOut': [{ type: core_1.Output },],
        'show': [{ type: core_1.Output },],
    };
    return ChartSeriesComponent;
}());
exports.ChartSeriesComponent = ChartSeriesComponent;
//# sourceMappingURL=ChartSeriesComponent.js.map