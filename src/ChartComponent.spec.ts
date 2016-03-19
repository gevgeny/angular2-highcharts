import {
    ComponentFixture,
    describe,
    expect,
    inject,
    it,
    tick,
    TestComponentBuilder,
    beforeEach,
    setBaseTestProviders
} from 'angular2/testing';
import {
    TEST_BROWSER_PLATFORM_PROVIDERS,
    TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';

import { provide, Component } from 'angular2/core';
import { ChartComponent } from './ChartComponent';
import { CHART_DIRECTIVES } from './index';
import { HighchartsService } from './HighchartsService';
import { HighchartsServiceMock, HighchartsChartObjectMock, ChartEventEmitter } from './Mocks';

setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

describe('ChartComponent', () => {
    let tcb;
    let highchartsServiceMock;

    let create = (template : string) => {
        @Component({
            selector : 'test-component',
            template : template,
            directives : [CHART_DIRECTIVES]
        })
        class TestComponent { }

        return tcb.createAsync(TestComponent);
    };

    beforeEach(inject([TestComponentBuilder], _tcb => {
        highchartsServiceMock = new HighchartsServiceMock();
        tcb = _tcb.overrideProviders(ChartComponent, [
            provide(HighchartsService, { useValue: highchartsServiceMock })
        ]);
    }));

    it('should create simple chart object', (done) => {
        create('<chart [options]="options"></chart>').then(fixture => {
            fixture.componentInstance.options = ['options'];
            spyOn(highchartsServiceMock.Highcharts, 'Chart');

            fixture.detectChanges();
            expect(highchartsServiceMock.Highcharts.Chart).toHaveBeenCalled();
            done();
        })
    });

    it('should emit the "create" event with HighchartsChartObject', (done) => {
        create('<chart [options]="options" (create)="onCreated($event)"></chart>').then(fixture => {
            fixture.componentInstance.onCreated = function (e) {
                expect(e.constructor).toBe(HighchartsChartObjectMock);
                done();
            };
            fixture.componentInstance.options = ['options'];
            fixture.detectChanges();
        });
    });

    it('should create chart asynchronously', (done) => {
        create('<chart [options]="options" (create)="onCreated($event)"></chart>').then(fixture => {
            fixture.componentInstance.onCreated = function (e) {
                expect(e.constructor).toBe(HighchartsChartObjectMock);
                done();
            };
            setTimeout(() => {
                fixture.componentInstance.options = ['options'];
                fixture.detectChanges();
            });
        });
    });

    it('should emit the "load" event', (done) => {
        create('<chart [options]="options" (load)="onEvent()"></chart>').then(fixture => {
            fixture.componentInstance.onEvent = () => done();
            fixture.componentInstance.options = ['options'];
            fixture.detectChanges();
            ChartEventEmitter.emitChartEvent('load');
        });
    });

    it('should emit the "addSeries" event', (done) => {
        create('<chart [options]="options" (addSeries)="onEvent()"></chart>').then(fixture => {
            fixture.componentInstance.onEvent = () => done();
            fixture.componentInstance.options = ['options'];
            fixture.detectChanges();
            ChartEventEmitter.emitChartEvent('addSeries');
        });
    });

    it('should emit the "afterPrint" event', (done) => {
        create('<chart [options]="options" (afterPrint)="onEvent()"></chart>').then(fixture => {
            fixture.componentInstance.onEvent = () => done();
            fixture.componentInstance.options = ['options'];
            fixture.detectChanges();
            ChartEventEmitter.emitChartEvent('afterPrint');
        });
    });

    it('should emit the "beforePrint" event', (done) => {
        create('<chart [options]="options" (beforePrint)="onEvent()"></chart>').then(fixture => {
            fixture.componentInstance.onEvent = () => done();
            fixture.componentInstance.options = ['options'];
            fixture.detectChanges();
            ChartEventEmitter.emitChartEvent('beforePrint');
        });
    });

    it('should emit the "drilldown" event', (done) => {
        create('<chart [options]="options" (drilldown)="onEvent()"></chart>').then(fixture => {
            fixture.componentInstance.onEvent = () => done();
            fixture.componentInstance.options = ['options'];
            fixture.detectChanges();
            ChartEventEmitter.emitChartEvent('drilldown');
        });
    });

    it('should emit the "drillup" event', (done) => {
        create('<chart [options]="options" (drillup)="onEvent()"></chart>').then(fixture => {
            fixture.componentInstance.onEvent = () => done();
            fixture.componentInstance.options = ['options'];
            fixture.detectChanges();
            ChartEventEmitter.emitChartEvent('drillup');
        });
    });

    it('should emit the "load" event', (done) => {
        create('<chart [options]="options" (load)="onEvent()"></chart>').then(fixture => {
            fixture.componentInstance.onEvent = () => done();
            fixture.componentInstance.options = ['options'];
            fixture.detectChanges();
            ChartEventEmitter.emitChartEvent('load');
        });
    });

    it('should emit the "redraw" event', (done) => {
        create('<chart [options]="options" (redraw)="onEvent()"></chart>').then(fixture => {
            fixture.componentInstance.onEvent = () => done();
            fixture.componentInstance.options = ['options'];
            fixture.detectChanges();
            ChartEventEmitter.emitChartEvent('redraw');
        });
    });

    it('should emit the "selection" event', (done) => {
        create('<chart [options]="options" (selection)="onEvent()"></chart>').then(fixture => {
            fixture.componentInstance.onEvent = () => done();
            fixture.componentInstance.options = ['options'];
            fixture.detectChanges();
            ChartEventEmitter.emitChartEvent('selection');
        });
    });
});
