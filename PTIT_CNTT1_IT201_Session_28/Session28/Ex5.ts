type callBack = (res: boolean) => void;


function checkCondition(callBack: callBack, condition: boolean){

   setTimeout(() => {
       callBack(condition)
   }, 1000);
}


const display = (res: boolean) => {
    console.log(`Điều Kiện trả về: ${res}`);
}


checkCondition(display, false);
checkCondition(display, true);
