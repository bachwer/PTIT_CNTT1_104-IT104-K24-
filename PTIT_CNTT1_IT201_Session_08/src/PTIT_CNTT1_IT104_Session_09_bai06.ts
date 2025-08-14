// Viết hàm findElement nhận vào:
//     Một mảng arr chứa các phần tử kiểu T.
//     Một giá trị value kiểu T cần tìm trong mảng.
//     Hàm sẽ tìm kiếm giá trị value trong mảng arr và trả về phần tử đầu tiên tìm thấy trong mảng, hoặc undefined nếu không tìm thấy.

function findElement<T>( arr: T[], value: T): T  | undefined {
    return arr.find(item => item === value);
}


console.log(findElement<number>([1,2,5,2,9], 4));
console.log(findElement<number>([1,2,5,2,9], 5));