// Định nghĩa lớp abstract Job có
// Thuộc tính type
//     Phương thức printType để in ra loại công việc
// Phương thức abstract calculateSalary để tính lương khi làm công việc đó.
class job {
    type;
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Type: ${this.type}`);
    }
}
//     Định nghĩa lớp PartimeJob và lớp FulltimeJob kế thừa lớp Job.
//     Lớp PartimeJob có thêm thuộc tính workingHour.
//     Phương thức calculateSalary để tính lương công việc.
class PartTime extends job {
    workingHour;
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary(Hour) {
        return (Hour * 30);
    }
}
class fullTIme extends job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000;
    }
}
const order = new PartTime("Order", 150);
const manager = new fullTIme("Manager");
console.log(`Oder (partTime): ${order.calculateSalary(150)}`);
console.log(`Manager (fullTime): ${manager.calculateSalary()}`);
export {};
