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

const sum = (arr) => {
    let total = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            total += num;
        }
    }

    return total;
};


async function main() {
    let  n = parseInt(await input("n: "));
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr.push (parseInt(await input("arr: ")));
    }
    console.log(sum(arr));
}


main();