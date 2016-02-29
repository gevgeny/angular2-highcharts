import { Highcharts } from './Highcharts';
declare var require: any;
let deepAssign = require('deep-assign');

export function initChart(userOpts, baseOpts, type : string) {
    //console.log('init', this.userOpts, this.baseOpts);
    if (!Highcharts[type]) {
        throw new Error(`${type} is unknown chart type.`);
    }
    let opts = deepAssign({}, baseOpts, userOpts);
    console.log('init chart', opts);
    return new Highcharts[type](opts);
}