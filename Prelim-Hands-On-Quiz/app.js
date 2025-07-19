const calculator = require('./calculation.js');

var ratePerHour = 300;
var hoursPerDay = 4;
var daysWorked = 6;

var totalHours = calculator.multiply(hoursPerDay, daysWorked);
var grossIncome = calculator.multiply(ratePerHour, totalHours);
var tax = calculator.multiply(grossIncome, 0.10);
var sss = 1200;
var pagIbig = 300;
var philHealth = 400;

var part1 = calculator.add(sss, pagIbig);
var part2 = calculator.add(tax, philHealth);
var totalDeductions = calculator.add(part1, part2);
var netSalary = calculator.subtract(grossIncome, totalDeductions);

console.log("Gross Income: ₱" + grossIncome);
console.log("Tax: ₱" + tax);
console.log("SSS: ₱" + sss);
console.log("Pag-Ibig fund: ₱" + pagIbig);
console.log("PhilHealth: ₱" + philHealth);
console.log("Total Deductions: ₱" + totalDeductions);
console.log("Net Salary: ₱" + netSalary);
