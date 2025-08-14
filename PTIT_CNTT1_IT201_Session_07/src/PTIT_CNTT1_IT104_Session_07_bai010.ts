class dish{
    public id: string;
    public name: string;
    public price: number;
    constructor(id: string, name:string, price:number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class table {
    public id: string;
    public capacity: number;
    available: boolean = true;
    constructor(id:string, capacity:number) {
        this.id = id;
        this.capacity = capacity;
    }
}

class Reservation{
    public id: string;
    public customerName: string;
    public tableID: string;
    constructor(id:string, customerName:string, tableId:string) {
        this.id = id;
        this.customerName = customerName;
        this.tableID = tableId;
    }
}

class order{
    public id:string;
    public tableID: string;
    public items:dish[] = []
    constructor(id:string, tableID:string) {
        this.id = id;
        this.tableID = tableID;
    }

    getTotal():number{
        return this.items.reduce((a, b) => a + b.price, 0)

    }

    addOrder(dish:dish){
        this.items.push(dish);
    }
}



class Restaurant {
    public Menu: dish[] = []
    public Table: table[] = []
    public Reservation: Reservation[] = []
    public Order: order[] = [];


    addMENU(dish: dish) {
        this.Menu.push(dish);
    }

    addTABLE(table: table) {
        this.Table.push(table);
    }

    addReservation(idRes: string, Name: string, idTable: string) {
        this.Table.forEach(t => {
            if (t.id === idTable && t.available) {
                t.available = false;
                const res = new Reservation("idRes", Name, idTable);
                this.Reservation.push(res)
            }
        })
    }

    order(idOrder: string, idTable: string, dish: dish) {
        this.Table.forEach(t => {
            if (t.id === idTable) {
                this.Order.forEach(order => {
                    if (order.tableID === idTable) {
                        order.items.push(dish);
                    }
                    return;
                })
                const res = new order(idOrder, idTable);
                res.addOrder(dish);
                this.Order.push(res);
            }
        })
    }

    generateBill(tableID: string) {
        const table = this.Table.find(t => t.id === tableID);
        const orderTable = this.Order.find(t => t.tableID === tableID);
        if (!table || !orderTable) {
            console.log(`Table ${tableID} not found`);
            return;
        }

       console.log(`Table: ${tableID} - ${orderTable.getTotal()} $`)
        table.available = true;

    }
}


const dish1 = new dish("DI11", "Dish1", 200);
const dish2 = new dish("DI12", "Dish2", 300);
const dish3 = new dish("DI13", "Dish3", 123);
const dish4 = new dish("DI14", "Dish4", 321);
const dish5 = new dish("DI15", "Dish5", 124);
const dish6 = new dish("DI1234", "Dish6", 156);
const dish7 = new dish("DI16", "Dish7", 90);


const A1 = new table("A1", 6, );
const A2 = new table("A2", 2, );
const A3 = new table("A3", 5, );
const A4 = new table("A4", 4, );
const A5 = new table("A5", 3, );
const A6 = new table("A6", 1, );
const A7 = new table("A6", 1, );



const restaurant = new Restaurant();
restaurant.addMENU(dish1);  restaurant.addTABLE(A1)
restaurant.addMENU(dish2);  restaurant.addTABLE(A2)
restaurant.addMENU(dish3);  restaurant.addTABLE(A3)
restaurant.addMENU(dish4);  restaurant.addTABLE(A4)
restaurant.addMENU(dish5);  restaurant.addTABLE(A5)
restaurant.addMENU(dish6);  restaurant.addTABLE(A6)
restaurant.addMENU(dish7);  restaurant.addTABLE(A7)


restaurant.addReservation("Res01", "Nguyen van A", "A1")
restaurant.addReservation("Res02", "Nguyen van B", "A2")
restaurant.addReservation("Res03", "Nguyen van C", "A3")
restaurant.addReservation("Res04", "Nguyen van D", "A4")


restaurant.order("order1", "A1", dish1);
restaurant.order("order2", "A1", dish2);
restaurant.order("order3", "A1", dish3);
restaurant.order("order4", "A1", dish4);

restaurant.order("order1", "A2", dish1);
restaurant.order("order2", "A2", dish1);
restaurant.order("order3", "A2", dish3);
restaurant.order("order4", "A2", dish7);


restaurant.generateBill("A2");
restaurant.generateBill("A1");





