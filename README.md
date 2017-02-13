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
Test is in the following file
* payslip.spec.ts

## Setup ##
Clone the repocitory to your local machine and make sure Node.js is install `https://nodejs.org/en/`. Then in the root folder of the project run 

`npm install`

This will install all the required npm packages to run the project.

To test the project run the `ng serve` command in the root of the project. This will load a dev server.
Once the server is running navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). Make sure Chrome is intall on the computer.

