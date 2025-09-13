type callBack = (result: number) => void;


function calculate(a: number,  b: number,  callBack:callBack){

    const sum = a + b;

    callBack(sum);
}


const printfResult: callBack = (res) => {
    console.log(res);
}


calculate(3,4,printfResult)

