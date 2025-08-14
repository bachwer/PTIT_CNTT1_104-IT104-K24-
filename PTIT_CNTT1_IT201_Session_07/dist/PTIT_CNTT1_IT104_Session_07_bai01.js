"use strict";
// Định nghĩa lớp Employee có các thuộc tính:
//     name: tên nhân viên có phạm vi truy cập là public
// company: tên công ty có mức phạm vi truy cập là protected
// phone: số điện thoại có mức phạm vi truy cập cập là private
Object.defineProperty(exports, "__esModule", { value: true });
// printInfo(): phương thức để In ra tất cả thuộc tính
class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name} Company: ${this.company} Phone: ${this.phone}`);
    }
}
// Định nghĩa lớp con Manager kế thừa từ lớp Employee đã được xây dựng, ngoài các thuộc tính ban đầu của lớp cha thì có thêm thuộc tính teamSize.
class Manager extends Employee {
    teamSize;
    constructor(name, company, phone, size) {
        super(name, company, phone);
        this.teamSize = size;
    }
    printInfo() {
        console.log(`Team Size: ${this.teamSize}`);
    }
}
const m = new Manager("John", "Google", "123456789", 10);
m.printInfo();
//# sourceMappingURL=PTIT_CNTT1_IT104_Session_07_bai01.js.map