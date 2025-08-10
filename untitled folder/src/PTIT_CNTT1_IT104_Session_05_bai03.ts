// The definition of Employee class has the properties:
class Employee {
    public name: string;
    protected company: string;
    private readonly phone: string;
    constructor(name: string, company: string, phone: string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfor(): void{
        console.log(`Name: ${this.name}`)
        console.log(`Company: ${this.company}`)
        console.log(`Phone: ${this.phone}`)
    }

}


const emp = new Employee("Alice", "FPT", "09213231")

emp.printInfor()


console.log(emp.name);



