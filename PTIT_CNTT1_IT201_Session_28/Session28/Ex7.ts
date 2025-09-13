type callBack =  <t>(i: number, e: t, arr: t[]) => void;


function myForEach<t>(arr:t[], callBack:callBack){

    arr.forEach((e,i) => {

        setTimeout(() =>{
            callBack(i, e, arr);
        }, 300 * (i + 1))
    })
}

const callBack: callBack  = <t>(i: number, e: t, arr: t[]) => {
    console.log(`Vị trí: ${i} | Phần tử: ${e} | Mảng: ${arr} `);
}



myForEach([2,3,6,8,2], callBack);