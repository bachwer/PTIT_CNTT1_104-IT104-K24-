import React, { useState } from "react";
import axios from "axios";

interface ImageData {
    url: string;
    public_id: string;
}

export default function UploadCloudinary() {
    const [file, setFile] = useState<File | null>(null);
    const [images, setImages] = useState<ImageData[]>([]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) return alert("No file selected!");

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "unsigned_avatar"); // preset unsigned trong Cloudinary

        try {
            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/dvbxj8sdd/image/upload",
                formData
            );

            const newImg = {
                url: res.data.secure_url,
                public_id: res.data.public_id,
            };

            setImages((prev) => [...prev, newImg]);
            setFile(null);
        } catch (err) {
            console.error("Upload failed:", err);
        }
    };

    const handleDelete = async (public_id: string) => {
        try {
            await axios.post("http://localhost:4000/api/delete-image", { public_id });

            setImages((prev) => prev.filter((img) => img.public_id !== public_id));
            alert("Xóa thành công!");
        } catch (err) {
            console.error("Delete failed:", err);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleInput} />
            <button onClick={handleUpload}>Upload</button>

            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                {images.map((img) => (
                    <div key={img.public_id} style={{ position: "relative" }}>
                        <img src={img.url} alt="uploaded" width="150" />
                        <button
                            onClick={() => handleDelete(img.public_id)}
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                background: "red",
                                color: "white",
                            }}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}