import React, {useState} from "react"



export default function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const  validate = () => {
        const newErrors: {name?: string, email?:string} = {}

        if(!name.trim()){
            newErrors.name = "Trường này là bắt buộc";
        }
        if(!email.trim()){
            newErrors.email = "Trường này là bắt buộc";
        }else if(!emailRegex.test(email)){
            newErrors.email = "invalid Email"
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSumit = (e: React.FormEvent) => {
        e.preventDefault();
        if( validate()) {
            alert("Success!")
        }
    }

    return(
        <form onSubmit={handleSumit} style ={{width: "300px", margin: "20px auto"}}>
            <div style={{marginBottom: "15px"}}>
                <label>
                    Ho Ten:
                    <input type={"text"} value={name}  onChange={(e) => setName(e.target.value)}
                           onBlur={validate}
                           style={{ display: "block", width: "100%", padding: "5px" }}
                    />
                    {errors.name && <span style={{ color: "red", fontSize: "12px" }}>{errors.name}</span>}
                </label>
            </div>

            <div style={{ marginBottom: "15px" }}>
                <label>Email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={validate}
                    style={{ display: "block", width: "100%", padding: "5px" }}
                />
                {errors.email && <span style={{ color: "red", fontSize: "12px" }}>{errors.email}</span>}
            </div>

            <button type="submit" disabled={!!errors.name || !!errors.email}>
                Gửi
            </button>


        </form>
    )





}