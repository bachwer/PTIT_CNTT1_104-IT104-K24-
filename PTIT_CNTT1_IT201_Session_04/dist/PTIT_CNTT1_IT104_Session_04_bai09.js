let invoice = {
    invoice: "HD101#",
    createAt: new Date(),
    orders: [
        {
            orderId: "ORD001#",
            customerName: "Nguyen Van A",
            items: [
                {
                    product: {
                        id: "SP001#",
                        name: "Ao polo",
                        price: 200,
                    },
                    quantity: 3,
                    note: "size M x1, size L x 2",
                },
                {
                    product: {
                        id: "SP002#",
                        name: "Ao So Mi",
                        price: 150,
                    },
                    quantity: 2,
                    note: "size M x1, size L x 1",
                }
            ],
            deliveryAddress: "....Ha Noi",
            isPaid: false,
        },
        {
            orderId: "ORD022#",
            customerName: "Nguyen Thi B",
            items: [
                {
                    product: {
                        id: "SP0123#",
                        name: "Hoa ..",
                        price: 40,
                    },
                    quantity: 5,
                    note: "Hoa Hong x1, Hoa.. x 2",
                },
                {
                    product: {
                        id: "SP0124#",
                        name: "Chau Cay",
                        price: 100,
                    },
                    quantity: 5,
                    note: ".",
                }
            ],
            deliveryAddress: "....HCM",
            isPaid: true,
        },
    ]
};
//
// calculateInvoiceTotal(invoice: Invoice): number
// Tính tổng tiền của tất cả các đơn hàng có trong hóa đơn.
const totalInvoice = (order) => {
    let total = 0;
    for (let item of order.items) {
        total += (item.product.price * item.quantity);
    }
    return total;
};
// getUnpaidOrders(invoice: Invoice): Order[]
// Trả về danh sách các đơn hàng chưa thanh toán (isPaid: false).
const getUnpaidOrders = (invoice) => {
    console.log("---danh sách các đơn hàng chưa thanh toán ---");
    console.log(`Hoá Đơn: ${invoice.invoice} - Ngày Tạo ${invoice.createAt}`);
    for (let order of invoice.orders) {
        if (!order.isPaid) {
            console.log(`Don hang: ${order.orderId} - ${order.customerName}`);
            for (let item of order.items) {
                console.log(`-(${item.product.name}) x ${item.quantity} -> ${item.quantity * item.product.price} (node: ${item.note})`);
            }
            console.log(`Tong don: ${totalInvoice(order)}`);
            if (order.isPaid)
                console.log(`Trang thai: Da thanh toan`);
            else
                console.log(`Trang thai: Chua thanh toan`);
        }
    }
};
// printInvoice(invoice: Invoice): void
//     In thông tin hóa đơn như sau:
function printInvoice(invoice) {
    console.log(`Hoá Đơn: ${invoice.invoice} - Ngày Tạo ${invoice.createAt}`);
    console.log('------------------');
    let total = 0;
    for (let order of invoice.orders) {
        console.log(`Don hang: ${order.orderId} -  ${order.customerName}`);
        for (let item of order.items) {
            console.log(`-(${item.product.name}) x ${item.quantity} -> ${item.quantity * item.product.price} (node: ${item.note})`);
        }
        console.log(`Tong don: ${totalInvoice(order)}`);
        if (order.isPaid)
            console.log(`Trang thai: Da thanh toan`);
        else
            console.log(`Trang thai: Chua thanh toan`);
        total += totalInvoice(order);
    }
    console.log(`>> Tong Hoa Don: ${total}`);
}
getUnpaidOrders(invoice);
console.log("=====================================");
printInvoice(invoice);
export {};
