import { ChartComponent } from './ChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
export declare const getHighchartsStatic: () => any;
export declare class ChartModule {
    static init(highchartsStatic: any, ...highchartsModules: any[]): {
        ngModule: typeof ChartModule;
    };
}
export { ChartComponent, ChartSeriesComponent, ChartPointComponent, ChartXAxisComponent, ChartYAxisComponent };
