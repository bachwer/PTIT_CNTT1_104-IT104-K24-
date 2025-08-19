import React from "react";
import "../index.css";


interface Course {
    id: number;
    title: string;
    description: string;
    image: string;
}

// (Mock) dữ liệu có thể lấy từ API / mock data
const courses: Course[] = [
    {
        id: 1,
        title: "HTML",
        description: "Học các khái niệm HTML",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Html-1.svg/640px-Html-1.svg.png"
    },
    {
        id: 2,
        title: "CSS",
        description: "Làm quen với Css và cách sử dụng trong dự án HTML.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/640px-CSS.3.svg.png"
    },
    {
        id: 3,
        title: "JavaScript",
        description: "Khóa học full-stack web dev từ HTML, CSS, JS đến backend.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/JavaScript_shield_logo_%28no_text%29.svg/640px-JavaScript_shield_logo_%28no_text%29.svg.png"
    },
    {
        id: 4,
        title: "React",
        description: "Khóa học React web dev từ HTML, CSS, JS đến backend.",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
    }
];

// Props optional nếu muốn xử lý click “Xem chi tiết” / optional props for click handling
interface ListCourseProps {
    onSelectCourse?: (id: number) => void;
}

const EX1_ListCourse: React.FC<ListCourseProps> = ({ onSelectCourse }) => {
    return (
        <section className="course-section">
            <h2>Danh sách khóa học</h2>
            <div className="courses">
                {courses.map((course) => (
                    <article className="course-card" key={course.id}>
                        <img src={course.image} alt={course.title} />
                        <div className="course-info">
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <button onClick={() => onSelectCourse?.(course.id)}>
                                Xem chi tiết
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            {/*
      */}
        </section>
    );
};

export default EX1_ListCourse;