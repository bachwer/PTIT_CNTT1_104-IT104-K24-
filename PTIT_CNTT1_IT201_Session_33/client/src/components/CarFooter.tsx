interface CartFooterProps {
    totalItems: number;
    totalPrice: number;
}

export default function CartFooter({ totalItems, totalPrice }: CartFooterProps) {
    return (
        <tfoot id="my-cart-footer">
        <tr>
            <td colSpan={4}>
                There are <b>{totalItems}</b> items in your shopping cart.
            </td>
            <td colSpan={2} className="total-price text-left">
                {totalPrice} USD
            </td>
        </tr>
        </tfoot>
    );
}