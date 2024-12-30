function sumOddNumbers(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    if (i % 2 !== 0) {
      sum += i;
    }
    i++;
  }
  return sum;
}

console.log(sumOddNumbers(10));
