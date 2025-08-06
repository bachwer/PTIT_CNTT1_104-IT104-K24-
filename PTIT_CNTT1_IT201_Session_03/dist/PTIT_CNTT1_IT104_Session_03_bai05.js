let firstName = "john";
let lastName = "doe";
function capitalize(word) {
    const firsChar = word.charAt(0);
    const rest = word.slice(1);
    return firsChar === firsChar.toUpperCase() ? word : firsChar.toUpperCase() + rest;
}
console.log(capitalize(firstName) + " " + capitalize(lastName));
export {};
