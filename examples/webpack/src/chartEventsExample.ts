import {Component} from '../../../node_modules/@angular/core';

@Component({
    selector: 'chart-events-example',
    template: `
        <chart [options]="options" (selection)="onChartSelection($event)">
            <series (mouseOver)="onSeriesMouseOver($event)">
                <point (select)="onPointSelect($event)"></point>
            </series>
        </chart>
    `
})
export class ChartEventsExample {
    constructor() {
        this.options = {
            title : { text : 'chart events example' },
            chart: { zoomType: 'x'},
            series: [{
                data: [29.9, 71.5, 106.4, 148.5, 216.4, 194.1, 95.6, 54.4],
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