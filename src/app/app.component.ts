import { Component } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {EmployeePayInfo} from './payslip';
import {Payslip} from './paySlipModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public payInfo = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    annualSalary: ["", Validators.required],
    superRate: ["", Validators.required],
    date: ["", Validators.required]
  }); 
  private slip : EmployeePayInfo; 
  title = 'Pay Slip Calculator';
  paySlip : Payslip;

  constructor(public fb: FormBuilder){
  }

  generateSlip(event){
    let output = this.payInfo.value;
    this.slip = new EmployeePayInfo(output["firstName"],output["lastName"],output["annualSalary"],output["superRate"],output["date"]);
    this.paySlip = this.slip.getPayInfo();
  }
}
