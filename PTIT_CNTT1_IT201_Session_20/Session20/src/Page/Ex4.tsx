import {useState, useEffect} from "react"

export default function PageTitle(){
    const [name, setName] = useState("");


    useEffect(() => {
        if(name){
            document.title = `Xin chao, ${name}`
        }else{
            document.title = `Chao mung den voi trang cua toi`;
        }
    }, [name])

    return (
        <div style={{ padding: "20px" }}>
            <h2>Nhập tên của bạn:</h2>
            <input
                type="text"
                placeholder="Nhập tên..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: "8px", fontSize: "16px" }}
            />
        </div>
    )
}