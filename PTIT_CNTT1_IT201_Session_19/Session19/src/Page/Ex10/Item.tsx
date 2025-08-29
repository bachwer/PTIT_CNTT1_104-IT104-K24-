import React from "react";

interface ItemProps {
    index: number;
    selected: boolean;
    onSelect: (index: number) => void;
}

function Item({ index, selected, onSelect }: ItemProps) {
    console.log(`Render Item ${index}`);
    return (
        <div
            style={{
                padding: "8px",
                margin: "4px",
                border: "1px solid #ccc",
                backgroundColor: selected ? "lightgreen" : "white",
            }}
        >
            <span>Item {index}</span>
            <button style={{ marginLeft: "10px" }} onClick={() => onSelect(index)}>
                Select
            </button>
        </div>
    );
}

export default React.memo(Item);