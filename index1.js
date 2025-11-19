
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

  
    applyDiscount(percent) {
        const discountAmount = (this.price * percent) / 100;
        this.price = this.price - discountAmount;
    }

   
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}


let p1 = new Product(1, "Laptop", 50000, "Electronics");
let p2 = new Product(2, "Shoes", 1500, "Fashion");
let p3 = new Product(3, "Pen", 50, "Stationery");
let p4 = new Product(4, "Mobile", 12000, "Electronics");


p1.applyDiscount(10);  
p2.applyDiscount(5);    

let products = [p1, p2, p3, p4];


let costlyProducts = products.filter(product => product.price > 1000);


console.log("Products with price > 1000:");
costlyProducts.forEach(product => console.log(product.getDetails()));
