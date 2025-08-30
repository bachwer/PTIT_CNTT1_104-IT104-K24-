import React, {useState} from "react";


export default function Ex2(){
    const [form, setForm] = useState({
        name: "",
        email:"",
        submit: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value})
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(form.name === "" || form.email === "") return;

        setForm({
            ...form,
            submit: true,
        })
        console.log(form);
    }





    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="name" placeholder="Name" />
                <input onChange={handleChange} name="email" placeholder="Email" />
                <button type="submit">Submit</button>

                <div >
                    {form.submit && (
                        <div className="result">
                            <p>{form.name}</p>
                            <p>{form.email}</p>
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}