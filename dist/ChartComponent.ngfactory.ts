/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './HighchartsService';
import * as import4 from './ChartComponent';
import * as import5 from '@angular/core/src/linker/query_list';
import * as import6 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '@angular/core/src/linker/element_ref';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
var renderType_ChartComponent_Host:import0.RenderComponentType = (null as any);
class _View_ChartComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _HighchartsService_0_4:import3.HighchartsService;
  _ChartComponent_0_5:import4.ChartComponent;
  _query_ChartSeriesComponent_0_0:import5.QueryList<any>;
  _query_ChartXAxisComponent_0_1:import5.QueryList<any>;
  _query_ChartYAxisComponent_0_2:import5.QueryList<any>;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement) {
    super(_View_ChartComponent_Host0,renderType_ChartComponent_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('chart',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ChartComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HighchartsService_0_4 = new import3.HighchartsService();
    this._ChartComponent_0_5 = new import4.ChartComponent(new import10.ElementRef(this._el_0),this._HighchartsService_0_4);
    this._query_ChartSeriesComponent_0_0 = new import5.QueryList<any>();
    this._query_ChartXAxisComponent_0_1 = new import5.QueryList<any>();
    this._query_ChartYAxisComponent_0_2 = new import5.QueryList<any>();
    this._appEl_0.initComponent(this._ChartComponent_0_5,[],compView_0);
    this._query_ChartSeriesComponent_0_0.reset([]);
    this._ChartComponent_0_5.series = this._query_ChartSeriesComponent_0_0.first;
    this._query_ChartXAxisComponent_0_1.reset([]);
    this._ChartComponent_0_5.xAxis = this._query_ChartXAxisComponent_0_1.first;
    this._query_ChartYAxisComponent_0_2.reset([]);
    this._ChartComponent_0_5.yAxis = this._query_ChartYAxisComponent_0_2.first;
    compView_0.create(this._ChartComponent_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.HighchartsService) && (0 === requestNodeIndex))) { return this._HighchartsService_0_4; }
    if (((token === import4.ChartComponent) && (0 === requestNodeIndex))) { return this._ChartComponent_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._ChartComponent_0_5.ngAfterViewInit(); } }
  }
}
function viewFactory_ChartComponent_Host0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ChartComponent_Host === (null as any))) { (renderType_ChartComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,[],{})); }
  return new _View_ChartComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ChartComponentNgFactory:import12.ComponentFactory<import4.ChartComponent> = new import12.ComponentFactory<import4.ChartComponent>('chart',viewFactory_ChartComponent_Host0,import4.ChartComponent);
const styles_ChartComponent:any[] = [];
var renderType_ChartComponent:import0.RenderComponentType = (null as any);
class _View_ChartComponent0 extends import1.AppView<import4.ChartComponent> {
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement) {
    super(_View_ChartComponent0,renderType_ChartComponent,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this.init([],[],[],[]);
    return (null as any);
  }
}
export function viewFactory_ChartComponent0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement):import1.AppView<import4.ChartComponent> {
  if ((renderType_ChartComponent === (null as any))) { (renderType_ChartComponent = viewUtils.createRenderComponentType('/home/fank/Desktop/angular2-highcharts/src/ChartComponent.ts class ChartComponent - inline template',0,import11.ViewEncapsulation.None,styles_ChartComponent,{})); }
  return new _View_ChartComponent0(viewUtils,parentInjector,declarationEl);
}