let  string1: string = " Hãy tìm ra từ dài nhất trong câu mà không có các ký tự trùng nhau."

let arr = string1.trim().split(" ");
console.log(arr)

function check(word: string):boolean{
    let charSet = new Set();
    for(let char of word){
        if(charSet.has(char)){
            return true;
        }
        charSet.add(char);
    }
    return false;
}

let longWord = "";
for(let word of arr){
    if (!check(word) && word.length > longWord.length) {
        longWord = word;
    }
}
console.log(longWord);