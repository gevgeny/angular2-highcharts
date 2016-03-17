import {
    ComponentFixture,
    describe,
    expect,
    fakeAsync,
    injectAsync,
    inject,
    it,
    tick,
    TestComponentBuilder,
    beforeEach,
    beforeEachProviders,
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
import { HighchartsServiceMock, HighchartsChartObjectMock } from './HighchartsServiceMock';

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
        })
    });
});
