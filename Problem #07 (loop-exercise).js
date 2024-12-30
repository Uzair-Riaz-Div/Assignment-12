function sumEvenNumbers(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    if (i % 2 === 0) {
      sum += i;
    }
    i++;
  }
  return sum;
}

console.log(sumEvenNumbers(10));
