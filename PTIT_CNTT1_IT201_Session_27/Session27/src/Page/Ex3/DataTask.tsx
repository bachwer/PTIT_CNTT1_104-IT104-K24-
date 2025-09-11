export interface IDataTask {
    id: number;
    title: string;
    description: string;
}

export const tasks: IDataTask[] = [
    {
        id: 1,
        title: "Học React Router",
        description: "Làm quen với Dynamic Routes và useNavigate",
    },
    {
        id: 2,
        title: "Ôn lại Tailwind",
        description: "Thực hành tạo UI cơ bản bằng Tailwind CSS",
    },
    {
        id: 3,
        title: "Hoàn thành BTVN",
        description: "Đẩy code lên GitHub và nộp link",
    },
    {
        id: 4,
        title: "Làm quen với TypeScript",
        description: "Học cách định nghĩa interface và type",
    },
    {
        id: 5,
        title: "Thực hành Props & State",
        description: "Xây dựng component có props và quản lý state",
    },
    {
        id: 6,
        title: "Luyện tập useEffect",
        description: "Hiểu và áp dụng useEffect trong React",
    },
    {
        id: 7,
        title: "Tạo dự án với Vite",
        description: "Khởi tạo project React với Vite và cấu hình cơ bản",
    },
    {
        id: 8,
        title: "Kết nối API",
        description: "Gọi dữ liệu từ API và hiển thị ra giao diện",
    },
    {
        id: 9,
        title: "Quản lý Router nâng cao",
        description: "Sử dụng Outlet, PrivateRoute, Navigate",
    },
    {
        id: 10,
        title: "Triển khai dự án",
        description: "Deploy ứng dụng React lên Vercel",
    },
];