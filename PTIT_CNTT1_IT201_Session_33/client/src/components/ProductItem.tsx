import {useAppDispatch} from "../store/hooks.tsx";
import {changeQty} from "../store/Product.tsx";
import {addCart} from "../store/Cart.tsx";


interface ProductProps {
    product: { id: number;
        name: string;
        price: number;
        quantity: number;
    }
}



export default function ProductItem({ product }: ProductProps) {
    const dispatch = useAppDispatch();


    //
    // const addItemToCard = () => {
    //
    // }

    const handleAddItemToCard = () => {
        console.log(product);
        dispatch(addCart(product))

    }





    return (
        <div className={"media product cursor-pointer"}>
            <div className="media-left">
                <img
                    className="media-object"
                    src="https://cdn-imgix.headout.com/microbrands-content-image/image/cf0a8ab55e1de8849ec57f7f97f570f6-Chang%E2%80%99s%20Golden%20Dragon.jpg?auto=format&w=510.8727272727273&h=401.4&q=90&ar=14%3A11&crop=faces&fit=crop"
                    alt={product.name}
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
            </div>
            <div className="media-body">
                <h4 className="media-heading">{product.name}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <input
                        type="number"
                        onChange={(e) =>
                            dispatch(
                                changeQty({ id: product.id, quantity: Number(e.target.value) })
                            )
                        }
                        min="0"
                        defaultValue={product.quantity}
                        style={{ width: "60px" }}
                    />
                    <span
                        onClick={handleAddItemToCard}
                        className={"price cursor-pointer"}
                        style={{
                            backgroundColor: product.quantity === 0 ? "#BDBDBD" : "#FF4000",
                        }}
                    >
            {product.price} <b>USD</b>
          </span>
                </div>
            </div>
        </div>
    );
}