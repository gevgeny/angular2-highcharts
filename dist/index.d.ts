import { ModuleWithProviders } from '@angular/core';
import { ChartComponent } from './ChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
export declare function getHighchartsStatic(): Object;
export declare class ChartModule {
    static forRoot(highchartsStatic: Object, ...highchartsModules: any[]): ModuleWithProviders;
}
export { ChartComponent, ChartSeriesComponent, ChartPointComponent, ChartXAxisComponent, ChartYAxisComponent };
