import {useAppDispatch} from "../store/hooks.tsx";
import {deleteCart} from "../store/Cart.tsx";

interface CartItemProps {
    index: number;
    item: { id: number; name: string; price: number; qty: number };
}

export default function CartItem({ index, item }: CartItemProps) {
    const dispatch = useAppDispatch()

    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{item.name}</td>
            <td>{item.price} USD</td>
            <td>
                <input type="number" value={item.qty} />
            </td>
            <td>
                <a className="label label-info update-cart-item">Update</a>
                <a
                    onClick={() => dispatch(deleteCart(item.id))}
                    className="label label-danger delete-cart-item">Delete</a>
            </td>
        </tr>
    );
}