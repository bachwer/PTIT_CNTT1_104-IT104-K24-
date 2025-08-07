const checkPrime = (num) => {
    if (num < 2)
        return false;
    if (num === 2)
        return true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
};
function processInput(input) {
    if (typeof input === "string") {
        if (/^\d+$/.test(input)) {
            const num = parseInt(input);
            console.log(num * num);
        }
        else {
            let count = 0;
            for (const letter of input) {
                if (!/\d/.test(letter) && !/[^a-zA-Z0-9]/.test(letter)) {
                    count++;
                }
            }
            console.log(count);
        }
    }
    else if (typeof input === "number") {
        if (checkPrime(input)) {
            console.log(`${input} la so nguyen to`);
        }
        else {
            console.log(`${input} ko phai so nguyen to`);
        }
    }
    else {
        if (input) {
            console.log("tiến hành xử lý");
        }
        else {
            console.log("Dung xử lý");
        }
    }
}
processInput("1a2asd3");
processInput("1234");
processInput(2);
processInput(5);
export {};
