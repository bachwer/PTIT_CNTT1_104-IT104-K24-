// Luyện tập sử dụng generic để làm phẳng một mảng có cấu trúc lồng nhau.
//     Làm quen với kỹ thuật đệ quy và generic trong TypeScript để xử lý mảng lồng nhau bất kỳ cấp độ nào.
// 2. Mô tả
// Viết một hàm generic flatten<T>(arr: T[]): T[] để làm phẳng một mảng có cấu trúc lồng nhau thành một mảng một chiều.
//     Hàm này sẽ sử dụng đệ quy để xử lý mảng lồng nhau ở nhiều cấp độ.
//     Kiểm tra nếu phần tử là mảng, ta gọi đệ quy để làm phẳng nó. Nếu phần tử không phải là mảng, ta chỉ cần thêm nó vào mảng kết quả.
function flatten(arr) {
    const out = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            out.push(...flatten(item));
        }
        else {
            out.push(item);
        }
    }
    return out;
}
console.log(flatten([[1, 2], [3, [4, 5]], 6]));
console.log(flatten([['apple', ['banana']], ['cherry'], 'date']));
export {};
