// Tạo ra interface Geometry với 2 phương thức:
//     calculateArea: tính diện tích.
//     calculatePerimeter: tính chu vi.
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return (this.radius * this.radius * 3.14).toFixed(2);
    }
    calculatePerimeter() {
        return (2 * (3.14 * this.radius)).toFixed(2);
    }
}
class rectangle {
    width;
    heigh;
    constructor(width, height) {
        this.width = width;
        this.heigh = height;
    }
    calculateArea() {
        return this.width * this.heigh;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.heigh);
    }
}
const c = new Circle(5);
console.log(`Circle Area: ${c.calculateArea()}`);
console.log(`Circle Perimeter: ${c.calculatePerimeter()}`);
const r = new rectangle(3, 5);
console.log(`Rec Area: ${r.calculateArea()}`);
console.log(`Rec Perimeter: ${r.calculatePerimeter()}`);
export {};
