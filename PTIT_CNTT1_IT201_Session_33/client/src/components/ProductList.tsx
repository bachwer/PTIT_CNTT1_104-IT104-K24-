import ProductItem from "./ProductItem";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "../store/hooks.tsx";
import  {fetchProduct} from "../store/Product.tsx";



export default function ProductList() {
    const products = useSelector((state: RootState) => state.Product.data)
    const dispatch = useAppDispatch()
    useEffect(() => {
        (dispatch(fetchProduct()))
    }, []);

    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h1 className="panel-title">List Products</h1>
                </div>
                <div className="panel-body" id="list-product">
                    {products.map((p) => (
                        <ProductItem key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    );
}