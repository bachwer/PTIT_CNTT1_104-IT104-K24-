//definition class vehicle
class Vehicle {
    readonly id: number;
    public name: string;
    protected year: number;
    private readonly company: string;


    constructor(name: string, year:number, company: string, id: number){
        this.name = name;
        this.year = year;
        this.company= company;
        this.id = id;
    }
    public printInfor(): void{
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);


    }
}
const vehicle = new Vehicle("Mode s", 2024, "Tesla", 1);
vehicle.printInfor()

