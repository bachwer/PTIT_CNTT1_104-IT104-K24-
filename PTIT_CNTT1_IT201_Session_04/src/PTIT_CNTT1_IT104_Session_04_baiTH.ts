// import * as readline from 'readline';
//
// export function input(question: string): Promise<string> {
//     let process;
//
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
//     return new Promise((resolve) => {
//         rl.question(question, (answer) => {
//             rl.close();
//             resolve(answer);
//         });
//     });
// }
//
//
// interface subject{
//     subjectName: string,
//     score: number | string,
// }
//
//
// interface student{
//     name: string,
//     age: number,
//     subject: subject[],
// }
//
// let student: student;

// Thêm sinh viên: Thêm một sinh viên mới vào danh sách sinh viên.
// Cập nhật sinh viên: Cập nhật thông tin sinh viên (có thể cập nhật tên, tuổi hoặc môn học).
// Xóa sinh viên: Xóa sinh viên khỏi danh sách theo tên.
// input("hello")
//
// Tính toán và xếp loại:
//     Tính điểm trung bình của một sinh viên dựa trên điểm của các môn học:
//     Nếu điểm là số (number), tính bình thường.
//     Nếu điểm là chuỗi (string), chuyển chuỗi thành điểm số tương ứng (ví dụ: "A" = 10, "B" = 8, "C" = 6).
// Xếp loại sinh viên dựa trên điểm trung bình:
//     "Giỏi" nếu điểm trung bình >= 8.5.
// "Khá" nếu điểm trung bình từ 6.5 đến 8.5.
// "Trung bình" nếu điểm trung bình từ 5 đến 6.5.
// "Yếu" nếu điểm trung bình < 5.