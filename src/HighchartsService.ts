import * as highcharts from 'highcharts';

import { ClassicModeHighcharts, StyledModeHighcharts } from './HighchartsWrapper';

export abstract class HighchartsService {
    Highcharts : highcharts.Static;
}

export class ClassicModeHighchartsService extends HighchartsService {
    constructor() {
        super();
        this.Highcharts = ClassicModeHighcharts;
    }
}

export class StyledModeHighchartsService extends HighchartsService {
    constructor() {
        super();
        this.Highcharts = StyledModeHighcharts;
    }
}
