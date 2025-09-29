import React, { useState } from "react";
import axios from "axios";

interface ImageData {
    url: string;        // ảnh gốc
    thumbnail: string;  // ảnh thumbnail
    public_id: string;
}

export default function UploadThumbnailCloudinary() {
    const [file, setFile] = useState<File | null>(null);
    const [images, setImages] = useState<ImageData[]>([]);
    const [selected, setSelected] = useState<string | null>(null); // ảnh gốc được click

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) return alert("No file selected!");

        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "unsigned_avatar"); // preset unsigned

            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/dvbxj8sdd/image/upload",
                formData
            );

            const originalUrl = res.data.secure_url;

            // 🔹 Tạo thumbnail bằng Cloudinary transformation
            // Chèn /upload/w_200,h_200,c_fill/ vào giữa URL
            const thumbUrl = originalUrl.replace(
                "/upload/",
                "/upload/w_200,h_200,c_fill/"
            );

            const newImg = {
                url: originalUrl,
                thumbnail: thumbUrl,
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
            <input type="file" onChange={handleInput} />
            <button onClick={handleUpload}>Upload with Thumbnail</button>

            <div style={{ display: "flex", gap: "10px", marginTop: "20px", flexWrap: "wrap" }}>
                {images.map((img) => (
                    <div key={img.public_id}>
                        <img
                            src={img.thumbnail}
                            alt="thumbnail"
                            style={{ width: "200px", cursor: "pointer" }}
                            onClick={() => setSelected(img.url)}
                        />
                    </div>
                ))}
            </div>

            {selected && (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "10px",
                        border: "1px solid #ccc",
                    }}
                >
                    <h3>Ảnh gốc:</h3>
                    <img src={selected} alt="full" style={{ maxWidth: "100%" }} />
                    <button onClick={() => setSelected(null)}>Đóng</button>
                </div>
            )}
        </div>
    );
}