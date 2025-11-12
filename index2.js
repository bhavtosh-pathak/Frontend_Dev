let product = " wireless headphones PRO ";


product = product.trim();

let words = product.toLowerCase().split(" ");


words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

let cleanTitle = words.join(" ").replace("Pro", "Pro Edition");


console.log("Cleaned Title:", cleanTitle);
console.log("Title Length:", cleanTitle.length);
