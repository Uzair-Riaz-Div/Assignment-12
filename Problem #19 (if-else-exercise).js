let Physics = 80,
  Chemistry = 85,
  Biology = 90,
  Mathematics = 95,
  Computer = 88;
let totalMarks = Physics + Chemistry + Biology + Mathematics + Computer;
let percentage = (totalMarks / 500) * 100;

let grade;
if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else if (percentage >= 40) {
  grade = "E";
} else {
  grade = "F";
}

console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);
