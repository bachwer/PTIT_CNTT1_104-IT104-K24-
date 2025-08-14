function findFirstEven(arr, predicate) {
    return arr.find(n => n % 2 === 0 && predicate(n));
}
console.log(findFirstEven([3, 5, 8, 10], n => n > 6));
console.log(findFirstEven([3, 5, 7], n => n > 6));
export {};
