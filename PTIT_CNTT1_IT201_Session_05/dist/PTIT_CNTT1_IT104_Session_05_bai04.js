//definition class vehicle
class Vehicle {
    id;
    name;
    year;
    company;
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfor() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
    }
}
const vehicle = new Vehicle("Mode s", 2024, "Tesla", 1);
vehicle.printInfor();
export {};
