let salary = 120000;
let rating = 4;
let experience = 6;

let bonusPercent = 0;

if (rating === 5) bonusPercent = 20;
else if (rating === 4) bonusPercent = 15;
else if (rating === 3) bonusPercent = 10;

if (experience > 5) bonusPercent += 5;

let calculatedBonus = (bonusPercent / 100) * salary;
let finalBonus = Math.min(calculatedBonus, 25000);
let totalSalary = salary + finalBonus;

console.log("Calculated Bonus: ₹" + calculatedBonus);
console.log("Final (Capped) Bonus: ₹" + finalBonus);
console.log("Total Salary after Bonus: ₹" + totalSalary);
