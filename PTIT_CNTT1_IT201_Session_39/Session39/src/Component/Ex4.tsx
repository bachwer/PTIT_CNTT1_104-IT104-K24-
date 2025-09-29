import React, { useState } from "react";
import axios from "axios";
import Resizer from "react-image-file-resizer";

interface ImageData {
    url: string;
    public_id: string;
}

export default function UploadCompressCloudinary() {
    const [file, setFile] = useState<File | null>(null);
    const [images, setImages] = useState<ImageData[]>([]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    // 👉 Compress ảnh bằng react-image-file-resizer
    const resizeFile = (file: File) =>
        new Promise<File | Blob>((resolve) => {
            Resizer.imageFileResizer(
                file,
                800,               // max width
                800,               // max height
                "JPEG",            // format
                70,                // quality (0-100) → giảm dung lượng
                0,                 // rotation
                (uri) => {
                    resolve(uri as File | Blob);
                },
                "blob"             // output type
            );
        });

    const handleUpload = async () => {
        if (!file) return alert("No file selected!");

        try {
            // nén ảnh trước khi upload
            const compressed = await resizeFile(file);

            const formData = new FormData();
            formData.append("file", compressed);
            formData.append("upload_preset", "unsigned_avatar"); // preset unsigned Cloudinary

            // gọi Cloudinary API
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

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleInput} />
            <button onClick={handleUpload}>Upload (Compressed)</button>

            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                {images.map((img) => (
                    <div key={img.public_id}>
                        <img src={img.url} alt="uploaded" width="200" />
                    </div>
                ))}
            </div>
        </div>
    );
}