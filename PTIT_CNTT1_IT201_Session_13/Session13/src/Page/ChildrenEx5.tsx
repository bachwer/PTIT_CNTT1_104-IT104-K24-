import React from 'react'
import type {Product} from "./ParentEx5.tsx";


interface ChildrenProps {
    product: Product;
}


const children: React.FC<ChildrenProps> = ({product}) => {
    return(
        <div>

            <h2>ID: {product.id}</h2>
            <h2>Name: {product.Name}</h2>
            <h2>Price: {product.Price}</h2>
            <h2>Quantity: {product.Quantity}</h2>

        </div>
    )
}
export default children