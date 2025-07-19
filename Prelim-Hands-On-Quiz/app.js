const { add, subtract, multiply, divide } = require('./calculation');

const ratePerHour = 300;
const hoursPerDay = 4;
const daysWorked = 6;

const grossIncome = multiply(ratePerHour, multiply(hoursPerDay, daysWorked));
console.log("Gross Income:", grossIncome);

const tax = multiply(grossIncome, 0.10);
const sss = 1200;
const pagibig = 300;
const philhealth = 400;

const totalDeductions = add(add(add(tax, sss), pagibig), philhealth);
console.log("Tax:", tax);
console.log("SSS:", sss);
console.log("Pag-Ibig:", pagibig);
console.log("PhilHealth:", philhealth);
console.log("Total Deductions:", totalDeductions);

const netSalary = subtract(grossIncome, totalDeductions);
console.log("Net Salary:", netSalary);

