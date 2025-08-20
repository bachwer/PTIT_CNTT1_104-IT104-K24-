import React, {useState} from "react";
import ChildrenEx5 from "./ChildrenEx5.tsx"

export interface Product{
    id: number,
    Name: string,
    Price: number,
    Quantity: number;
}

const ParentEx5: React.FC = () => {
    const [Product] = useState<Product>({id:1, Name:"Buoi ba roi", Price: 50, Quantity: 10})


    return(
        <div style={{margin: "auto", width: "200px"}}>
        <ChildrenEx5 product={Product}/>
        </div>
    )

}

export default ParentEx5;