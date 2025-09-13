type callBack = <t>(element: t) => void;


function processArray<t>(arr: t[]){
    arr.forEach((e,i) => {


        setTimeout(() => {
            printEinA(e)
        },1000 * (i + 1))

    })
}


const printEinA: callBack = (res) => {
    console.log(`Phần từ : ${res}`)
}


processArray([2,2,3,3,5]);
