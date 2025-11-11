let showTime = "evening"; 
let tickets = 4;
let age = 22;
let isStudent = true;

let basePrice = showTime === "morning" ? 120 : 180;
let total = basePrice * tickets;
let discount = 0;


if (isStudent) {
  discount = 0.1 * total;
} else if (age > 60) {
  discount = 0.2 * total;
}

let discountedTotal = total - discount;


if (tickets > 3) {
  discountedTotal += 50;
}

console.log("Base Price: ₹" + total);
console.log("Discounted Total: ₹" + (total - discount));
console.log("Final Amount (after fees): ₹" + discountedTotal);
