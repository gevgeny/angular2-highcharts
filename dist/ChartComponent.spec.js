"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var ChartComponent_1 = require('./ChartComponent');
var index_1 = require('./index');
var HighchartsService_1 = require('./HighchartsService');
var Mocks_1 = require('./Mocks');
function main() {
    testing_1.describe('ChartComponent', function () {
        var tcb;
        var highchartsServiceMock;
        var create = function (template) {
            var TestComponent = (function () {
                function TestComponent() {
                }
                TestComponent = __decorate([
                    core_1.Component({
                        selector: 'test-component',
                        template: template,
                        directives: [index_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TestComponent);
                return TestComponent;
            }());
            return tcb.createAsync(TestComponent);
        };
        testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (_tcb) {
            highchartsServiceMock = new Mocks_1.HighchartsServiceMock();
            tcb = _tcb.overrideProviders(ChartComponent_1.ChartComponent, [
                core_1.provide(HighchartsService_1.HighchartsService, { useValue: highchartsServiceMock })
            ]);
        }));
        testing_1.it('should create simple chart object', function (done) {
            create('<chart [options]="options"></chart>').then(function (fixture) {
                fixture.componentInstance.options = ['options'];
                spyOn(highchartsServiceMock.Highcharts, 'Chart');
                fixture.detectChanges();
                testing_1.expect(highchartsServiceMock.Highcharts.Chart).toHaveBeenCalled();
                done();
            });
        });
        testing_1.it('should emit the "create" event with HighchartsChartObject', function (done) {
            create('<chart [options]="options" (create)="onCreated($event)"></chart>').then(function (fixture) {
                fixture.componentInstance.onCreated = function (e) {
                    testing_1.expect(e.constructor).toBe(Mocks_1.HighchartsChartObjectMock);
                    done();
                };
                fixture.componentInstance.options = ['options'];
                fixture.detectChanges();
            });
        });
        testing_1.it('should create chart asynchronously', function (done) {
            create('<chart [options]="options" (create)="onCreated($event)"></chart>').then(function (fixture) {
                fixture.componentInstance.onCreated = function (e) {
                    testing_1.expect(e.constructor).toBe(Mocks_1.HighchartsChartObjectMock);
                    done();
                };
                setTimeout(function () {
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                });
            });
        });
        testing_1.describe('should emit Highcharts chart event', function () {
            testing_1.it('"load"', function (done) {
                create('<chart [options]="options" (load)="onEvent()"></chart>').then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitChartEvent('load');
                });
            });
            testing_1.it('"addSeries"', function (done) {
                create('<chart [options]="options" (addSeries)="onEvent()"></chart>').then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitChartEvent('addSeries');
                });
            });
            testing_1.it('"afterPrint"', function (done) {
                create('<chart [options]="options" (afterPrint)="onEvent()"></chart>').then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitChartEvent('afterPrint');
                });
            });
            testing_1.it('"beforePrint"', function (done) {
                create('<chart [options]="options" (beforePrint)="onEvent()"></chart>').then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitChartEvent('beforePrint');
                });
            });
            testing_1.it('"drilldown"', function (done) {
                create('<chart [options]="options" (drilldown)="onEvent()"></chart>').then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitChartEvent('drilldown');
                });
            });
            testing_1.it('"drillup"', function (done) {
                create('<chart [options]="options" (drillup)="onEvent()"></chart>').then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitChartEvent('drillup');
                });
            });
            testing_1.it('"load"', function (done) {
                create('<chart [options]="options" (load)="onEvent()"></chart>').then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitChartEvent('load');
                });
            });
            testing_1.it('"redraw"', function (done) {
                create('<chart [options]="options" (redraw)="onEvent()"></chart>').then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitChartEvent('redraw');
                });
            });
            testing_1.it('"selection"', function (done) {
                create('<chart [options]="options" (selection)="onEvent()"></chart>').then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitChartEvent('selection');
                });
            });
        });
        testing_1.describe('should emit Highcharts series event', function () {
            testing_1.it('"afterAnimate"', function (done) {
                create("\n                <chart [options]=\"options\">\n                    <series (afterAnimate)=\"onEvent()\"></series>\n                </chart>\n            ").then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitSeriesEvent('afterAnimate');
                });
            });
            testing_1.it('"checkboxClick"', function (done) {
                create("\n                <chart [options]=\"options\">\n                    <series (checkboxClick)=\"onEvent()\"></series>\n                </chart>\n            ").then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitSeriesEvent('checkboxClick');
                });
            });
            testing_1.it('"click"', function (done) {
                create("\n                <chart [options]=\"options\">\n                    <series (click)=\"onEvent()\"></series>\n                </chart>\n            ").then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitSeriesEvent('click');
                });
            });
            testing_1.it('"hide"', function (done) {
                create("\n                <chart [options]=\"options\">\n                    <series (hide)=\"onEvent()\"></series>\n                </chart>\n            ").then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitSeriesEvent('hide');
                });
            });
            testing_1.it('"legendItemClick"', function (done) {
                create("\n                <chart [options]=\"options\">\n                    <series (legendItemClick)=\"onEvent()\"></series>\n                </chart>\n            ").then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitSeriesEvent('legendItemClick');
                });
            });
            testing_1.it('"mouseOut"', function (done) {
                create("\n                <chart [options]=\"options\">\n                    <series (mouseOut)=\"onEvent()\"></series>\n                </chart>\n            ").then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitSeriesEvent('mouseOut');
                });
            });
            testing_1.it('"mouseOver"', function (done) {
                create("\n                <chart [options]=\"options\">\n                    <series (mouseOver)=\"onEvent()\"></series>\n                </chart>\n            ").then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitSeriesEvent('mouseOver');
                });
            });
            testing_1.it('"show"', function (done) {
                create("\n                <chart [options]=\"options\">\n                    <series (show)=\"onEvent()\"></series>\n                </chart>\n            ").then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitSeriesEvent('show');
                });
            });
        });
        testing_1.describe('should emit Highcharts point event', function () {
            testing_1.it('"click"', function (done) {
                create("\n                <chart [options]=\"options\">\n                    <series>\n                        <point (click)=\"onEvent()\">\n                        </point>\n                    </series>\n                </chart>\n            ").then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitPointEvent('click');
                });
            });
            testing_1.it('"mouseOut"', function (done) {
                create("\n                <chart [options]=\"options\">\n                    <series>\n                        <point (mouseOut)=\"onEvent()\">\n                        </point>\n                    </series>\n                </chart>\n            ").then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitPointEvent('mouseOut');
                });
            });
            testing_1.it('"mouseOver"', function (done) {
                create("\n                <chart [options]=\"options\">\n                    <series>\n                        <point (mouseOver)=\"onEvent()\">\n                        </point>\n                    </series>\n                </chart>\n            ").then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitPointEvent('mouseOver');
                });
            });
            testing_1.it('"remove"', function (done) {
                create("\n                <chart [options]=\"options\">\n                    <series>\n                        <point (remove)=\"onEvent()\">\n                        </point>\n                    </series>\n                </chart>\n            ").then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitPointEvent('remove');
                });
            });
            testing_1.it('"select"', function (done) {
                create("\n                <chart [options]=\"options\">\n                    <series>\n                        <point (select)=\"onEvent()\">\n                        </point>\n                    </series>\n                </chart>\n            ").then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitPointEvent('select');
                });
            });
            testing_1.it('"unselect"', function (done) {
                create("\n                <chart [options]=\"options\">\n                    <series>\n                        <point (unselect)=\"onEvent()\">\n                        </point>\n                    </series>\n                </chart>\n            ").then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitPointEvent('unselect');
                });
            });
            testing_1.it('"update"', function (done) {
                create("\n                <chart [options]=\"options\">\n                    <series>\n                        <point (update)=\"onEvent()\">\n                        </point>\n                    </series>\n                </chart>\n            ").then(function (fixture) {
                    fixture.componentInstance.onEvent = function () { return done(); };
                    fixture.componentInstance.options = ['options'];
                    fixture.detectChanges();
                    Mocks_1.ChartEventEmitter.emitPointEvent('update');
                });
            });
        });
    });
}
exports.main = main;
//# sourceMappingURL=ChartComponent.spec.js.map