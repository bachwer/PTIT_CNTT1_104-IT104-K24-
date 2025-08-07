let orderItem = {
    orderId: "ORD001",
    customerName: "Nguyen Van A",
    items: [
        {
            product: {
                id: "Item01",
                name: "Ao So mi",
                price: 100
            },
            quantity: 2,
        },
        {
            product: {
                id: "Item02",
                name: "Quan Tay",
                price: 200
            },
            quantity: 3,
        },
        {
            product: {
                id: "Item03",
                name: "tui mu",
                price: 100
            },
            quantity: 5,
        },
        {
            product: {
                id: "Item02",
                name: "Quan ngu",
                price: 150
            },
            quantity: 2,
        },
    ],
    note: "Giao Sau 18h"
};
// Tính tổng giá trị đơn hàng dựa trên price × quantity của từng OrderItem.
const calculaterOrderTotal = (order) => {
    let total = 0;
    for (let item of order.items) {
        total += (item.product.price * item.quantity);
    }
    return total;
};
const showOrder = (order) => {
    console.log(`Đơn hàng: ${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(" Sản Phẩm:");
    let i = 1;
    for (let item of order.items) {
        console.log(`   ${i} | (${item.product.name}) x ${item.quantity} ->  ${item.quantity * item.product.price}`);
        i++;
    }
    console.log(`Tổng Tiền: ${calculaterOrderTotal(order)}`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
};
showOrder(orderItem);
export {};
