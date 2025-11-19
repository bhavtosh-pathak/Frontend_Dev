
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; 
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

  
    applyBonus(percent) {
        let bonusAmount = (this.salary * percent) / 100;
        this.salary += bonusAmount;
    }
}

let e1 = new Employee(1, "John", "HR", 30000);
let e2 = new Employee(2, "Meera", "Finance", 45000);
let e3 = new Employee(3, "Amit", "IT", 60000);
let e4 = new Employee(4, "Riya", "Marketing", 35000);
let e5 = new Employee(5, "Sam", "Operations", 50000);

let employees = [e1, e2, e3, e4, e5];


employees.forEach(emp => emp.applyBonus(10));  


employees.forEach(emp => {
    console.log(`Employee: ${emp.name}, Annual Salary: ₹${emp.getAnnualSalary()}`);
});


let totalAnnualPayout = employees.reduce((total, emp) => {
    return total + emp.getAnnualSalary();
}, 0);

console.log(`\nTotal Annual Payout of Company: ₹${totalAnnualPayout}`);
