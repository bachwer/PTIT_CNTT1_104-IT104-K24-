const products = [
    {name: "A", price: 100, discount: 0.1, quantity: 2},
    {name: "B", price: 100, discount: 0.1, quantity: 2, bulkDiscount:{minQuantity: 2, extraDiscount: 0.05}},
    {name: "C", price: 100, discount: 0, quantity: 2, bulkDiscount:{minQuantity: 2, extraDiscount: 0.1}},
];

const beforeDiscount = (products) =>{
    return products.reduce((a, b) => a + b.price * b.quantity, 0);
}

const afterDiscount = (products) => {
    return products.reduce((total, item) => {
        let discount = item.discount;

        if (item.bulkDiscount && item.quantity >= item.bulkDiscount.minQuantity) {
            discount += item.bulkDiscount.extraDiscount;
        }

        const finalPrice = item.price * (1 - discount);
        return total + finalPrice * item.quantity;
    }, 0);
}
const getPrice1 = (item) => {
    let discount = item.discount;
    if (item.bulkDiscount && item.quantity >= item.bulkDiscount.minQuantity) {
        discount += item.bulkDiscount.extraDiscount;
    }
    return finalPrice = item.price * (1 - discount);

}

const getPrice = (item) => {
    let discount = item.discount;
    if (item.bulkDiscount && item.quantity >= item.bulkDiscount.minQuantity) {
        discount += item.bulkDiscount.extraDiscount;
    }
    const finalPrice = item.price * (1 - discount);

    return  finalPrice * item.quantity;

}


const getOrder = (products) => {
    const details = {
        totalBeforeDiscount: beforeDiscount(products),
        totalAfterDiscount: afterDiscount(products),
        detailsProducts:[
            {name: products[0].name, finalPrice:getPrice1(products[0]), quantity: products[0].quantity, subtotal: getPrice(products[0])},
            {name: products[1].name, finalPrice:getPrice1(products[1]), quantity: products[1].quantity, subtotal: getPrice(products[0])},
            {name: products[2].name, finalPrice:getPrice1(products[2]), quantity: products[2].quantity, subtotal: getPrice(products[0])},

        ]
    }
    return details;
}

console.log(getOrder(products));