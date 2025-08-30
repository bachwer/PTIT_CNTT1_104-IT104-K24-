

import "./ex9.css"
import {useState, type ChangeEvent, useMemo} from "react";

const data = [
    {
        id: 1,
        name: "Apple iPhone 13",
        description: "Smartphone mới nhất của Apple",
    },
    {
        id: 2,
        name: "Samsung Galaxy S21",
        description: "Smartphone flagship của Samsung",
    },
    {
        id: 3,
        name: "OnePlus 9 Pro",
        description: "Smartphone hiệu suất cao từ OnePlus",
    },
    {
        id: 4,
        name: "Google Pixel 6",
        description: "Điện thoại thông minh của Google",
    },
    {
        id: 5,
        name: "Xiaomi Mi 11",
        description: "Điện thoại thông minh giá rẻ",
    },
];




export default function Ex9(){

    const [search, setSearch] = useState("");



    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);


    }

    const filteredProducts = useMemo(() => {
        if (search.trim() === "") return data;
        return data.filter((pro) =>
            pro.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);





    return(
        <div className={"container"}>
            <h1>Tìm Kiếm Sản Phẩm</h1>
            <input onChange={handleChange} value={search} className={"searchInput"}/>

            {search.length > 0 && (
                <div className={"inforContainer"}>
                    <p>{filteredProducts.length} kết quả tìm kiếm cho "{search}"</p>
                </div>
            )
            }

            <div className={"boxProduct"}>



                {filteredProducts.map((pro) => (
                    <div className={"Product"}>
                        <h3>{pro.name}</h3>
                        <p>{pro.description}</p>
                    </div>
                ))

                }

            </div>
        </div>
    )
}
