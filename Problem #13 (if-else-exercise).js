let amount = 5555;
let notes = {
  2000: 0,
  500: 0,
  200: 0,
  100: 0,
  50: 0,
  20: 0,
  10: 0,
  5: 0,
  2: 0,
  1: 0,
};

let denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

for (let i = 0; i < denominations.length; i++) {
  if (amount >= denominations[i]) {
    notes[denominations[i]] = Math.floor(amount / denominations[i]);
    amount = amount % denominations[i];
  }
}

console.log("Total number of notes:");
for (let key in notes) {
  if (notes[key] !== 0) {
    console.log(key + " : " + notes[key]);
  }
}
