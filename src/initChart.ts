import { HighchartsService } from './HighchartsService';
declare var require: any;
import { deepAssign } from './deepAssign';

export function initChart(highchartsService : HighchartsService, userOpts, baseOpts, type : string) {
    if (!highchartsService.Highcharts[type]) {
        throw new Error(`${type} is unknown chart type.`);
    }
    let opts = deepAssign({}, baseOpts, userOpts);

    return new highchartsService.Highcharts[type](opts);
}