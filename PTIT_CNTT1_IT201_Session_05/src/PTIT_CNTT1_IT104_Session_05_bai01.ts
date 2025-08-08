

class vehicle {
    name: string;
    year: number;
    company: string;
    constructor(name:string, year:number, company:string){
        this.name = name;
        this.year = year;
        this.company = company
    }
    displayInfor(): void{
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
    }
}

const vehicle1 = new vehicle("Model s", 2022, "Tesla");
const vehicle2 = new vehicle("Taycan Turbo GT", 2024, "Porsche");


vehicle1.displayInfor()
console.log('----------------')
vehicle2.displayInfor()
