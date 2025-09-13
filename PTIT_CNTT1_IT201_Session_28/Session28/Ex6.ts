type callback = () => void;


function task1 (next: callback){
    setTimeout(() => {
        console.log("Task 1 completed !");
        next()
    }, 1000);
}


function task2 (next: callback){
    setTimeout(() => {
        console.log("Task 2 completed !");
        next()
    }, 1500);
}

function task3 (next: callback){
    setTimeout(() => {
        console.log("Task 3 completed !");
        next()
    }, 2000);
}



task1(() => {
    task2(() => {
        task3(() => {
            console.log("Done !!");
        })
    })
});


