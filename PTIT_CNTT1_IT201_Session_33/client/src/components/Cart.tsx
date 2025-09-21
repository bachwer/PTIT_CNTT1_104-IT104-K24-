import CartItem from "./CarItem.tsx";
import CartFooter from "./CarFooter.tsx";
import Notification from "./Notification.tsx"
import { useSelector} from "react-redux";
import {useEffect} from "react";
import {useAppDispatch} from "../store/hooks.tsx";
import { fetchCart } from "../store/Cart";
import type {RootState} from "../store/store.tsx";

export default function Cart() {

    const cartItems = useSelector((state :RootState) => state.Cart)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);


    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h1 className="panel-title">Your Cart</h1>
                </div>
                <div className="panel-body">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody id="my-cart-body">
                        {cartItems.data.map((c, i) => (

                            <CartItem key={c.id} index={i + 1} item={c} />

                        ))}
                        </tbody>
                        <CartFooter totalItems={cartItems.data.length} totalPrice={cartItems.data.reduce((a,b) => a + (b.price * b.qty),0)} />
                    </table>
                </div>
            </div>

            <Notification/>
        </div>
    );
}