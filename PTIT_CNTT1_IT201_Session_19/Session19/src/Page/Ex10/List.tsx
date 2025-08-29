import { useState } from "react";
import Item from "./Item";

export default function List() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleSelect = (index: number) => {
        setSelectedIndex(index);
    };

    const items = Array.from({ length: 100 }, (_, i) => i);

    return (
        <div>
            <h2>Danh sách 100 item</h2>
            {items.map((i) => (
                <Item
                    key={i}
                    index={i}
                    selected={selectedIndex === i}
                    onSelect={handleSelect}
                />
            ))}
        </div>
    );
}