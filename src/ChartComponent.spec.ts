import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ChartComponent } from './ChartComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { HighchartsService } from './HighchartsService';
import { HighchartsServiceMock, HighchartsChartObjectMock, ChartEventEmitter } from './Mocks';

export function main() {
    describe('ChartComponent', () => {
        let highchartsServiceMock : any;

        @Component({
            selector : 'test-component',
            template : ''
        })
        class TestComponent {
            options: any;
            onCreated: any;
            onEvent: any;
        }

        beforeEach(() => {
            highchartsServiceMock = new HighchartsServiceMock();
            TestBed.configureTestingModule({
                declarations: [
                    TestComponent,
                    ChartComponent,
                    ChartPointComponent,
                    ChartSeriesComponent,
                    ChartXAxisComponent,
                    ChartYAxisComponent,
                ],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA,
                ],
            });
        });

        let create = (template: string) => {
            return TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            }).overrideComponent(ChartComponent, {
                set: {
                    providers: [
                        { provide: HighchartsService, useValue: highchartsServiceMock }
                    ]
                }
            }).compileComponents().then(() => {
                return TestBed.createComponent(TestComponent);
            });
        };

        it('should create simple chart object', (done) => {
            create('<chart [options]="options"></chart>').then(fixture => {
                fixture.componentInstance.options = ['options'];
                spyOn(highchartsServiceMock.getHighchartsStatic(), 'Chart');

                fixture.detectChanges();
                expect(highchartsServiceMock.getHighchartsStatic().Chart).toHaveBeenCalled();
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

        describe('should emit Highcharts chart event', () => {
            it('"load"', (done) => {
                create('<chart [options]="options" (load)="onEvent()"></chart>').then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitChartEvent('load');
                });
            });

            it('"addSeries"', (done) => {
                create('<chart [options]="options" (addSeries)="onEvent()"></chart>').then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitChartEvent('addSeries');
                });
            });

            it('"afterPrint"', (done) => {
                create('<chart [options]="options" (afterPrint)="onEvent()"></chart>').then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitChartEvent('afterPrint');
                });
            });

            it('"beforePrint"', (done) => {
                create('<chart [options]="options" (beforePrint)="onEvent()"></chart>').then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitChartEvent('beforePrint');
                });
            });

            it('"drilldown"', (done) => {
                create('<chart [options]="options" (drilldown)="onEvent()"></chart>').then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitChartEvent('drilldown');
                });
            });

            it('"drillup"', (done) => {
                create('<chart [options]="options" (drillup)="onEvent()"></chart>').then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitChartEvent('drillup');
                });
            });

            it('"load"', (done) => {
                create('<chart [options]="options" (load)="onEvent()"></chart>').then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitChartEvent('load');
                });
            });

            it('"redraw"', (done) => {
                create('<chart [options]="options" (redraw)="onEvent()"></chart>').then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitChartEvent('redraw');
                });
            });

            it('"selection"', (done) => {
                create('<chart [options]="options" (selection)="onEvent()"></chart>').then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitChartEvent('selection');
                });
            });
        });

        describe('should emit Highcharts series event', () => {
            it('"afterAnimate"', (done) => {
                create(`
                <chart [options]="options">
                    <series (afterAnimate)="onEvent()"></series>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitSeriesEvent('afterAnimate');
                });
            });

            it('"checkboxClick"', (done) => {
                create(`
                <chart [options]="options">
                    <series (checkboxClick)="onEvent()"></series>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitSeriesEvent('checkboxClick');
                });
            });

            it('"click"', (done) => {
                create(`
                <chart [options]="options">
                    <series (click)="onEvent()"></series>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitSeriesEvent('click');
                });
            });

            it('"hide"', (done) => {
                create(`
                <chart [options]="options">
                    <series (hide)="onEvent()"></series>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitSeriesEvent('hide');
                });
            });

            it('"legendItemClick"', (done) => {
                create(`
                <chart [options]="options">
                    <series (legendItemClick)="onEvent()"></series>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitSeriesEvent('legendItemClick');
                });
            });

            it('"mouseOut"', (done) => {
                create(`
                <chart [options]="options">
                    <series (mouseOut)="onEvent()"></series>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitSeriesEvent('mouseOut');
                });
            });

            it('"mouseOver"', (done) => {
                create(`
                <chart [options]="options">
                    <series (mouseOver)="onEvent()"></series>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitSeriesEvent('mouseOver');
                });
            });

            it('"show"', (done) => {
                create(`
                <chart [options]="options">
                    <series (show)="onEvent()"></series>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitSeriesEvent('show');
                });
            });
        });

        describe('should emit Highcharts point event', () => {
            it('"click"', (done) => {
                create(`
                <chart [options]="options">
                    <series>
                        <point (click)="onEvent()">
                        </point>
                    </series>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitPointEvent('click');
                });
            });

            it('"mouseOut"', (done) => {
                create(`
                <chart [options]="options">
                    <series>
                        <point (mouseOut)="onEvent()">
                        </point>
                    </series>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitPointEvent('mouseOut');
                });
            });

            it('"mouseOver"', (done) => {
                create(`
                <chart [options]="options">
                    <series>
                        <point (mouseOver)="onEvent()">
                        </point>
                    </series>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitPointEvent('mouseOver');
                });
            });

            it('"remove"', (done) => {
                create(`
                <chart [options]="options">
                    <series>
                        <point (remove)="onEvent()">
                        </point>
                    </series>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitPointEvent('remove');
                });
            });

            it('"select"', (done) => {
                create(`
                <chart [options]="options">
                    <series>
                        <point (select)="onEvent()">
                        </point>
                    </series>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitPointEvent('select');
                });
            });

            it('"unselect"', (done) => {
                create(`
                <chart [options]="options">
                    <series>
                        <point (unselect)="onEvent()">
                        </point>
                    </series>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitPointEvent('unselect');
                });
            });

            it('"update"', (done) => {
                create(`
                <chart [options]="options">
                    <series>
                        <point (update)="onEvent()">
                        </point>
                    </series>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitPointEvent('update');
                });
            });
        });

        describe('should emit Highcharts xAxis event', () => {
            it('"afterBreaks"', (done) => {
                create(`
                <chart [options]="options">
                    <xAxis (afterBreaks)="onEvent()">
                    </xAxis>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitXAxisEvent('afterBreaks');
                });
            });

            it('"afterSetExtremes"', (done) => {
                create(`
                <chart [options]="options">
                    <xAxis (afterSetExtremes)="onEvent()">
                    </xAxis>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitXAxisEvent('afterSetExtremes');
                });
            });

            it('"pointBreak"', (done) => {
                create(`
                <chart [options]="options">
                    <xAxis (pointBreak)="onEvent()">
                    </xAxis>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitXAxisEvent('pointBreak');
                });
            });

            it('"pointInBreak"', (done) => {
                create(`
                <chart [options]="options">
                    <xAxis (pointInBreak)="onEvent()">
                    </xAxis>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitXAxisEvent('pointInBreak');
                });
            });

            it('"setExtremes"', (done) => {
                create(`
                <chart [options]="options">
                    <xAxis (setExtremes)="onEvent()">
                    </xAxis>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitXAxisEvent('setExtremes');
                });
            });
        });

        describe('should emit Highcharts yAxis event', () => {
            it('"afterBreaks"', (done) => {
                create(`
                <chart [options]="options">
                    <yAxis (afterBreaks)="onEvent()">
                    </yAxis>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitYAxisEvent('afterBreaks');
                });
            });

            it('"afterSetExtremes"', (done) => {
                create(`
                <chart [options]="options">
                    <yAxis (afterSetExtremes)="onEvent()">
                    </yAxis>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitYAxisEvent('afterSetExtremes');
                });
            });

            it('"pointBreak"', (done) => {
                create(`
                <chart [options]="options">
                    <yAxis (pointBreak)="onEvent()">
                    </yAxis>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitYAxisEvent('pointBreak');
                });
            });

            it('"pointInBreak"', (done) => {
                create(`
                <chart [options]="options">
                    <yAxis (pointInBreak)="onEvent()">
                    </yAxis>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitYAxisEvent('pointInBreak');
                });
            });

            it('"setExtremes"', (done) => {
                create(`
                <chart [options]="options">
                    <yAxis (setExtremes)="onEvent()">
                    </yAxis>
                </chart>
            `).then(fixture => {
                    fixture.componentInstance.onEvent = () => done();
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    ChartEventEmitter.emitYAxisEvent('setExtremes');
                });
            });
        });

    });
}
