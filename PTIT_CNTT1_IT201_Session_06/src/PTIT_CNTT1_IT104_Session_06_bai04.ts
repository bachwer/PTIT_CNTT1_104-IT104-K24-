// Tạo ra interface Geometry với 2 phương thức:
//     calculateArea: tính diện tích.
//     calculatePerimeter: tính chu vi.

//     Định nghĩa lớp Circle với thuộc tính private radius.
//     Định nghĩa lớp Rectangle với 2 thuộc tính private width và private height.
//     Cả 2 lớp này đều cần implements interface Geometry và phải cài đặt các phương thức calculateArea và calculatePerimeter cho các lớp Circle và Rectangle
// Khởi tạo 2 đối tượng Circle và Rectangle và thực hiện in ra chu vi và diện tích ra màn hình


interface Geometry{
    calculateArea():any;
    calculatePerimeter():any;
}


class Circle implements Geometry{
    radius:number;
    constructor(radius:number) {
        this.radius = radius
    }

    public calculateArea(){
        return (this.radius * this.radius * 3.14).toFixed(2)
    }

    public calculatePerimeter(){
        return (2 * (3.14 * this.radius)).toFixed(2);
    }
}

class rectangle implements Geometry{
    width: number;
    heigh: number;
    constructor(width: number, height:number) {
        this.width = width;
        this.heigh = height;
    }

    public calculateArea(){
        return this.width * this.heigh;
    }

    public calculatePerimeter(){
        return 2 * (this.width + this.heigh);
    }
}


const c =  new Circle(5);
console.log(`Circle Area: ${c.calculateArea()}`)
console.log(`Circle Perimeter: ${c.calculatePerimeter()}`)




const r =  new rectangle(3, 5);
console.log(`Rec Area: ${r.calculateArea()}`)
console.log(`Rec Perimeter: ${r.calculatePerimeter()}`)





