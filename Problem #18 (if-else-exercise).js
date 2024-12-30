let costPrice = 500,
  sellingPrice = 700;
let profit = sellingPrice - costPrice;

if (profit > 0) {
  console.log("Profit of Rs. " + profit);
} else if (profit < 0) {
  console.log("Loss of Rs. " + Math.abs(profit));
} else {
  console.log("No profit, no loss.");
}
