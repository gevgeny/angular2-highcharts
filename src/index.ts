import { NgModule } from '@angular/core';

import { ChartComponent } from './ChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';

let _highchartsStatic;

const CHART_DIRECTIVES: any[] = [
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent
];

export const getHighchartsStatic = () => _highchartsStatic;

@NgModule({ declarations: [CHART_DIRECTIVES], exports: [CHART_DIRECTIVES] })
export class ChartModule {
    static init(highchartsStatic, ...highchartsModules) {
        if (!highchartsStatic) {
            throw new Error('Highcharts, Highstock or Highmaps static cannot be empty.')
        }

        // Save Highcharts/Highstock/Highmaps static
        _highchartsStatic = highchartsStatic;

        // Plug highcharts modules
        highchartsModules.forEach((module) => {
            module(_highchartsStatic)
        });

        return { ngModule: ChartModule }
    }
}

export {
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent,
};
