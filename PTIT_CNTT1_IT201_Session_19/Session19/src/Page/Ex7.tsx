import {useRef} from "react"

export default function Ex7(){

    const sectionRef = useRef<HTMLDivElement | null>(null);
    const handleScroll = () => {
        sectionRef.current?.scrollIntoView({behavior: "smooth"});
    }


    return(
        <div>
            {/* Nút ở đầu trang */}
            <div
                style={{
                    position: "sticky",
                    top: 0,
                    background: "#fff",
                    padding: "10px",
                    borderBottom: "1px solid #ccc",
                }}
            >
                <button
                    onClick={handleScroll}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Đi tới phần nội dung
                </button>
            </div>

            {/* Nội dung dài giả lập */}
            <div style={{ height: "1200px", padding: "20px", background: "#f9f9f9" }}>
                <h2>Đoạn văn dài ở trên</h2>
                <p>
                    Đây là nội dung giả lập để có thể cuộn trang. Bạn có thể thêm nhiều
                    đoạn văn, hình ảnh, hay box khác để làm trang dài hơn.
                </p>
            </div>

            {/* Section mục tiêu */}
            <div
                ref={sectionRef}
                style={{
                    height: "300px",
                    backgroundColor: "#e0ffe0",
                    padding: "20px",
                    textAlign: "center",
                    border: "2px dashed green",
                }}
            >
                <h2> Đây là phần mục tiêu!</h2>
                <p>Bấm nút ở trên sẽ cuộn mượt xuống đây.</p>
            </div>
        </div>
    )

}