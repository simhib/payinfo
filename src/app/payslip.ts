import * as payslipModel from "./paySlipModel";
import {Tax} from "./taxCaluculation";

export class EmployeePayInfo{
    private firstname: string;
    private lastname: string;
    private annualSalary: number;
    private superRate: number;
    private startDate: string;

    constructor(firstName:string, lastName: string, annualSalary: number, superRate:number, startDate: string){
        this.firstname = firstName;
        this.lastname = lastName;
        this.annualSalary = annualSalary;
        this.superRate = superRate;
        this.startDate = startDate;
    }

    getPayInfo()
    {
        let slip: payslipModel.Payslip = {
            name : `${this.firstname} ${this.lastname}`,
            grossIncome: this.calculateGrossIncome(),
            payPeriod: this.startDate,
            tax: Tax.calculateTax(this.annualSalary),
            netIncome: this.calculateNettIncome(),
            superGross: this.calculateSuperGross()
        };

        return slip;
    }

    private calculateGrossIncome(){
        return Math.round(this.annualSalary/12);
    }

    private calculateNettIncome(){
        return this.calculateGrossIncome() - Tax.calculateTax(this.annualSalary);
    }

    private calculateSuperGross(){
        return Math.round(this.calculateGrossIncome() * (this.superRate/100));
    }
}