// Practice using classes in TypeScript to build an object with attributes and methods
// 2. Description
// Definition of Student class with properties:
// ID: Number
// Age: Number
// Email: String
class student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
// The array declaration to accommodate students created from the defined class.
let student1 = new student(1, 18, "ngasd@gmail.com");
let student2 = new student(2, 18, "ngas12d@gmail.com");
let student3 = new student(3, 18, "nga32sd@gmail.com");
let students = [student1, student2, student3];
console.log(students);
export {};
// Create student entity and save in the array, proceed to approve the array and print out the students in the array.
