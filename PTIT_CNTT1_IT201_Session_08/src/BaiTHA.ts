import promptSync from "prompt-sync";
const prompt = promptSync();


let idCus = 0;
let IdPro = 0;
let OrderId = 0;

//customer
class Customer{
    id:number = idCus++;
    name:string;
    email:string;
    shippingAddress:string;
    constructor(name:string, email:string, shippingAddress:string){
        this.name = name;
        this.email = email;
        this.shippingAddress =shippingAddress;
    }

    getDetails():string{
        return `ID: ${this.id} - Name: ${this.name} - Email: ${this.email} - Address: ${this.shippingAddress}`;
    }
}


// Product;

abstract class Product {
    id: number = IdPro++;
    name: string;
    price:number;
    stock: number = 0;
    protected constructor(name:string, price:number){
        this.name = name;
        this. price = price;
    }

    sell(quantity:number){
        if(quantity <= 0){
            console.log("Invalid Quantity");
            return;
        }
        if(this.stock < quantity){
            console.log("Not enough stock");
            return;
        }

        this.stock -= quantity;
    }


    restock(quantity:number){
        this.stock += quantity;
    }


    abstract getShippingCost(): number;
    abstract getCategory(): string;
    abstract getProductInfo(): string;

}

// electronics extends product;

class ElectronicsProduct extends Product{
    warrantyPeriod: number;
    constructor(name:string, price: number, warrantyPeriod:number){
        super(name, price);
        this.warrantyPeriod = warrantyPeriod;
    }


    getShippingCost():number{
        return 50000;
    }

    getCategory():string{
        return "Electronics"
    }
    getProductInfo():string{
        return `ID: ${this.id} Name: ${this.name} Price: ${this.price} Warranty: ${this.warrantyPeriod} months`;

    }

}

class ClothingProduct extends Product {
    size: string;
    color:string;
     constructor(name:string, price: number, size:string, color: string){
        super(name, price);
        this.size = size;
        this.color = color;
    }

    getShippingCost():number{
        return 25000;
    }

    getCategory():string{
        return "Clothing"
    }
    getProductInfo():string{
        return `ID: ${this.id} Name: ${this.name} Price: ${this.price} Size: ${this.size} Color: ${this.color}`;
    }
}


