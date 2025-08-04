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


const check = (str1) => {
    return str1.length !== 0;
}


async function main(){


    console.log( check(await input("str: ")))
}

main();


