import {useState, useRef, useEffect} from "react"

export default function Modal(){
    const [isOpen, setOpen] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if(isOpen && inputRef.current){
            inputRef.current.focus();
        }
    }, [isOpen]);

    return(
        <div style={{ padding: 20 }}>
            {/* Nút mở modal */}
            <button onClick={() => setOpen(true)}>Open Modal</button>

            {/* Modal */}
            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.4)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            background: "#fff",
                            padding: "20px",
                            borderRadius: "8px",
                            minWidth: "300px",
                        }}
                    >
                        <h2>Modal</h2>
                        {/* Input nhận focus tự động */}
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Type something..."
                            style={{ padding: "8px", width: "100%" }}
                        />
                        <br />
                        <button
                            style={{ marginTop: "10px" }}
                            onClick={() => setOpen(false)}
                        >
                            Close Modal
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}