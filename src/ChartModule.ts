import { NgModule, ModuleWithProviders } from '@angular/core';

import { ChartComponent } from './ChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { HighchartsService, ClassicModeHighchartsService, StyledModeHighchartsService } from "./HighchartsService";

const CHART_DIRECTIVES: any[] = [
  ChartComponent,
  ChartSeriesComponent,
  ChartPointComponent,
  ChartXAxisComponent,
  ChartYAxisComponent
];

@NgModule({
  declarations: [CHART_DIRECTIVES],
  exports: [CHART_DIRECTIVES],
  providers: [
    { provide: HighchartsService, useClass: ClassicModeHighchartsService }
  ]
})
export class ChartModule {
  public static get styledMode(): ModuleWithProviders {
    return {
      ngModule: ChartModule,
      providers: [
        { provide: HighchartsService, useClass: StyledModeHighchartsService }
      ]
    };
  }

  public static get classicMode(): typeof ChartModule {
    return ChartModule;
  }
};
