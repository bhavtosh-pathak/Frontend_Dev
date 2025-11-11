let baseCost = 2500;
let isDiningIn = true;

let gst = 0.05 * baseCost;
let serviceTax = isDiningIn ? 0.1 * baseCost : 0;
let subtotal = baseCost + gst + serviceTax;
let tip = subtotal > 2000 ? 0.08 * subtotal : 0;
let finalTotal = subtotal + tip;

console.log("Base Amount: ₹" + baseCost);
console.log("GST (5%): ₹" + gst.toFixed(2));
console.log("Service Tax: ₹" + serviceTax.toFixed(2));
console.log("Tip: ₹" + tip.toFixed(2));
console.log("Final Total: ₹" + finalTotal.toFixed(2));
