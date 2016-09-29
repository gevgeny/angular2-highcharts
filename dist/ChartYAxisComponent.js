"use strict";
var core_1 = require('@angular/core');
var ChartYAxisComponent = (function () {
    function ChartYAxisComponent() {
        this.afterBreaks = new core_1.EventEmitter();
        this.afterSetExtremes = new core_1.EventEmitter();
        this.pointBreak = new core_1.EventEmitter();
        this.pointInBreak = new core_1.EventEmitter();
        this.setExtremes = new core_1.EventEmitter();
    }
    ChartYAxisComponent.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'yAxis'
                },] },
    ];
    ChartYAxisComponent.ctorParameters = [];
    ChartYAxisComponent.propDecorators = {
        'afterBreaks': [{ type: core_1.Output },],
        'afterSetExtremes': [{ type: core_1.Output },],
        'pointBreak': [{ type: core_1.Output },],
        'pointInBreak': [{ type: core_1.Output },],
        'setExtremes': [{ type: core_1.Output },],
    };
    return ChartYAxisComponent;
}());
exports.ChartYAxisComponent = ChartYAxisComponent;
//# sourceMappingURL=ChartYAxisComponent.js.map