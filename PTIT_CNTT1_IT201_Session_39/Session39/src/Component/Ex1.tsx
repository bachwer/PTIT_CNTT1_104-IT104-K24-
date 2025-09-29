import React, {useState} from "react";
import axios from "axios";

export default function() {
    const [file, setFile] = useState<null>(null);
    const [img, setImg] = useState("");



    const handelInput = (even: React.ChangeEvent<HTMLInputElement>) => {

        setFile(even.target.files[0]);
    }

    const handelUpload = async () => {
        if(!file){
            alert("invalid")
            return;
        }


        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "unsigned_avatar")
        formData.append("cloud_Name", "dvbxj8sdd")



        try{
            const response = await  axios.post("https://api.cloudinary.com/v1_1/dvbxj8sdd/image/upload", formData);

            console.log(response)
            if(response.status == 200){
                setImg(response.data.secure_url);
            }
        } catch (error) {
            console.log("error" + error)
        }

    }
    return(
        <div>
            <input type={"file"} onChange={handelInput}/>
            <button onClick={handelUpload}>UpLoad</button>
            <img src={img} alt={"asd"}/>
        </div>
    )
}