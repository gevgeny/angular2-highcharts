"use strict";
var core_1 = require('@angular/core');
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
    ChartPointComponent.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'point'
                },] },
    ];
    ChartPointComponent.ctorParameters = [];
    ChartPointComponent.propDecorators = {
        'click': [{ type: core_1.Output },],
        'remove': [{ type: core_1.Output },],
        'select': [{ type: core_1.Output },],
        'unselect': [{ type: core_1.Output },],
        'mouseOver': [{ type: core_1.Output },],
        'mouseOut': [{ type: core_1.Output },],
        'update': [{ type: core_1.Output },],
    };
    return ChartPointComponent;
}());
exports.ChartPointComponent = ChartPointComponent;
//# sourceMappingURL=ChartPointComponent.js.map