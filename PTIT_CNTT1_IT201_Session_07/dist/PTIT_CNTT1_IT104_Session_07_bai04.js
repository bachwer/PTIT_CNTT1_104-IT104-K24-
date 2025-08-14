"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Định nghĩa abstract class Person có thuộc tính name và phương thức displayInfo để in thông tin.
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(this.name);
    }
}
// Định nghĩa lớp Student kế thừa lớp Person và có thêm thuộc tính id. 
// Khởi tạo đối tượng từ lớp Student và dùng phương thức displayInfo để in id và tên sinh viên.
class Student extends Person {
    id;
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(this.id);
        console.log(this.name);
    }
}
const stu1 = new Student("Bach", "123");
stu1.displayInfo();
// Định nghĩa lớp Teacher kế thừa lớp Person và có thêm thuộc tính subject. 
// Khởi tạo đối tượng từ lớp Teacher và dùng phương thức displayInfo để in tên giáo viên và môn học.
class Teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(this.subject);
        console.log(this.name);
    }
}
console.log();
const Teacher1 = new Teacher("sd", "MAth");
Teacher1.displayInfo();
//# sourceMappingURL=PTIT_CNTT1_IT104_Session_07_bai04.js.map