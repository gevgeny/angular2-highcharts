
import {Component} from '../../node_modules/angular2/core';
import { CHART_DIRECTIVES, Highcharts } from '../../index';



Highcharts.setOptions({
    colors: ['#058DC7', '#50B432', '#ED561B']
});

@Component({
    selector: 'simple-chart-example',
    directives: [CHART_DIRECTIVES],
    template: `
        <chart [options]="options"></chart>
    `
})
export class SimpleChartExample {
    constructor() {
        let formatting = false;
        let text;

        this.options = {
            tooltip : {
                useHTML : true,
                formatter (tooltip) {
                    console.log('qwe');

                    if (!formatting) {
                        formatting = true;
                        setTimeout(() => {
                            text = `<p>123 123 123</p>`;
                            //document.querySelector('.highcharts-tooltip>span').innerHTML
                            tooltip.refresh(this.point);
                        }, 0);
                        return '';
                    } else {
                        formatting = false;
                        return text;
                    }
                    //return this.x % 2 === 0 ? `<p>123 123 123</p>` : `<p>123</p>`;
                }
            },
            title : { text : 'simple chart' },
            series: [{
                data: Array.from(new Array(100), (x,i) => i),
            }]
        };
    }
    options: Object;
}