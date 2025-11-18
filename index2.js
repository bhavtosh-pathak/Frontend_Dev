"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("===== Employee Bonus Calculator =====\n");

for (let i = 0; i < employees.length; i++) {
    try {
        const emp = employees[i];

        if (!emp || typeof emp !== "object") {
            throw new Error("Invalid employee record");
        }
        if (!emp.name) throw new Error("Missing employee name");
        if (!emp.salary) throw new Error("Missing salary");
        if (!emp.years) throw new Error("Missing years");

     
        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (!Number.isFinite(salary)) throw new Error("Invalid salary value");
        if (!Number.isFinite(years)) throw new Error("Invalid years value");

   
        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

    
        console.log(`
Employee: ${emp.name}
Salary  : ₹${salary}
Years   : ${years}
Bonus   : ₹${bonus.toFixed(2)}

        );

    } catch (err) {
        console.log(`Error processing record #${i}: ${err.message}\n`);
    }
}
