let a = 1,
  b = -3,
  c = 2;
let discriminant = b * b - 4 * a * c;
let root1, root2;

if (discriminant > 0) {
  root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log("Roots are real and different.");
  console.log("Root 1: " + root1);
  console.log("Root 2: " + root2);
} else if (discriminant === 0) {
  root1 = root2 = -b / (2 * a);
  console.log("Roots are real and equal.");
  console.log("Root: " + root1);
} else {
  let realPart = -b / (2 * a);
  let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
  console.log("Roots are complex.");
  console.log("Root 1: " + realPart + " + " + imaginaryPart + "i");
  console.log("Root 2: " + realPart + " - " + imaginaryPart + "i");
}
