class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    // thân hàm chứa logic thực thi.
    //lớp con có thể dùng lại hoặc ghi đè.
    printType() {
        console.log(`Job type: ${this.type}`);
    }
}
class fullTime extends Job {
    //buộc lớp con phải định nghĩa chi tiết.
    calculatorSalary() {
        return 1000000;
    }
}
class partTime extends Job {
    workingHour;
    constructor(type, time) {
        super(type);
        this.workingHour = time;
    }
    //buộc lớp con phải định nghĩa chi tiết.
    calculatorSalary() {
        return this.workingHour * 30000;
    }
}
const fullTimeJob = new fullTime("Full-Time");
fullTimeJob.printType();
console.log(fullTimeJob.calculatorSalary());
const partTimeJob = new partTime("Part-Time", 150);
partTimeJob.printType();
console.log(partTimeJob.calculatorSalary());
export {};
