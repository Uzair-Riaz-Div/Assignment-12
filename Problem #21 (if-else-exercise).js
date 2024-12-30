let units = 300;
let totalBill = 0;

if (units <= 50) {
  totalBill = units * 0.5;
} else if (units <= 150) {
  totalBill = 50 * 0.5 + (units - 50) * 0.75;
} else if (units <= 250) {
  totalBill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
} else {
  totalBill = 50 * 0.5 + 100 * 0.75 + 150 * 1.2 + (units - 250) * 1.5;
}

console.log("Total Electricity Bill: Rs. " + totalBill.toFixed(2));
