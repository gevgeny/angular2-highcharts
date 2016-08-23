import { NgModule } from '@angular/core';

import { ChartComponent } from './ChartComponent';
export { ChartComponent }
import { ChartSeriesComponent } from './ChartSeriesComponent';
export { ChartSeriesComponent };
import { ChartPointComponent } from './ChartPointComponent';
export { ChartPointComponent };
import { ChartXAxisComponent } from './ChartXAxisComponent';
export { ChartXAxisComponent };
import { ChartYAxisComponent } from './ChartYAxisComponent';
export { ChartYAxisComponent };

export { Highcharts } from './Highcharts';

const CHART_DIRECTIVES: any[] = [
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent
];

@NgModule({
  declarations: [CHART_DIRECTIVES],
  exports: [CHART_DIRECTIVES]
})
export class ChartModule {
}
