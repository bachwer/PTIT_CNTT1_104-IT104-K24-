class Rectangle {
    private width: number;
    private height: number;
    constructor(width:number, height:number){
        this.width = width;
        this.height = height;
    }
    public getWidth():number{
        return this.width;
    }

    public setWidth(width:number): void{
        this.width = width
    }

    public getHeight():number{
        return this.height;
    }
    public setHigh(height:number):void{
        this.height = height
    }


    public getArea(): number{
        return this.width *this.height;
    }

    public getPerimeter():number{
        return 2 * (this.width + this.height);
    }
}

const rec = new Rectangle(10, 5);
console.log(`Width: ${rec.getWidth()}`)
console.log(`Height: ${rec.getHeight()}`)
console.log(`Area: ${rec.getArea()}`)
console.log(`Perimeter: ${rec.getPerimeter()}`)

console.log("--------------------")
rec.setHigh(7);
rec.setWidth(4);

console.log(`Width: ${rec.getWidth()}`)
console.log(`Height: ${rec.getHeight()}`)
console.log(`Area: ${rec.getArea()}`)
console.log(`Perimeter: ${rec.getPerimeter()}`)