class Order {
    orderID: number = OrderId++;
    customer: Customer;
    products: { product: Product; quantity: number}[] = [];
    totalAmount: number = 0;
    constructor(customer: Customer){
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


class Store {
    products: Product[] = [];
    customers: Customer[] = [];
    orders: Order[] = []

    addProduct(product:Product){
        this.products.push(product);
    }

    addCustomer(name:string, email: string, address: string){
        const newCus = new Customer(name, email, address);
        this.customers.push(newCus);
    }

    createOrder(customerId: number, productQuantities: { productId: number; quantity: number }[]): Order | null {
        const customer = this.customers.find(cus => cus.id === customerId);
        if (!customer) {
            console.log("Khách hàng không tồn tại.");
            return null;
        }

        // 1) Validate & prepare without mutating stock
        const prepared: { product: Product; quantity: number }[] = [];
        for (const { productId, quantity } of productQuantities) {
            const product = this.products.find(p => p.id === productId);
            if (!product) {
                console.log(`Sản phẩm ID ${productId} không tồn tại.`);
                return null;
            }
            if (!Number.isFinite(quantity) || quantity <= 0) {
                console.log(`Số lượng không hợp lệ cho sản phẩm ID ${productId}.`);
                return null;
            }
            if (product.stock < quantity) {
                console.log(`Không đủ tồn kho cho sản phẩm ID ${productId}.`);
                return null;
            }
            prepared.push({ product, quantity });
        }

        // 2) Apply mutations
        const order = new Order(customer);
        for (const { product, quantity } of prepared) {
            product.stock -= quantity;
            order.products.push({ product, quantity });
            order.totalAmount += product.price * quantity + product.getShippingCost();
        }

        this.orders.push(order);
        return order;
    }

    cancelOrder(orderId: number){
        const order = this.orders.find(o => o.orderID === orderId)
        if(!order){
            console.log("Not found");
            return;
        }
        order.products.forEach(item => {
            item.product.restock(item.quantity);
        });

        this.orders = this.orders.filter(o => o.orderID !== orderId);
    }
    listAvailableProducts(){
        const available = this.products.filter(p => p.stock > 0);
        if(available.length === 0) {
            console.log("Empty");
            return;
        }
        available.forEach((pro) => {
           console.log(`${pro.getProductInfo()}`);
        })

    }


    listCustomerOrders(customerId:number){
        const customer = this.customers.find(cus => cus.id === customerId);
        if(!customer){
            console.log("invalid Customer");
            return;
        }

        this.orders.forEach(order => {
            if(order.customer === customer){
                console.log("-------------------------")
                order.products.forEach(pro => {
                   console.log(`${pro.product.getProductInfo()}`)
                })

                console.log(order.totalAmount);
            }
        })

    }


    calculateTotalRevenue(){

        const Revenue = this.orders.reduce((a, b) => a + b.totalAmount, 0);
        console.log(`Tong doanh thu: ${Revenue}`)
    }




    // countProductsByCategory(): void: Đếm số lượng sản phẩm thuộc mỗi danh mục (sử dụng reduce hoặc map).
    countProductsByCategory(){
        // map;
        const stockMap = new Map <string, number>();

        for(const product of this.products){
            const category = product.getCategory();
            const currentStock = stockMap.get(category) || 0;
            stockMap.set(category, currentStock + product.stock);
        }
        for (const [category, totalStock] of stockMap.entries()) {
            console.log(`${category}: ${totalStock}`);
        }

    }



    // updateProductStock(productId: number, newStock: number): void: Cập nhật số lượng tồn kho của một sản phẩm (sử dụng findIndex).
    updateProductStock(productId: number, newStock: number){
        const index = this.products.findIndex(pro => pro.id === productId);
        if(index !== -1){
            if(this.products[index])  this.products[index].stock = newStock;
        }
    }


    // findEntityById<T extends { id: number }>(collection: T[],id: number): T | undefined: (Yêu cầu Generic) Một phương thức chung để tìm một đối tượng (Product, Customer) trong một danh sách dựa vào id

    findEntityById<T extends { id: number }> (collection: T[],id: number) : T | undefined{
        const item =    collection.find(tId => tId.id === id)
      if(!item){
          console.log("Invalid");
          return undefined;
      }

        if (item instanceof ElectronicsProduct || item instanceof ClothingProduct) {
            console.log(item.getProductInfo());
        } else if (item instanceof Customer) {
            console.log(item.getDetails());
        }

        return item;
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
        `)

        const choice = prompt("Chose: ");

        switch(choice){
            case "1":
            { let name = prompt("Nhap tem: ");
                let email = prompt("Email: ");
                let address = prompt("address: ");
                store.addCustomer(name,email, address);}
                break;
            case "2":
            {

                const chose = Number(prompt("1: Electronics \n2: Clothing\nChọn loại: "));

                const name = prompt("Name product: ");
                const Price = Number(prompt("Price: "));
                const stock = Number(prompt("Nhap so luong: "));
                if (!Number.isFinite(Price) || Price < 0 || !Number.isFinite(stock) || stock < 0) {
                    console.log("Giá hoặc số lượng không hợp lệ.");
                    break;
                }

                if(chose === 1){
                   const warrantyPeriod = Number(prompt("Thời gian bảo hành (tháng): "));
                   const newProduct = new ElectronicsProduct(name, Price, warrantyPeriod);
                    newProduct.restock(stock)
                    store.addProduct(newProduct)

                }else if(chose === 2){
                    const size = prompt("Size: ");
                    const color = prompt("color: ");
                    const newProduct = new ClothingProduct(name, Price, size, color);
                    newProduct.restock(stock)
                    store.addProduct(newProduct)
                }else{
                    console.log("invalid");
                    break;
                }

                console.log("add success");
            }
                break;
            case "3":
                const id = Number(prompt("Nhập ID khách hàng: "));
                const orderProduct :{productId:number; quantity:number}[] = [];

                while(true){
                    const productId = Number(prompt("Nhap Id SP: "))
                    const quantity = Number(prompt("Nhap So luong SP: "))
                    orderProduct.push({productId, quantity});
                    console.log("success!");
                    const check = prompt("Ghi 'done' or 'continue': ");
                    if (check && check.toLowerCase() === "done") break;
                }

                const neworder = store.createOrder(id, orderProduct);
                if (!neworder) {
                    console.log("Tạo đơn hàng thất bại.");
                } else {
                    console.log("Tạo đơn hàng thành công!");
                    neworder.getDetails();
                }
                break;
            case "4":
            {
                const id = Number(prompt("Nhap Id Don hang"));
                store.cancelOrder(id);


            }

                break;
            case "5":
                store.listAvailableProducts();
                break;
            case "6":
                const customerId = Number(prompt("Nhập ID khách hàng: "));
                store.listCustomerOrders(customerId);
                break;
            case "7":
               store.calculateTotalRevenue();
                break;
            case "8":
                store.countProductsByCategory();
                break;
            case "9":
                const productId = Number(prompt("Nhập ID sản phẩm: "));
                const newStock = Number(prompt("Nhập số lượng tồn kho mới: "));
                store.updateProductStock(productId, newStock);
                console.log("Cập nhật tồn kho hoàn tất.");
                break;
            case "10":
            {
                const type = prompt("Tìm theo (p)roduct/(c)ustomer: ")?.trim().toLowerCase();
                const id = Number(prompt("Nhập ID: "));
                if (type === "p") {
                    store.findEntityById<Product>(store.products, id);
                } else if (type === "c") {
                    store.findEntityById<Customer>(store.customers, id);
                } else {
                    console.log("Lựa chọn không hợp lệ.");
                }
            }
                break;
            case "11":
            {const productId = Number(prompt("Nhập ID sản phẩm: "));
                const product = store.products.find(p => p.id === productId);
                if (product) {
                    console.log(product.getProductInfo());
                } else {
                    console.log("Not found");
                }}
                break;
            case "0":
                running = false;
                break;
        }



    }

}









mainMenu()
