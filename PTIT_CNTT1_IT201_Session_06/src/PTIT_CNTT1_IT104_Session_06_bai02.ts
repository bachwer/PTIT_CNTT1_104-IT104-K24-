// Định nghĩa lớp abstract Job có
// Thuộc tính type
//     Phương thức printType để in ra loại công việc
// Phương thức abstract calculateSalary để tính lương khi làm công việc đó.
abstract class job {
     type: string;
     protected constructor(type:string){
        this.type = type;
    }
    public printType():void{
         console.log(`Type: ${this.type}`);
    }

    public abstract calculateSalary(Hour:number):number;
}




//     Định nghĩa lớp PartimeJob và lớp FulltimeJob kế thừa lớp Job.
//     Lớp PartimeJob có thêm thuộc tính workingHour.
//     Phương thức calculateSalary để tính lương công việc.
class PartTime extends job{
    workingHour: number;
    constructor(type:string, workingHour:number){
        super(type)
        this.workingHour = workingHour;
    }
     public calculateSalary(Hour:number):number{
        return (Hour * 30);
    }

}

class fullTIme extends job{
    constructor(type:string, ){
        super(type)
    }
    public calculateSalary():number{
        return 10000
    }

}

const order = new PartTime("Order", 150);
const manager = new fullTIme("Manager",);


console.log(`Oder (partTime): ${order.calculateSalary(150)}`)
console.log(`Manager (fullTime): ${manager.calculateSalary()}`)

