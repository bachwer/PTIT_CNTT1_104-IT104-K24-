function sum(a, b) {
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    if (isNaN(num1) || isNaN(num2)) {
        return -1;
    }
    return num1 + num2;
}
console.log(sum(1, 3));
console.log(sum("2", "2"));
console.log(sum("2", "asd"));
export {};
