import { Component, Input, OnChanges } from '@angular/core';
import {Payslip} from './paySlipModel';

@Component({
    selector: 'slip-info',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.slipcomponent.html'
})

export class SlipComponent{
    private _slip: Payslip;

    @Input()
    set slip(slip: Payslip)
    {
        this._slip = slip;
    }

    get slip(){return this._slip;}
}

