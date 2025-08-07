const calculatorComponentPoint = (point) => {
    const point1 = ((point.hackathon * 0.7) + (point.multipleChoice * 0.3)) * 0.3;
    return (point.finalTest * 0.7) + point1;
};
const informationCourse = [
    {
        schoolName: "PTIT",
        year: 2025,
        courses: [
            {
                courseId: "PTITSK24-FE2",
                title: "TpyeSrcipt Co ban",
                instructor: "GV: Nguyen Van A",
                students: [
                    {
                        id: "SK24-036",
                        name: "Bach",
                        email: "asd@gmail.com",
                        hasCompleted: true,
                        ComponentPoint: {
                            hackathon: 85,
                            multipleChoice: 74,
                            finalTest: 92,
                        },
                    }, {
                        id: "SK24-012",
                        name: "nguyen van van B",
                        email: "asddas@gmail.com",
                        hasCompleted: true,
                        ComponentPoint: {
                            hackathon: 56,
                            multipleChoice: 74,
                            finalTest: 87,
                        }
                    }
                ],
                isActive: true,
            },
            {
                courseId: "PTITSK24-FE1",
                title: "HTML & CSS",
                instructor: "GV: Nguyen Van A",
                students: [
                    {
                        id: "SK24-0123",
                        name: "Nguyen Van A",
                        email: "sabdhkasd@gmail.com",
                        hasCompleted: false,
                    },
                    {
                        id: "SK24-0122",
                        name: "Nguyen Van B",
                        email: "asd@gmail.com",
                        hasCompleted: false,
                    },
                    {
                        id: "SK24-0121",
                        name: "Nguyen Van C",
                        email: "cccccc@gmail.com",
                        hasCompleted: true,
                        ComponentPoint: {
                            hackathon: 64,
                            multipleChoice: 88,
                            finalTest: 82,
                        }
                    }
                ],
                isActive: true,
            },
            {
                courseId: "PTITSK24-BE1",
                title: "LAP TRINH BACKEND",
                instructor: "GV: Nguyen Van A",
                students: [],
                isActive: false,
            }
        ]
    },
];
// getCompletedStudents(course: Course): Student[]
// Trả về danh sách học viên đã hoàn thành khóa học (hasCompleted: true).
function studentHasCompleted(CourseManager) {
    console.log(`-------- ALL STUDENTS HAS COMPLETED ---------`);
    let printedHeader = false;
    for (let course2 of CourseManager) {
        for (let course of course2.courses) {
            for (let students of course.students) {
                if (students.hasCompleted) {
                    if (!printedHeader) {
                        console.log(`ID         | Name                 | Email                    | Completed | FinalPoint`);
                        console.log(`-----------|----------------------|--------------------------|-----------|------------`);
                        printedHeader = true;
                    }
                    console.log(`${students.id.padEnd(10)} | ${students.name.padEnd(20)} | ${students.email.padEnd(25)}| ${String(students.hasCompleted).padEnd(10)}| ${students.ComponentPoint ? calculatorComponentPoint(students.ComponentPoint).toFixed(2).padEnd(10) : "NULL".padEnd(10)}`);
                }
            }
        }
    }
}
// calculateAverageScore(course: Course): number | null
// Tính điểm trung bình của các học viên có finalScore. Nếu không ai có, trả null.
function calculateAverageScore(CourseManager) {
    console.log(`-------- điểm trung bình của các học viên có finalScore ---------`);
    let printedHeader = false;
    for (let course2 of CourseManager) {
        for (let course of course2.courses) {
            for (let students of course.students) {
                if (students.ComponentPoint) {
                    if (!printedHeader) {
                        console.log(`ID         | Name                 | Email                    | Completed | FinalPoint`);
                        console.log(`-----------|----------------------|--------------------------|-----------|------------`);
                        printedHeader = true;
                    }
                    console.log(`${students.id.padEnd(10)} | ${students.name.padEnd(20)} | ${students.email.padEnd(25)}| ${String(students.hasCompleted).padEnd(10)}| ${students.ComponentPoint ? calculatorComponentPoint(students.ComponentPoint).toFixed(2).padEnd(10) : "NULL".padEnd(10)}`);
                }
            }
        }
    }
}
const calculatorPointOfCourse = (student) => {
    let total = 0;
    let numberStHasC = 0;
    for (let scoreStudent of student) {
        if (scoreStudent.ComponentPoint) {
            total += calculatorComponentPoint(scoreStudent.ComponentPoint);
            numberStHasC++;
        }
    }
    return (total / numberStHasC).toFixed(2);
};
function printCourseReport(manager) {
    let i = 1;
    for (let managerCourse of manager) {
        for (let Course of managerCourse.courses) {
            console.log(`${i}.Khoa ${Course.title} - (${Course.instructor})`);
            console.log(`- Tong Hoc Vien: ${Course.students.length}`);
            if (!isNaN(Number(calculatorPointOfCourse(Course.students)))) {
                console.log(`- TB diem: ${calculatorPointOfCourse(Course.students)}`);
            }
            else
                console.log(`- TB diem: N/A`);
            console.log(`- Trang thai Mo: ${Course.isActive ? "Dang mo" : "Da dong"}`);
            console.log("-------------------------------------");
            i++;
        }
    }
}
studentHasCompleted(informationCourse);
console.log("========================================================================================");
calculateAverageScore(informationCourse);
console.log("========================================================================================");
printCourseReport(informationCourse);
export {};
