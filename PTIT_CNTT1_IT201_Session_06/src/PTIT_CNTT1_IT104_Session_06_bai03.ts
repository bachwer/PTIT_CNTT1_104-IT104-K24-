abstract class Job{
    type:string;
    constructor(type:string){
        this.type = type;
    }


    //không có thân hàm.
    abstract calculatorSalary(): number;

    // thân hàm chứa logic thực thi.


    //lớp con có thể dùng lại hoặc ghi đè.
    printType(): void {
        console.log(`Job type: ${this.type}`);
    }
}

class fullTime extends Job{
    //buộc lớp con phải định nghĩa chi tiết.
    public calculatorSalary():number{
        return 1000000
    }
}

class partTime extends Job{
    workingHour:number;
    constructor(type: string, time: number){
        super(type)
        this.workingHour = time;
    }


    //buộc lớp con phải định nghĩa chi tiết.
    public calculatorSalary():number {
        return this.workingHour * 30000
    }
}

const fullTimeJob = new fullTime("Full-Time");
fullTimeJob.printType()
console.log(fullTimeJob.calculatorSalary());

const partTimeJob = new partTime("Part-Time", 150);
partTimeJob.printType()
console.log(partTimeJob.calculatorSalary());