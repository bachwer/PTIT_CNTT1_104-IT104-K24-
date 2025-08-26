import {useState} from "react"


export default function Ex2(){
    const [product] = useState({
        id: 1,
        name: "Coca cola",
        price: 1000,
        quantity: 10,
    });



    return(
        <div style={{}}>
            <h1>Thông Tin Sản Phẩm</h1>
            <p>Id: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </div>
    )

}