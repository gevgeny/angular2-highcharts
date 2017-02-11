import { getHighchartsStatic } from './index';
import { Injectable } from '@angular/core';

@Injectable()
export class HighchartsService {
    getHighchartsStatic() {
        return getHighchartsStatic();
    }
}
