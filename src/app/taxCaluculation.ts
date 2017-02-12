export class Tax{

    static calculateTax(annualSalary: number){
        
        let taxBase: number = 0;
        let taxPerDollar: number = 0;
        let toBeTaxed: number = 0;
        if(annualSalary < 18201){
            return 0;
        } else if(annualSalary < 37001){
            taxPerDollar = 0.19;
            toBeTaxed = annualSalary - 18200;
        }
        else if(annualSalary < 80001){
            taxBase = 3572;
            taxPerDollar = 0.325;
            toBeTaxed = annualSalary - 37000;
        }else if(annualSalary < 180001){
            taxBase = 17547;
            taxPerDollar = 0.37;
            toBeTaxed = annualSalary - 80000;
        }else if(annualSalary > 180000){
            taxBase = 54547;
            taxPerDollar = 0.45;
            toBeTaxed = annualSalary - 180000;
        }
        return Math.round((taxBase + (toBeTaxed * taxPerDollar))/12);
    }
}