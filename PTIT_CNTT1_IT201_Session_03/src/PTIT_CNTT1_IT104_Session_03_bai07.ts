let string1: string= "hello"
let result : string = "" ;
for(let i = 0; i < string1.length; i++){
    let char = string1[i];
    if(!result.includes(char)){
        result += char;
    }
}

console.log(result);

