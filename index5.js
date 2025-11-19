class Cart {
    constructor() {
        this.items = [];
        this.coupon = null;
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((sum, item) => {
            return sum + (item.price * item.quantity);
        }, 0);
    }

    applyCoupon(code) {
        const pattern = /^(SAVE|DISC)(\d{1,2})$/;

        if (!pattern.test(code)) {
            return "Invalid coupon format!";
        }

        const discountPercent = Number(code.match(pattern)[2]);
        this.coupon = discountPercent;
        return `Coupon applied: ${discountPercent}% off`;
    }

    getFinalTotal() {
        const total = this.getTotal();
        if (!this.coupon) return total;

        const discount = (total * this.coupon) / 100;
        return total - discount;
    }
}

const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);

console.log("Total:", cart.getTotal());
console.log(cart.applyCoupon("SAVE20"));
console.log("Final Total:", cart.getFinalTotal());
