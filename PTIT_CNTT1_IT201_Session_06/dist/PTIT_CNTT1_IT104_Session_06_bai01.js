class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
}
const rect = new Rectangle("REC", 10, 21);
console.log("name", rect.getName());
rect.getSize();
export {};
