import {useMemo, useState} from "react";


interface CartItem{
    id:number,
    name:string,
    price:number,
    quantity:number
}
export default function ex1(){
    const [cartItem] = useState<CartItem[]> ([
        { id: 1, name: "Coca Cola", price: 10000, quantity: 2 },
        { id: 2, name: "Pepsi", price: 12000, quantity: 1 },
        { id: 3, name: "Snack", price: 15000, quantity: 3 },
    ])

    const total = useMemo(() => {
        return cartItem.reduce((sum, item) => sum + item.price *item.quantity, 0)
    }, [cartItem])

    return(
        <div>

            {cartItem.length === 0 ? (
                <p>Giỏ hàng đang trống</p>
            ) : (
                <ul>
                    {cartItem.map((item) => (
                        <li key={item.id}>
                            {item.name} – {item.quantity} × {item.price.toLocaleString()}₫ ={" "}
                            {(item.price * item.quantity).toLocaleString()}₫
                        </li>
                    ))}
                </ul>
            )}

            <h3>Tổng cộng: {total.toLocaleString()}₫</h3>


        </div>
    )
}