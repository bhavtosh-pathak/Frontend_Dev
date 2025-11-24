class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    const avg = this.marks.reduce((sum, m) => sum + m, 0) / this.marks.length;
    return avg;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return "A";
    else if (avg >= 75) return "B";
    else if (avg >= 50) return "C";
    return "F";
  }
}

const s1 = new Student("Rohan", [90, 92, 95]);
const s2 = new Student("Priya", [75, 70, 80]);
const s3 = new Student("Aman", [40, 55, 45]);

console.log(s1.name, s1.getGrade());
console.log(s2.name, s2.getGrade());
console.log(s3.name, s3.getGrade());
