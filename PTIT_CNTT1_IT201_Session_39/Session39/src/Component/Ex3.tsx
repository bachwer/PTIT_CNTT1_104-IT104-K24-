import React, { useRef, useState } from "react";
import axios from "axios";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

interface ImageData {
    url: string;
    public_id: string;
}

export default function UploadCropCloudinary() {
    const [file, setFile] = useState<File | null>(null);
    const [cropData, setCropData] = useState<string>("");
    const [images, setImages] = useState<ImageData[]>([]);
    const cropperRef = useRef<HTMLImageElement>(null);

    // chọn file
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    // lấy ảnh crop
    const getCropData = () => {
        if (cropperRef.current) {
            const cropper = (cropperRef.current as any).cropper;
            setCropData(cropper.getCroppedCanvas().toDataURL());
        }
    };

    // upload ảnh crop lên Cloudinary
    const handleUpload = async () => {
        if (!cropData) return alert("Chưa crop ảnh!");

        try {
            // convert base64 -> blob
            const res = await fetch(cropData);
            const blob = await res.blob();
            const formData = new FormData();
            formData.append("file", blob);
            formData.append("upload_preset", "unsigned_avatar"); // preset unsigned

            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/dvbxj8sdd/image/upload",
                formData
            );

            const newImg = {
                url: uploadRes.data.secure_url,
                public_id: uploadRes.data.public_id,
            };

            setImages((prev) => [...prev, newImg]);
            setCropData("");
            setFile(null);
        } catch (err) {
            console.error("Upload failed:", err);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleInput} />
            {file && (
                <div style={{ width: "400px" }}>
                    <Cropper
                        src={URL.createObjectURL(file)}
                        style={{ height: 400, width: "100%" }}
                        initialAspectRatio={1}
                        guides={true}
                        ref={cropperRef}
                        viewMode={1}
                        background={false}
                        responsive={true}
                        autoCropArea={1}
                        checkOrientation={false}
                    />
                    <button onClick={getCropData}>Xem preview crop</button>
                </div>
            )}

            {cropData && (
                <div>
                    <h3>Preview:</h3>
                    <img src={cropData} alt="cropped" style={{ width: "200px" }} />
                    <button onClick={handleUpload}>Upload Crop lên Cloudinary</button>
                </div>
            )}

            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                {images.map((img) => (
                    <div key={img.public_id}>
                        <img src={img.url} alt="uploaded" width="150" />
                    </div>
                ))}
            </div>
        </div>
    );
}