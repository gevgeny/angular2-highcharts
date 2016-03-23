"use strict";
var deepAssign_1 = require('./deepAssign');
function initChart(highchartsService, userOpts, baseOpts, type) {
    if (!highchartsService.Highcharts[type]) {
        throw new Error(type + " is unknown chart type.");
    }
    var opts = deepAssign_1.deepAssign({}, baseOpts, userOpts);
    return new highchartsService.Highcharts[type](opts);
}
exports.initChart = initChart;
//# sourceMappingURL=initChart.js.map