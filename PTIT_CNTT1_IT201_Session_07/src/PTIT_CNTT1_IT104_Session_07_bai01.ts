// Định nghĩa lớp Employee có các thuộc tính:
//     name: tên nhân viên có phạm vi truy cập là public
// company: tên công ty có mức phạm vi truy cập là protected
// phone: số điện thoại có mức phạm vi truy cập cập là private

// printInfo(): phương thức để In ra tất cả thuộc tính

class Employee {
    public name: string;
    protected company: string;
    private phone: string;
    constructor(name:string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(){
        console.log(`Name: ${this.name} Company: ${this.company} Phone: ${this.phone}`);
    }

}

// Định nghĩa lớp con Manager kế thừa từ lớp Employee đã được xây dựng, ngoài các thuộc tính ban đầu của lớp cha thì có thêm thuộc tính teamSize.


class Manager extends Employee{
    teamSize: number;

    constructor(name:string, company: string, phone: string,size: number) {
        super(name, company, phone);
        this.teamSize = size

    }

    public override printInfo(){
        console.log(`Team Size: ${this.teamSize}`);

    }
}

const m = new Manager("John", "Google", "123456789", 10);
m.printInfo();