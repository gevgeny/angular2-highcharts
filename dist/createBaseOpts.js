"use strict";
var ChartEvent_1 = require('./ChartEvent');
var chartEvents = [
    'addSeries',
    'afterPrint',
    'beforePrint',
    'drilldown',
    'drillup',
    'load',
    'redraw',
    'selection'
];
var seriesEvents = [
    'click',
    'afterAnimate',
    'checkboxClick',
    'hide',
    'legendItemClick',
    'mouseOut',
    'mouseOver',
    'show'
];
var pointEvents = [
    'click',
    'remove',
    'select',
    'unselect',
    'mouseOut',
    'mouseOver',
    'update'
];
function createBaseOpts(chartCmp, seriesCmp, pointCmp, element) {
    var opts = {
        chart: { renderTo: element, events: {} },
        plotOptions: {
            series: { events: {}, point: { events: {} } }
        }
    };
    chartEvents.forEach(function (eventName) {
        opts.chart.events[eventName] = opts.chart.events[eventName] || function (event) {
            chartCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
        };
    });
    if (seriesCmp) {
        seriesEvents.forEach(function (eventName) {
            opts.plotOptions.series.events[eventName] = opts.plotOptions.series.events[eventName] || function (event) {
                seriesCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
            };
        });
    }
    if (pointCmp) {
        pointEvents.forEach(function (eventName) {
            opts.plotOptions.series.point.events[eventName] = opts.plotOptions.series.point.events[eventName] || function (event) {
                pointCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
            };
        });
    }
    return opts;
}
exports.createBaseOpts = createBaseOpts;
//# sourceMappingURL=createBaseOpts.js.map