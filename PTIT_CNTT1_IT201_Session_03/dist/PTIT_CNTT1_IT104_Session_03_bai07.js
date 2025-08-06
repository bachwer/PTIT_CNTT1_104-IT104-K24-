let string1 = "hello";
let result = "";
for (let i = 0; i < string1.length; i++) {
    let char = string1[i];
    if (!result.includes(char)) {
        result += char;
    }
}
console.log(result);
export {};
