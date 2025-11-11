let delays = [3, 7, 12, 4]; 
let totalFine = 0;

for (let days of delays) {
  if (days <= 5) totalFine += days * 10;
  else if (days <= 10) totalFine += days * 20;
  else totalFine += days * 50;
}

if (delays.length > 3) {
  totalFine += 200; 
}

console.log("Number of delayed books:", delays.length);
console.log("Total Fine: ₹" + totalFine);
