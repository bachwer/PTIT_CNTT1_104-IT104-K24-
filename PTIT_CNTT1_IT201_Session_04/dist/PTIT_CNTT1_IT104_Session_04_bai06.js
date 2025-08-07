let listProduct = [
    {
        id: "AA1",
        name: "Ao so mi",
        price: 100000,
        category: {
            id: "AA",
            name: "thoi trang nam"
        },
        discount: 20
    }, {
        id: "AA2",
        name: "Quan",
        price: 240101,
        category: {
            id: "AA",
            name: "thoi trang nam"
        },
        discount: 10
    },
    {
        id: "BB1",
        name: "Ao so mi cho nu",
        price: 80000,
        category: {
            id: "BB",
            name: "thoi trang nu"
        }
    },
];
const getFinalPrice = (product) => {
    if (product.discount) {
        return product.price * (1 - product.discount / 100);
    }
    return product.price;
};
function printProductInfo(product) {
    console.log(`Name ${product.name}`);
    console.log(`gia goc ${product.price}`);
    console.log(`gia da giam ${getFinalPrice(product)}`);
    console.log(`Danh much ${product.category.name}`);
}
if (listProduct[0] && listProduct[1] && listProduct[2]) {
    console.log("-----------------------");
    printProductInfo(listProduct[0]);
    console.log("-----------------------");
    printProductInfo(listProduct[1]);
    console.log("-----------------------");
    printProductInfo(listProduct[2]);
}
export {};
