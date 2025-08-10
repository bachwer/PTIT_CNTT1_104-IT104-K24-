class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHigh(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rec = new Rectangle(10, 5);
console.log(`Width: ${rec.getWidth()}`);
console.log(`Height: ${rec.getHeight()}`);
console.log(`Area: ${rec.getArea()}`);
console.log(`Perimeter: ${rec.getPerimeter()}`);
console.log("--------------------");
rec.setHigh(7);
rec.setWidth(4);
console.log(`Width: ${rec.getWidth()}`);
console.log(`Height: ${rec.getHeight()}`);
console.log(`Area: ${rec.getArea()}`);
console.log(`Perimeter: ${rec.getPerimeter()}`);
export {};
