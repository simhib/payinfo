import * as ps from "./payslip";
import {Tax} from "./taxCaluculation"

describe('Test the Tax table caluculations',()=>{
        it('When Annual Salary is 17000 then tax be 0',()=>{
            expect(Tax.calculateTax(17000)).toBe(0);
        });

        it('When Annual Salary is 36000 then tax be 282',()=>{
            expect(Tax.calculateTax(36000)).toBe(282);
        });

        it('When Annual Salary is 60050 then tax be 922',()=>{
            expect(Tax.calculateTax(60050)).toBe(922);
        });

        it('When Annual Salary is 130000 then tax be 3004',()=>{
            expect(Tax.calculateTax(130000)).toBe(3004);
        });

        it('When Annual Salary is 200000 then tax be 5296',()=>{
            expect(Tax.calculateTax(200000)).toBe(5296);
        });
    });
describe('Pay Slip',() =>{
    describe('David Rudd with a Annual Salary: 60050,Supe-rate: 9% and Date: 01 March - 31 March',() =>{
        let test = new ps.EmployeePayInfo('David','Rudd',60050,9,'01 March - 31 March');
        let slip = test.getPayInfo();

        it('payperiod should be 01 March - 31 March',() =>{
            expect(slip.payPeriod).toBe('01 March - 31 March');
        });

        it('Name should be David Rudd',()=>{
            expect(slip.name).toBe('David Rudd');
        });

        it('Monthly Salary should be 5004', ()=>{
            expect(slip.grossIncome).toBe(5004);
        });

        it('Tax should be 922',()=>{
            expect(slip.tax).toBe(922);
        });

        it('Net Salary should be 4082',()=>{
            expect(slip.netIncome).toBe(4082);
        });

        it('Super should be 450',()=>{
            expect(slip.superGross).toBe(450);
        });
    });
    describe('Ryan Chen with Annual Salary: 120000, Super-rate: 10% and Date: 01 March - 31 March', ()=>{
        let test = new ps.EmployeePayInfo('Ryan', 'Chen', 120000, 10, '01 March - 31 March');
        let slip = test.getPayInfo();

        it('Payperiod should be 01 March - 31 March',()=>{
            expect(slip.payPeriod).toBe('01 March - 31 March');
        });

        it('Name should be Ryan Chen',()=>{
            expect(slip.name).toBe('Ryan Chen');
        });

        it('Monthly Salary should be 10000',()=>{
            expect(slip.grossIncome).toBe(10000);
        });

        it('Tax should be 2696',()=>{
            expect(slip.tax).toBe(2696);
        });

        it('Net Salary should be 7304',()=>{
            expect(slip.netIncome).toBe(7304);
        });

        it('Super should be 1000',()=>{
            expect(slip.superGross).toBe(1000);
        });
    });
    
})
