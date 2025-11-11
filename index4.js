let marks = [95, 82, 67, 56, 30];
let total = 0;
let failedSubjects = 0;

for (let m of marks) {
  total += m;
  if (m < 40) failedSubjects++;
}

let average = total / marks.length;
let percentage = average;

let grade = "";
if (percentage >= 90) grade = "A+";
else if (percentage >= 75) grade = "A";
else if (percentage >= 60) grade = "B";
else if (percentage >= 40) grade = "C";
else grade = "Fail";

console.log("Average: " + average);
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);

if (failedSubjects >= 2) {
  console.log("Repeat Year ");
} else {
  console.log("Status: Passed ");
}
