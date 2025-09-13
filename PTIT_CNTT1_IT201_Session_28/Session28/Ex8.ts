type callBack = (res:number) => void;
let arr:number[] = [];

function myFilter (arr: number[], target:number,callBack:callBack ){
    arr.forEach((e,i) => {
        if(e === target){
            callBack(e)
        }
    })

}

const display:callBack = (res:number) => {
    arr.push(res)
}

myFilter([1,4,5,2,4,1], 1, display);
console.log(arr);

