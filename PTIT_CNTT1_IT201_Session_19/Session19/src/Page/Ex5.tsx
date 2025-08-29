import {useState} from 'react'


export default function RandomeQuote() {

    const quotes = [
        "Học, học nữa, học mãi.",
        "Thất bại là mẹ thành công.",
        "Không gì là không thể.",
        "Kiến tha lâu đầy tổ.",
        "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
    ]
    const [quote, setQuote] = useState(quotes[0]);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }


    return(
        <div
            style={{
                margin: "50px auto",
                padding: "20px",
                maxWidth: "400px",
                textAlign: "center",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
            }}
        >
            <h2>Random Quote</h2>
            <p style={{ fontStyle: "italic", minHeight: "40px" }}>{quote}</p>
            <button
                onClick={getRandomQuote}
                style={{
                    padding: "10px 20px",
                    marginTop: "10px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#007bff",
                    color: "white",
                    cursor: "pointer",
                }}
            >
                Lấy câu nói mới
            </button>
        </div>
    )
}