"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HighchartsWrapper_1 = require('./HighchartsWrapper');
var HighchartsService = (function () {
    function HighchartsService() {
    }
    return HighchartsService;
}());
exports.HighchartsService = HighchartsService;
var ClassicModeHighchartsService = (function (_super) {
    __extends(ClassicModeHighchartsService, _super);
    function ClassicModeHighchartsService() {
        _super.call(this);
        this.Highcharts = HighchartsWrapper_1.ClassicModeHighcharts;
    }
    return ClassicModeHighchartsService;
}(HighchartsService));
exports.ClassicModeHighchartsService = ClassicModeHighchartsService;
var StyledModeHighchartsService = (function (_super) {
    __extends(StyledModeHighchartsService, _super);
    function StyledModeHighchartsService() {
        _super.call(this);
        this.Highcharts = HighchartsWrapper_1.StyledModeHighcharts;
    }
    return StyledModeHighchartsService;
}(HighchartsService));
exports.StyledModeHighchartsService = StyledModeHighchartsService;
//# sourceMappingURL=HighchartsService.js.map