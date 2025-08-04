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


const checkElement = (string, endString) => {
    return string.endsWith(endString);
}



async function main(){
    let string = await input("str: ");
    let end = await input("strEnd: ");

    console.log(checkElement(string, end));





}
main();