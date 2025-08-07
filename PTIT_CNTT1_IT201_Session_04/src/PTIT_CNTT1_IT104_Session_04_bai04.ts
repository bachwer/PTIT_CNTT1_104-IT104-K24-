

const checkType = (type : number | string) =>{
    if(typeof type === "number"){
        if(type % 2 === 0) return true
    }else{
        return type.length
    }
}


console.log(checkType("sadasdasd"));
console.log(checkType(12));
