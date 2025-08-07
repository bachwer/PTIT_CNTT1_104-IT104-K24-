interface person {
    name: string,
    age: number
}

interface employee {
    Employee: string,
    department: string
}

type StaffMember = person & employee;

let infor:StaffMember = {
    name: "Nguyễn Văn A",
    age: 28,
    Employee: "EMP001",
    department: "Kế toán"
}

console.log(infor);