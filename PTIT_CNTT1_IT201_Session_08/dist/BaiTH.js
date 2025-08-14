// Cấu trúc dữ liệu tham khảo
// 1. Lớp Customer (Khách hàng):
// Thuộc tính:
//     id: Mã khách hàng (số nguyên, tự động tăng).
// name: Tên khách hàng (chuỗi).
//     email: Email (chuỗi).
//     shippingAddress: Địa chỉ giao hàng (chuỗi).
//     Phương thức:
//     getDetails(): Trả về chuỗi thông tin chi tiết của khách hàng.
import promptSync from "prompt-sync";
const prompt = promptSync();
let idCus = 0;
let IdPro = 0;
let OrderId = 0;
class Customer {
    id = idCus++;
    name;
    email;
    shippingAddress;
    constructor(name, email, shippingAddress) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails() {
        return `ID: ${this.id} - Name: ${this.name} - Email: ${this.email} - Address: ${this.shippingAddress}`;
    }
}
// 2. Lớp Product (Sản phẩm - Abstract Class):
// Thuộc tính:
//     id: Mã sản phẩm (số nguyên, tự động tăng).
// name: Tên sản phẩm (chuỗi).
//     price: Giá sản phẩm (số thực).
// stock: Số lượng tồn kho (số nguyên).
// Phương thức:
// sell(quantity: number): Giảm số lượng tồn kho khi bán.
// restock(quantity: number): Tăng số lượng tồn kho khi nhập hàng.
// getShippingCost(distance: number): number: (Abstract) Tính toán chi phí vận chuyển.
// getCategory(): string: (Abstract) Trả về danh mục của sản phẩm.
// getProductInfo(): string: (Abstract) Trả về thông tin đặc thù của sản phẩm.
class Product {
    id = IdPro++;
    name;
    price;
    stock = 0;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    sell(quantity) {
        if (quantity <= 0) {
            console.log("Invalid quantity");
            return;
        }
        if (this.stock < quantity) {
            console.log("Not enough stock");
            return;
        }
        this.stock -= quantity;
    }
    restock(quantity) {
        this.stock += quantity;
    }
}
// 3. Các lớp con (kế thừa) của Product:
//     ElectronicsProduct:
//         Thuộc tính bổ sung: warrantyPeriod (thời gian bảo hành, tính theo tháng - số nguyên).
//          Chi phí vận chuyển: 50,000 VND cố định.
//          Thông tin sản phẩm bao gồm cả thời gian bảo hành.
class ElectronicsProduct extends Product {
    warrantyPeriod;
    constructor(name, price, warrantyPeriod) {
        super(name, price);
        this.warrantyPeriod = warrantyPeriod;
    }
    getShippingCost() {
        return 50;
    }
    getCategory() {
        return "Electronics";
    }
    getProductInfo() {
        return `ID: ${this.id} Name: ${this.name} Price ${this.price} warrantyPeriod: ${this.warrantyPeriod}`;
    }
}
//     ClothingProduct:
// Thuộc tính bổ sung: size (kích cỡ - chuỗi), color (màu sắc - chuỗi).
// Chi phí vận chuyển: 25,000 VND cố định.
//     Thông tin sản phẩm bao gồm cả size và màu sắc.
class ClothingProduct extends Product {
    size;
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }
    getShippingCost() {
        return 25;
    }
    getCategory() {
        return "Clothing";
    }
    getProductInfo() {
        return `ID: ${this.id} Name: ${this.name} Price ${this.price} Size: ${this.size}`;
    }
}
// 4. Lớp Order (Đơn hàng):
// Thuộc tính:
//     orderId: Mã đơn hàng (số nguyên, tự động tăng).
//     customer: Khách hàng đặt hàng (Customer).
//     products: Danh sách các sản phẩm trong đơn hàng (mảng các object có dạng { product: Product, quantity: number }).
//     totalAmount: Tổng giá trị đơn hàng (số thực).
// Phương thức:
//     getDetails(): Trả về thông tin chi tiết của đơn hàng, bao gồm danh sách sản phẩm.
class Order {
    orderID = OrderId++;
    customer;
    products = [];
    totalAmount = 0;
    constructor(customer) {
        this.customer = customer;
    }
    getDetails() {
        console.log("------Detail Order---------");
        console.log(`ID: ${this.orderID} - Customer Name: ${this.customer.name} Total: ${this.totalAmount}`);
        if (this.products.length > 0) {
            this.products.forEach((item, index) => {
                const lineTotal = item.product.price * item.quantity + item.product.getShippingCost();
                console.log(`STT: ${index + 1} - ${item.product.getProductInfo()} - Qty: ${item.quantity} - Line total: ${lineTotal}`);
            });
        }
    }
}
// 5. Lớp Store (Hệ thống cửa hàng):
// Thuộc tính:
//     products: Product[]: Danh sách tất cả sản phẩm.
//     customers: Customer[]: Danh sách tất cả khách hàng.
//     orders: Order[]: Danh sách các đơn hàng đã tạo.
//     Phương thức:
class Store {
    products = [];
    customers = [];
    orders = [];
    // addProduct(product: Product): void: Thêm một sản phẩm mới vào cửa hàng.
    addProduct(product) {
        this.products.push(product);
    }
    // addCustomer(name: string, email: string, address: string) : void: Thêm một khách hàng mới.
    addCustomer(name, email, address) {
        const newCus = new Customer(name, email, address);
        this.customers.push(newCus);
    }
    // createOrder(customerId: number, productQuantities: { productId: number, quantity: number }[]): Order | null: Tạo đơn hàng mới cho khách hàng.
    createOrder(customerId, productQuantities) {
        const customer = this.customers.find(cus => cus.id === customerId);
        if (!customer)
            return null;
        const prepared = [];
        for (const { productId, quantity } of productQuantities) {
            const product = this.products.find(pro => pro.id === productId);
            if (!product)
                return null;
            if (quantity <= 0)
                return null;
            if (product.stock < quantity)
                return null;
            prepared.push({ product, quantity });
        }
        const order = new Order(customer);
        for (const { product, quantity } of prepared) {
            product.stock -= quantity;
            order.products.push({ product, quantity });
            order.totalAmount += product.price * quantity + product.getShippingCost();
        }
        this.orders.push(order);
        return order;
    }
    // cancelOrder(orderId: number): void: Hủy một đơn hàng và hoàn trả số lượng sản phẩm về kho.
    cancelOrder(orderId) {
        const order = this.orders.find(o => o.orderID === orderId);
        if (!order) {
            console.log("Not found");
            return;
        }
        // Restock all items
        for (const { product, quantity } of order.products) {
            product.restock(quantity);
        }
        // Remove the order
        this.orders = this.orders.filter(o => o.orderID !== orderId);
    }
    // listAvailableProducts(): void: Hiển thị danh sách các sản phẩm còn hàng (stock > 0) (sử dụng filter).
    listAvailableProducts() {
        const available = this.products.filter(p => p.stock > 0);
        if (available.length === 0) {
            console.log("No available products");
            return;
        }
        available.forEach((p, i) => {
            console.log(`STT: ${i + 1} - ${p.getProductInfo()} - Stock: ${p.stock}`);
        });
    }
    // listCustomerOrders(customerId: number): void: Hiển thị các đơn hàng của một khách hàng (sử dụng filter).
    listCustomerOrders(customerId) {
        const list = this.orders.filter(o => o.customer?.id === customerId);
        if (!list || list.length === 0) {
            console.log("No orders for this customer");
            return;
        }
        list.forEach(o => o.getDetails());
    }
    // calculateTotalRevenue(): number: Tính tổng doanh thu từ tất cả các đơn hàng (sử dụng reduce).
    calculateTotalRevenue() {
        return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    }
    // countProductsByCategory(): void: Đếm số lượng sản phẩm thuộc mỗi danh mục (sử dụng reduce hoặc map).
    countProductsByCategory() {
        const counts = this.products.reduce((acc, p) => {
            const cat = p.getCategory();
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {});
        Object.entries(counts).forEach(([cat, count]) => {
            console.log(`${cat}: ${count}`);
        });
    }
    // updateProductStock(productId: number, newStock: number): void: Cập nhật số lượng tồn kho của một sản phẩm (sử dụng findIndex).
    updateProductStock(productId, newStock) {
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            console.log("Product not found");
            return;
        }
        if (newStock < 0) {
            console.log("Invalid stock value");
            return;
        }
        product.stock = newStock;
    }
    // findEntityById<T extends { id: number }>(collection: T[], id: number): T | undefined: (Yêu cầu Generic) Một phương thức chung để tìm một đối tượng (Product, Customer) trong một danh sách dựa vào id.
    findEntityById(collection, id) {
        return collection.find(e => e.id === id);
    }
}
function mainMenu() {
    const store = new Store();
    let running = true;
    while (running) {
        console.log(`
========= MENU =========
1. Thêm khách hàng mới
2. Thêm sản phẩm mới
3. Tạo đơn hàng mới
4. Hủy đơn hàng
5. Hiển thị sản phẩm còn hàng
6. Hiển thị đơn hàng của khách
7. Tính & hiển thị tổng doanh thu
8. Thống kê sản phẩm theo danh mục
9. Cập nhật tồn kho sản phẩm
10. Tìm kiếm thông tin theo ID
11. Xem chi tiết sản phẩm
0. Thoát
========================
        `);
        const choice = prompt("Chọn chức năng: ");
        switch (choice) {
            case "1":
                {
                    const name = prompt("Nhập tên khách hàng: ") || "";
                    const email = prompt("Nhập email khách hàng: ") || "";
                    const address = prompt("Nhập địa chỉ giao hàng: ") || "";
                    store.addCustomer(name, email, address);
                    console.log("Khách hàng đã được thêm.");
                }
                break;
            case "2":
                {
                    const type = prompt("Chọn loại sản phẩm (1=Electronics, 2=Clothing): ");
                    if (type === "1") {
                        const name = prompt("Nhập tên sản phẩm điện tử: ") || "";
                        const price = Number(prompt("Nhập giá sản phẩm: "));
                        const warranty = Number(prompt("Nhập thời gian bảo hành (tháng): "));
                        const stock = Number(prompt("Nhập số lượng tồn kho: "));
                        const elec = new ElectronicsProduct(name, price, warranty);
                        elec.restock(stock);
                        store.addProduct(elec);
                        console.log("Sản phẩm điện tử đã được thêm.");
                    }
                    else if (type === "2") {
                        const name = prompt("Nhập tên sản phẩm quần áo: ") || "";
                        const price = Number(prompt("Nhập giá sản phẩm: "));
                        const size = prompt("Nhập kích cỡ sản phẩm: ") || "";
                        const stock = Number(prompt("Nhập số lượng tồn kho: "));
                        const cloth = new ClothingProduct(name, price, size);
                        cloth.restock(stock);
                        store.addProduct(cloth);
                        console.log("Sản phẩm quần áo đã được thêm.");
                    }
                    else {
                        console.log("Loại sản phẩm không hợp lệ.");
                    }
                }
                break;
            case "3":
                {
                    const customerId = Number(prompt("Nhập ID khách hàng: "));
                    const productQuantities = [];
                    while (true) {
                        const input = prompt("Nhập ID sản phẩm hoặc 'done' để kết thúc: ");
                        if (!input || input.toLowerCase() === "done")
                            break;
                        const productId = Number(input);
                        const quantity = Number(prompt("Nhập số lượng: "));
                        productQuantities.push({ productId, quantity });
                    }
                    const order = store.createOrder(customerId, productQuantities);
                    if (order) {
                        order.getDetails();
                    }
                    else {
                        console.log("Tạo đơn hàng thất bại.");
                    }
                }
                break;
            case "4":
                {
                    const orderId = Number(prompt("Nhập ID đơn hàng cần hủy: "));
                    store.cancelOrder(orderId);
                    console.log("Đơn hàng đã được hủy (nếu tồn tại).");
                }
                break;
            case "5":
                store.listAvailableProducts();
                break;
            case "6":
                {
                    const customerId = Number(prompt("Nhập ID khách hàng: "));
                    store.listCustomerOrders(customerId);
                }
                break;
            case "7":
                console.log("Tổng doanh thu:", store.calculateTotalRevenue());
                break;
            case "8":
                store.countProductsByCategory();
                break;
            case "9":
                {
                    const productId = Number(prompt("Nhập ID sản phẩm: "));
                    const newStock = Number(prompt("Nhập số lượng tồn kho mới: "));
                    store.updateProductStock(productId, newStock);
                    console.log("Cập nhật tồn kho hoàn tất.");
                }
                break;
            case "10":
                {
                    const entityType = prompt("Nhập loại đối tượng cần tìm (product/customer): ");
                    const id = Number(prompt("Nhập ID: "));
                    if (entityType === "product") {
                        const product = store.findEntityById(store.products, id);
                        if (product) {
                            console.log(product.getProductInfo());
                        }
                        else {
                            console.log("Not found");
                        }
                    }
                    else if (entityType === "customer") {
                        const customer = store.findEntityById(store.customers, id);
                        if (customer) {
                            console.log(customer.getDetails());
                        }
                        else {
                            console.log("Not found");
                        }
                    }
                    else {
                        console.log("Loại đối tượng không hợp lệ.");
                    }
                }
                break;
            case "11":
                {
                    const productId = Number(prompt("Nhập ID sản phẩm: "));
                    const product = store.products.find(p => p.id === productId);
                    if (product) {
                        console.log(product.getProductInfo());
                    }
                    else {
                        console.log("Not found");
                    }
                }
                break;
            case "0":
                running = false;
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    }
}
