var SystemMode;
(function (SystemMode) {
    SystemMode["MANUAL"] = "MANUAL";
    SystemMode["AUTO"] = "AUTO";
    SystemMode["ERROR"] = "ERROR";
})(SystemMode || (SystemMode = {}));
const move = (directionL) => {
    console.log(`Moving ${directionL}`);
};
const setSystemMode = (mode) => {
    console.log(`System set to ${mode} mode`);
};
const handleInput = (input) => {
    console.log(`input (any): ${input}`);
    if (typeof input === "string") {
        console.log(`input length: ${input.length}`);
    }
    else if (typeof input === "number") {
        if (!isNaN(input)) {
            console.log(` Valid number input: ${input}`);
        }
        else {
            console.log(` Invalid input type`);
        }
    }
    else {
        console.log("invalid !!");
    }
};
const cash = (Mes) => {
    console.log(`system cash ${Mes}`);
};
let speed = 10;
let message = "Hello robot!";
let direction = "left";
move("forward");
move(direction);
handleInput(message);
handleInput("123456789012");
handleInput(12345);
handleInput({ x: 1 });
handleInput(78);
cash("Overheat detected!");
export {};
