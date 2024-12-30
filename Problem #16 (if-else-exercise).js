let side1 = 5,
  side2 = 5,
  side3 = 5;
if (side1 === side2 && side2 === side3) {
  console.log("Triangle is equilateral.");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("Triangle is isosceles.");
} else {
  console.log("Triangle is scalene.");
}
