import { HighchartsService } from './HighchartsService';
import { deepAssign } from './deepAssign';

export function initChart(highchartsService : HighchartsService, userOpts, baseOpts, type : string) {
    if (!highchartsService.Highcharts[type]) {
        throw new Error(`${type} is unknown chart type.`);
    }

    // Adjust axis type to user one (#56)
    if (Array.isArray(userOpts.xAxis) ) {
        baseOpts.xAxis = [baseOpts.xAxis];
    }
    if (Array.isArray(userOpts.yAxis) ) {
        baseOpts.yAxis = [baseOpts.yAxis];
    }

    const opts = deepAssign({}, baseOpts, userOpts);

    return new highchartsService.Highcharts[type](opts);
}
