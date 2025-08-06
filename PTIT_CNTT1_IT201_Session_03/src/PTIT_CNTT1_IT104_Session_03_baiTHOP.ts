enum SystemMode {
    MANUAL = "MANUAL",
    AUTO = "AUTO",
    ERROR = "ERROR"
}

type direction = "forward" | "backward" | "left" | "right";
const move = (directionL: direction):void =>{
    console.log(`Moving ${directionL}`);

}

const setSystemMode = (mode: SystemMode): void =>{
    console.log(`System set to ${mode} mode`);
}

const handleInput = (input: any): void =>{
    console.log(`input (any): ${input}`);
    if(typeof input === "string") {
        console.log(`input length: ${input.length}`);
    }else if (typeof input === "number"){
        if (!isNaN(input)) {
            console.log(` Valid number input: ${input}`);
        } else {
            console.log(` Invalid input type`);
        }
    }else{
        console.log("invalid !!")
    }
}

const cash = (Mes: string): void => {
    console.log(`system cash ${Mes}`);
}

let speed: number = 10;

let message = "Hello robot!";

let direction: direction = "left";


move("forward");
move(direction);

handleInput(message);
handleInput("123456789012");
handleInput(12345);
handleInput({ x: 1 });
handleInput(78);

cash("Overheat detected!");