// Định nghĩa abstract class Person có thuộc tính name và phương thức displayInfo để in thông tin.
class Person {
	name:string;

	constructor(name:string){
		this.name = name;
	}

	public displayInfo(){
		console.log(this.name);

	}
}


// Định nghĩa lớp Student kế thừa lớp Person và có thêm thuộc tính id. 
// Khởi tạo đối tượng từ lớp Student và dùng phương thức displayInfo để in id và tên sinh viên.
class Student extends Person{
	id: string;
	constructor(name:string, id:string){
		super(name);
		this.id = id;
	}

	public override displayInfo(){
		console.log(this.id);
		console.log(this.name);
	}

}
const stu1 = new Student("Bach", "123");
stu1.displayInfo()






// Định nghĩa lớp Teacher kế thừa lớp Person và có thêm thuộc tính subject. 
// Khởi tạo đối tượng từ lớp Teacher và dùng phương thức displayInfo để in tên giáo viên và môn học.

class Teacher extends Person{
	subject:string;
	constructor(name:string, subject:string){
		super(name);
		this.subject = subject;
	}
	public override displayInfo(){
		console.log(this.subject);
		console.log(this.name);
	}
}
console.log()

const Teacher1 = new Teacher("sd", "MAth");
Teacher1.displayInfo()
