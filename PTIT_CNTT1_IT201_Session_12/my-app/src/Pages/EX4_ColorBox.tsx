import React from "react";


interface ColorBoxProps {
    color:string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
    return (
        <div
            style={{
                width: "200px",
                height: "200px",
                backgroundColor: color,
                border: "2px solid #333",
                borderRadius: "8px",
                margin: "10px",
            }}
        />
    );
};

const ColorBoxGroup: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <ColorBox color="red" />
            <ColorBox color="blue" />
            <ColorBox color="#4caf50" />
            <ColorBox color="orange" />
        </div>
    );
};

export default ColorBoxGroup;