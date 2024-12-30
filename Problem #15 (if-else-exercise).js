let side1 = 5,
  side2 = 6,
  side3 = 7;
if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  console.log("Triangle is valid.");
} else {
  console.log("Triangle is not valid.");
}
