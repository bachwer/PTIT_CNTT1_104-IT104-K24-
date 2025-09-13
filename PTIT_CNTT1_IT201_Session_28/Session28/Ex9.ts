type MyCallback<T, U> = (element: T, index: number, array: T[]) => U;


function myMap<T, U>(arr: T[], callback: MyCallback<T, U>): U[] {
    const result: U[] = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i], i , arr));
    }

    return result;
}

const doubleCallback: MyCallback<number, number> = (element) => {
    return element * 2;
};

const numbers: number[] = [1, 2, 3, 4, 5, 6];
const doubled = myMap(numbers, doubleCallback);

console.log(doubled);