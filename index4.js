function Car(brand, model) {
    this.brand = brand
    this.model = model
}

Car.prototype.getDetails = function() {
    console.log(this.brand, this.model)
}

let c1 = new Car("Honda", "City")
let c2 = new Car("BMW", "X1")

c1.getDetails()
c2.getDetails()
