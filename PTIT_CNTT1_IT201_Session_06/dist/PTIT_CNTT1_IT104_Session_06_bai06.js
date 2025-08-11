// Định nghĩa lớp Student với các thuộc tính private id và name.
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() { return this.id; }
    getName() { return this.name; }
}
//     Định nghĩa lớp Classroom với thuộc tính students là mảng chứa các học sinh trong lớp.
class classRoom {
    students = [];
    //showStudents: In ra danh sách các học sinh trong lớp.
    showStudents() {
        this.students.forEach((student, index) => {
            console.log(`STT ${index + 1}: ID: ${student.getId()} Name: ${student.getName()}`);
        });
    }
    // addStudent: Thêm học sinh vào trong lớp.
    addStudent(newStudent) {
        this.students.push(newStudent);
    }
    //filterStudent: Nhận tham số truyền vào là id của học sinh và lọc học sinh theo id.
    filterStudent(id) {
        return this.students.filter(Student => Student.getId() === id);
    }
    addStudentInClass(id, allStudents) {
        const index = allStudents.findIndex(Student => Student.getId() === id);
        if (index !== -1) {
            const [student] = allStudents.splice(index, 1);
            if (student)
                this.students.push(student);
        }
    }
}
// Tạo một mảng tất cả học sinh để chứa các thực thể được tạo ra từ lớp Student.
const stu1 = new Student(1, "ha");
const stu2 = new Student(2, "Va");
const stu3 = new Student(3, "Da");
const stu4 = new Student(4, "Ha");
const stu5 = new Student(5, "Ta");
const stu6 = new Student(6, "Ma");
let Students = [stu1, stu2, stu3, stu4, stu5, stu6];
console.log("allStudents");
console.log(Students.map(s => `${s.getId()}-${s.getName()}`).join(", "));
const classA = new classRoom();
const classB = new classRoom();
classA.addStudent(new Student(100, "BA"));
// Chuyển học sinh theo id từ allStudents vào lớp A/B
classA.addStudentInClass(2, Students);
classA.addStudentInClass(5, Students);
classB.addStudentInClass(1, Students);
classB.addStudentInClass(4, Students);
console.log("\n=== Lớp A ===");
classA.showStudents();
console.log("\n=== Lớp B ===");
classB.showStudents();
console.log("AllStudents còn lại:");
console.log(Students.map(s => `${s.getId()}-${s.getName()}`).join(", "));
export {};
