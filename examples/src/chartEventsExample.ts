import {Component} from '../../node_modules/angular2/core';
import { CHART_DIRECTIVES } from '../../index';

@Component({
    selector: 'chart-events-example',
    directives: [CHART_DIRECTIVES],
    template: `
        <h3>chart events example</h3>
        <div>
            <chart [options]="options" (selection)="onChartSelection($event)">
                <series (mouseOver)="onSeriesMouseOver($event)">
                    <point (select)="onPointSelect($event)"></point>
                </series>
            </chart>
        </div>
    `
})
export class ChartEventsExample {
    constructor() {
        this.options = {
            chart: {
                zoomType: 'x'
            },
            xAxis: {},
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                type: "line",
                allowPointSelect: true
            }]
        };
    }
    options: Object;
    onChartSelection (e) {
        console.log('onChartSelection', e);
    }
    onSeriesMouseOver (e) {
        console.log('onSeriesMouseOver', e);
    }
    onPointSelect (e) {
        console.log('onPointSelect', e);
    }
}