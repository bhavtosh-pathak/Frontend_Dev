class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    console.log(`${this.name} is working in ${this.department}`);
  }
}

class Manager extends Employee {
  work() {
    console.log(`${this.name} is managing the team in ${this.department}`);
  }
}

let e = new Employee("Aman", "HR");
let m = new Manager("Suman", "IT");

e.work(); 
m.work();
