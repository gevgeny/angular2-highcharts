"use strict";
var deepAssign_1 = require('./deepAssign');
function initChart(highchartsService, userOpts, baseOpts, type) {
    if (!highchartsService.Highcharts[type]) {
        throw new Error(type + " is unknown chart type.");
    }
    if (Array.isArray(userOpts.xAxis)) {
        baseOpts.xAxis = [baseOpts.xAxis];
    }
    if (Array.isArray(userOpts.yAxis)) {
        baseOpts.yAxis = [baseOpts.yAxis];
    }
    var opts = deepAssign_1.deepAssign({}, baseOpts, userOpts);
    return new highchartsService.Highcharts[type](opts);
}
exports.initChart = initChart;
//# sourceMappingURL=initChart.js.map