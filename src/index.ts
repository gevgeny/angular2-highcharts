import { NgModule, ModuleWithProviders } from '@angular/core';

import { ChartComponent } from './ChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';

let _highchartsStatic: Object;

const CHART_DIRECTIVES: any[] = [
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent
];

export function getHighchartsStatic() {
    return _highchartsStatic;
}

@NgModule({ declarations: [CHART_DIRECTIVES], exports: [CHART_DIRECTIVES] })
export class ChartModule {
    static forRoot(highchartsStatic: Object, ...highchartsModules): ModuleWithProviders {
        if (!highchartsStatic) {
            throw new Error('Highcharts module cannot be empty.')
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
