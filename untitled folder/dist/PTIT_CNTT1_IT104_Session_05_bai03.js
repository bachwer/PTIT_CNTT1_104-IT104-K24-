// The definition of Employee class has the properties:
class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfor() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
const emp = new Employee("Alice", "FPT", "09213231");
emp.printInfor();
console.log(emp.name);
export {};
