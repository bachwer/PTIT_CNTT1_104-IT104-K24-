import promptSync from "prompt-sync";
const prompt = promptSync();

// Tự động tăng ID
let idCus = 0;
let IdPro = 0;
let OrderId = 0;

// ===================== CUSTOMER =====================
class Customer {
    id: number = idCus++;
    name: string;
    email: string;
    shippingAddress: string;

    constructor(name: string, email: string, shippingAddress: string) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }

    getDetails(): string {
        return `ID: ${this.id} - Name: ${this.name} - Email: ${this.email} - Address: ${this.shippingAddress}`;
    }
}

// ===================== PRODUCT (ABSTRACT) =====================
abstract class Product {
    id: number = IdPro++;
    name: string;
    price: number;
    stock: number = 0;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    sell(quantity: number) {
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

    restock(quantity: number) {
        this.stock += quantity;
    }

    abstract getShippingCost(): number;
    abstract getCategory(): string;
    abstract getProductInfo(): string;
}

// ===================== ELECTRONICS =====================
class ElectronicsProduct extends Product {
    warrantyPeriod: number;

    public constructor(name: string, price: number, warrantyPeriod: number) {
        super(name, price);
        this.warrantyPeriod = warrantyPeriod;
    }

    getShippingCost(): number {
        return 50000;
    }
    getCategory(): string {
        return "Electronics";
    }
    getProductInfo(): string {
        return `ID: ${this.id} Name: ${this.name} Price: ${this.price} Warranty: ${this.warrantyPeriod} months`;
    }
}

// ===================== CLOTHING =====================
class ClothingProduct extends Product {
    size: string;
    color: string;

    constructor(name: string, price: number, size: string, color: string) {
        super(name, price);
        this.size = size;
        this.color = color;
    }

    getShippingCost(): number {
        return 25000;
    }
    getCategory(): string {
        return "Clothing";
    }
    getProductInfo(): string {
        return `ID: ${this.id} Name: ${this.name} Price: ${this.price} Size: ${this.size} Color: ${this.color}`;
    }
}

// ===================== ORDER =====================
class Order {
    orderID: number = OrderId++;
    customer: Customer;
    products: { product: Product; quantity: number }[] = [];
    totalAmount: number = 0;

    constructor(customer: Customer) {
        this.customer = customer;
    }

    getDetails() {
        console.log("------Detail Order---------");
        console.log(`ID: ${this.orderID} - Customer Name: ${this.customer.name} - Total: ${this.totalAmount}`);
        if (this.products.length > 0) {
            this.products.forEach((item, index) => {
                const lineTotal = item.product.price * item.quantity + item.product.getShippingCost();
                console.log(`STT: ${index + 1} - ${item.product.getProductInfo()} - Qty: ${item.quantity} - Line total: ${lineTotal}`);
            });
        }
    }
}

// ===================== STORE =====================
class Store {
    products: Product[] = [];
    customers: Customer[] = [];
    orders: Order[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    addCustomer(name: string, email: string, address: string) {
        const newCus = new Customer(name, email, address);
        this.customers.push(newCus);
    }

    createOrder(customerId: number, productQuantities: { productId: number; quantity: number }[]): Order | null {
        const customer = this.customers.find(cus => cus.id === customerId);
        if (!customer) return null;

        const prepared: { product: Product; quantity: number }[] = [];
        for (const { productId, quantity } of productQuantities) {
            const product = this.products.find(pro => pro.id === productId);
            if (!product || quantity <= 0 || product.stock < quantity) return null;



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

    cancelOrder(orderId: number) {
        const order = this.orders.find(o => o.orderID === orderId);
        if (!order) {
            console.log("Not found");
            return;
        }
        for (const { product, quantity } of order.products) {
            product.restock(quantity);
        }
        this.orders = this.orders.filter(o => o.orderID !== orderId);
    }

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

    listCustomerOrders(customerId: number) {
        const list = this.orders.filter(o => o.customer?.id === customerId);
        if (!list.length) {
            console.log("No orders for this customer");
            return;
        }
        list.forEach(o => o.getDetails());
    }

    calculateTotalRevenue(): number {
        return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    }

    countProductsByCategory() {
        const counts = this.products.reduce<Record<string, number>>((acc, p) => {
            const cat = p.getCategory();
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {});
        Object.entries(counts).forEach(([cat, count]) => {
            console.log(`${cat}: ${count}`);
        });
    }

    updateProductStock(productId: number, newStock: number) {
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

    findEntityById<T extends { id: number }>(collection: T[], id: number): T | undefined {
        return collection.find(e => e.id === id);
    }
}

// ===================== MAIN MENU =====================
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
                } else if (type === "2") {
                    const name = prompt("Nhập tên sản phẩm quần áo: ") || "";
                    const price = Number(prompt("Nhập giá sản phẩm: "));
                    const size = prompt("Nhập kích cỡ sản phẩm: ") || "";
                    const color = prompt("Nhập màu sắc sản phẩm: ") || "";
                    const stock = Number(prompt("Nhập số lượng tồn kho: "));
                    const cloth = new ClothingProduct(name, price, size, color);
                    cloth.restock(stock);
                    store.addProduct(cloth);
                    console.log("Sản phẩm quần áo đã được thêm.");
                } else {
                    console.log("Loại sản phẩm không hợp lệ.");
                }
            }
                break;
            case "3":
            {
                const customerId = Number(prompt("Nhập ID khách hàng: "));
                const productQuantities: { productId: number; quantity: number }[] = [];
                while (true) {
                    const input = prompt("Nhập ID sản phẩm hoặc 'done' để kết thúc: ");
                    if (!input || input.toLowerCase() === "done") break;
                    const productId = Number(input);
                    const quantity = Number(prompt("Nhập số lượng: "));
                    productQuantities.push({ productId, quantity });
                }
                const order = store.createOrder(customerId, productQuantities);
                if (order) {
                    order.getDetails();
                } else {
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
                    } else {
                        console.log("Not found");
                    }
                } else if (entityType === "customer") {
                    const customer = store.findEntityById(store.customers, id);
                    if (customer) {
                        console.log(customer.getDetails());
                    } else {
                        console.log("Not found");
                    }
                } else {
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
                } else {
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

// Chạy chương trình
mainMenu();