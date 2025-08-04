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

const greetingWithWeather = (str1, str2) => {
    if(str2 === "sunny") console.log(`Chao ${str1} hom nay troi nag`);
    else if(str2 === "rainy") console.log(`Chao ${str1} hom nay troi mua`);
    else if(str2 === "cloudy") console.log(`Chao ${str1} hom nay troi gio`);
    else console.log(`Chao ${str1} hom nay troi ko biet`);
}


async function main() {

    console.log(greetingWithWeather ("Nguyễn An", "sunny"));
    console.log(greetingWithWeather ("Nguyễn An", "rainy"));
    console.log(greetingWithWeather ("Nguyễn An", "cloudy"));



}


main();