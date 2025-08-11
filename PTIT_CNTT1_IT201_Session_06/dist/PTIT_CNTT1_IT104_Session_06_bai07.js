class student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    changeInfor(id, Name) {
        this.id = id;
        this.name = Name;
    }
}
class ClassRoom {
    students = [];
    showAllStudent() {
        this.students.forEach((student, index) => {
            console.log(`STT ${index + 1}| ID: ${student.getId()} - Name: ${student.getName()}`);
        });
    }
    addStudent(Id, ListAllStudent) {
        const index = ListAllStudent.findIndex(student => student.getId() === Id);
        if (index !== -1) {
            const [student] = ListAllStudent.splice(index, 1);
            if (student)
                this.students.push(student);
        }
    }
    updateInf(id, newId, newName) {
        this.students.forEach((student) => {
            if (student.getId() === id) {
                student.changeInfor(newId, newName);
            }
        });
    }
    removeStu(id, listAllStudent) {
        const index = this.students.findIndex(stu => stu.getId() === id);
        if (index !== -1) {
            const [stu] = this.students.splice(index, 1);
            if (stu)
                listAllStudent.push(stu);
        }
    }
}
const stu1 = new student(1, "ha");
const stu2 = new student(2, "Va");
const stu3 = new student(3, "Da");
const stu4 = new student(4, "Ha");
const stu5 = new student(5, "Ta");
const stu6 = new student(6, "Ma");
let Students = [stu1, stu2, stu3, stu4, stu5, stu6];
console.log("allStudents s");
console.log(Students.map(s => `${s.getId()}-${s.getName()}`).join(", "));
const classA = new ClassRoom();
const classB = new ClassRoom();
classA.addStudent(2, Students);
classA.addStudent(5, Students);
classA.addStudent(3, Students);
classB.addStudent(1, Students);
classB.addStudent(4, Students);
console.log("\n=== Lớp A ===");
classA.showAllStudent();
console.log("\n=== Lớp B ===");
classB.showAllStudent();
console.log("allStudents s");
console.log(Students.map(s => `${s.getId()}-${s.getName()}`).join(", "));
console.log("\n=== Lớp A removed ===");
classA.removeStu(5, Students);
classA.showAllStudent();
console.log("allStudents s");
console.log(Students.map(s => `${s.getId()}-${s.getName()}`).join(", "));
export {};
