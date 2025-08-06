const factorial = (n: number): number => {
    if (n < 0) return -1; // hoặc NaN tùy bạn xử lý
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};





function calculateMath(calculator: string){
    let num1 = parseFloat((document.getElementById("number1") as HTMLInputElement).value);
    let num2 = parseFloat((document.getElementById("number2") as HTMLInputElement).value);
    let result = document.getElementById("result") as HTMLElement;

    if(calculator === 'add'){
        result.innerText = (num1 + num2).toString();
    } else if(calculator === 'subtract'){
        result.innerText = (num1 - num2).toString();
    } else if(calculator === 'multiply'){
        result.innerText = (num1 * num2).toString();
    } else if(calculator === 'divide'){
        result.innerText = (num2 === 0 ? "Lỗi: chia cho 0" : (num1 / num2).toString());
    } else if(calculator === "power"){
        result.innerText = (num1 ** num2).toString();
    } else if(calculator === 'root'){
        result.innerText = Math.pow(num1, 1 / num2).toString();
    } else if(calculator === "factorial1"){
        result.innerText = factorial(num1).toString();
    } else if(calculator === "factorial2"){
        result.innerText = factorial(num2).toString();
    } else {
        result.innerText = "Phép toán không hợp lệ";
    }
}

(window as any).calculateMath = calculateMath;
