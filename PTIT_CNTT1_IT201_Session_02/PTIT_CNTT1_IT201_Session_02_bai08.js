// id: mã sinh viên (string)
// name: tên sinh viên (string)
// age: tuổi (number)
// scores: mảng điểm 3 môn sinh (number[])
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(promptText) {
    return new Promise((resolve) => {
        rl.question(promptText, (answer) => {
            resolve(answer);
        });
    });
}
let user= [
    {
        name: "john",
        age: 25,
        location: {
            city: "Ha noi",
            country: "Viet Nam"
        },
        contact: {
            email: "john@gmail.com",
            phone:"09012323131"
        },
        job:{
            title: "developer",
            company: "FPT"

        }
    }
];


let displayUserInfo = (user) => {
    console.log(`${user.name} ${user.age} ${user.location.city} ${user.location.country} ${user.contact.email} ${user.contact.phone} ${user.job.title} ${user.job.company}`)

}

displayUserInfo(user[0]);