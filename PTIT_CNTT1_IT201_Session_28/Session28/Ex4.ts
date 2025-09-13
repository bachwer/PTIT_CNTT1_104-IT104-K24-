type callBack = (res:number) => void;



function displayNumbers(callBack:callBack, delayNumber:number){
    for( let i = 0; i <= delayNumber; i++ ){
        setTimeout(() => {
            callBack(i)
        }, 1000 * (i + 1));
    }
}


const printNumber = (res:number) =>{
    console.log(`Số thứ tự ${res}`)
}



displayNumbers(printNumber, 10);

