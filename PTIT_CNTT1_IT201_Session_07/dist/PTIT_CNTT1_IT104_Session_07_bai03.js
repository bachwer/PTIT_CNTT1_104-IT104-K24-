"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Định nghĩa abstract class Animal có thuộc tính name và phương thức abstract makeNoise và phương thức printName.
// phương thức printName chỉ in ra màn hình tên của đối tượng.
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}
//     Định nghĩa 2 lớp Cat và Dog kế thừa lớp Animal. Phương thức makeNoise của lớp Cat sẽ in ra màn hình ”meo meo”, của lớp Dog sẽ in ra màn hình “gâu gâu”.
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("Gau Gau");
    }
}
// Tạo ra 2 đối tượng từ 2 lớp đã định nghĩa, gọi phương thức printName và makeNoise với mỗi đối tượng.
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("mew00");
    }
}
const dog = new Dog("Dogg");
dog.makeNoise();
dog.printName();
const cat = new Cat("Cat");
cat.makeNoise();
cat.printName();
//# sourceMappingURL=PTIT_CNTT1_IT104_Session_07_bai03.js.map