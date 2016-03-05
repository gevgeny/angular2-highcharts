import { Highcharts } from './Highcharts';
declare var require: any;
let deepAssign = require('deep-assign');

export function initChart(userOpts, baseOpts, type : string) {
    if (!Highcharts[type]) {
        throw new Error(`${type} is unknown chart type.`);
    }
    let opts = deepAssign({}, baseOpts, userOpts);
    return new Highcharts[type](opts);
}