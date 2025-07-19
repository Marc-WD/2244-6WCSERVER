const calculator = require('./calculation.js');

var sss = 1100;
var pagIbig = 400;
var philHealth = 500;

var dailyPay = calculator.multiply(500, 8);
var gross = calculator.multiply(dailyPay, 5);
var tax = calculator.divide(gross, 10);
var deductionPart1 = calculator.add(sss, pagIbig);
var deductionPart2 = calculator.add(tax, philHealth);
var totalDeductions = calculator.add(deductionPart1, deductionPart2);
var netSalary = calculator.subtract(gross, totalDeductions);

console.log("Gross Income: ₱" + gross);
console.log("Tax (10%): ₱" + tax);
console.log("SSS: ₱" + sss);
console.log("Pag-Ibig Fund: ₱" + pagIbig);
console.log("PhilHealth: ₱" + philHealth);
console.log("Total Deductions: ₱" + totalDeductions);
console.log("Net Salary: ₱" + netSalary);
