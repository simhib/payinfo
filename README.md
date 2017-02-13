# PayslipApp

This is to calculate a payslip form the detail provided from the user. It will calculate one payslip at a time for the given input.

**Input**
* First Name
* Last Name
* Annual Salary
* Super Rate
* Payment Start Date

**Output**
* Name
* Pay Period
* Gross Income
* Income Tax
* Net Income
* Super

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.
All code was written in Typescript. 

The main payslip code is under the src/app location
* payslip.ts
* paySlipModel.ts
* taxCalculation.ts

Made the taxCalculation seperate so test can be run.  This will test the tax calculations for diffrent annual salaries.
Test were added for the payslip aswell that will test the outcome for a certain input.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). Make sure Chrome is intall on the computer.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
