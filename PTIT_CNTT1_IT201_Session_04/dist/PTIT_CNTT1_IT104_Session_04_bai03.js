let infor = {
    nameStudents: "Nguyen Van A",
    age: 18,
    email: "anguyenvan@gmail.com"
};
const sayHello = (infor) => {
    console.log(`tên tôi là ${infor.nameStudents}, tôi ${infor.age} tuổi và email của tôi là ${infor.email}.`);
};
sayHello(infor);
export {};
