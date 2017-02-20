import { HighchartsService } from './HighchartsService';
import { deepAssign } from './deepAssign';

export function initChart(highchartsService : HighchartsService, userOpts, baseOpts, type : string) {
    const Highcharts = highchartsService.getHighchartsStatic();

    if (!Highcharts) {
        throw new Error('Base Highcharts module should be set via ChartModule.init');
    }
    if (!Highcharts[type]) {
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

    return new Highcharts[type](opts);
}
