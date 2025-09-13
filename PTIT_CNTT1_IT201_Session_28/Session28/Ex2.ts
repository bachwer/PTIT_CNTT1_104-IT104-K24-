type callBack = () => void;



function delayedCallBack(callback: callBack, delayNumber:number){
    setTimeout(() => {
        callback();
    }, delayNumber)
}


const sayHello: callBack = () => {
    console.log("hello after day!")
}



delayedCallBack(sayHello, 2000);