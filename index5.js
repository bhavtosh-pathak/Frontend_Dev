class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (!this.distance || this.distance < 0)
      throw new Error("❌ Invalid distance!");
    return this.distance * 12; // rate per km
  }
}

try {
  const trip = new Trip("Noida", "Delhi", 15);
  console.log("Fare =", trip.calculateFare());
} catch (err) {
  console.log(err.message);
}
