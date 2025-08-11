abstract class Shape {
    protected name: string;

    protected constructor (name:string) {
        this.name = name;
    }

    public getName():string{
            return this.name;
    }

    public abstract getSize(): void

}
class Rectangle extends Shape {
    private readonly width: number;
    private readonly height: number;

    constructor(name:string, width:number , height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    public getSize():void {
        console.log(`Width: ${this.width}, Height: ${this.height}`)
    }
}

const rect = new Rectangle("REC", 10, 21);
console.log("name", rect.getName())
rect.getSize();