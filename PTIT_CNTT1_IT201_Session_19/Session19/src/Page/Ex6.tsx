import {useEffect, useState} from 'react';


export default function key() {
    const [lastKey, setLastKey] = useState<string>("");


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setLastKey(e.key)
        };


    window.addEventListener("keydown", handleKeyDown);

    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    };
    }, []);

    return(
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                fontSize: "48px",
                fontWeight: "bold",
            }}
        >
            {lastKey ? `Bạn vừa nhấn: ${lastKey}` : "Hãy nhấn một phím bất kỳ..."}
        </div>
    )

}