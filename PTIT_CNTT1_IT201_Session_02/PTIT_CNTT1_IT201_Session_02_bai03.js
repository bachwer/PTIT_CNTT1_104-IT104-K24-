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

const typeConsole = (type = "log") => {
    console[type](`Đây là type: ${type}`);
};


let arr = [];

async function main(){
    typeConsole("warn")
}
main();