let basicSalary = 25000;
let HRA, DA;

if (basicSalary <= 10000) {
  HRA = 0.2 * basicSalary;
  DA = 0.8 * basicSalary;
} else if (basicSalary <= 20000) {
  HRA = 0.25 * basicSalary;
  DA = 0.9 * basicSalary;
} else {
  HRA = 0.3 * basicSalary;
  DA = 0.95 * basicSalary;
}

let grossSalary = basicSalary + HRA + DA;
console.log("Gross Salary: Rs. " + grossSalary.toFixed(2));
