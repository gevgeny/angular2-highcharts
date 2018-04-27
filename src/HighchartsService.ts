import { Injectable } from '@angular/core';

@Injectable()
export class HighchartsStatic {

}

@Injectable()
export class HighchartsService {
    _highchartsStatice: HighchartsStatic

    constructor() {
        this._highchartsStatice = require('highcharts');
    }

    getHighchartsStatic() {
        return this._highchartsStatice;
    }
}
