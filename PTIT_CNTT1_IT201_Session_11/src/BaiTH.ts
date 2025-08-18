import * as readline from 'readline';

let pasId = 0;
let BookId = 0;

class Passenger{
    passengerId:number = pasId++;
    name:string;
    passport: string;
    constructor(name:string, passport:string) {
        this.name = name;
        this.passport = passport;
    }

    getDetails():string{
        return `ID: ${this.passengerId} Name: ${this.name} Passport: ${this.passport}`
    }
}



abstract class Flight {
    flightNumber: string;
    origin: string;
    destination: string;
    departure: string;
    capacity: number;
    bookedSeats: number = 0;

    protected constructor(flightNumber: string, origin: string, destination: string, departure: string, capacity: number, bookedSeats: number) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departure = departure;
        this.capacity = capacity;
    }

    bookSeat(tickets: number) {
        this.bookedSeats += tickets;
    }

    isFull(): boolean {
        return this.bookedSeats >= this.capacity;

    }

    abstract calculateBaggageFee(weight: number): number;
    abstract getType():number;
}

class DomesticFlight extends Flight{
    constructor(flightNumber: string, origin: string, destination: string, departure: string, capacity: number, bookedSeats: number) {
        super(flightNumber, origin, destination, departure, capacity, bookedSeats);
    }

    getType(){
        return 1;
    }

    calculateBaggageFee(weight: number):number{
        return 50000 *weight;
    }
}

class internationalFlight extends Flight{
    constructor(flightNumber: string, origin: string, destination: string, departure: string, capacity: number, bookedSeats: number) {
        super(flightNumber, origin, destination, departure, capacity, bookedSeats);
    }
    getType(){
        return 2;
    }

    calculateBaggageFee(weight: number):number{
        return 250000 *weight;
    }
}

class Booking{
    bookingId:number = BookId++;
    passenger:Passenger;
    flight:Flight;
    numberOfTickets: number;
    totalCost: number = 0;
    constructor(passenger:Passenger, flight:Flight, numberOfTickets:number) {
        this.passenger = passenger;
        this.flight = flight;
        this.numberOfTickets = numberOfTickets;
    }

}

class Generic <T>{
    private items : T[] = [];


    // add(item: T): void: Thêm một đối tượng vào danh sách.
    add(item: T){
        this.items.push(item);
    }


    // getAll(): T[]: Lấy ra toàn bộ danh sách các đối tượng.
    getAll():T[]{
        return this.items;
    }

    // find(predicate: (item: T) => boolean): T | undefined: Tìm một đối tượng dựa trên một điều kiện.
    find(predicate: (item: T) => boolean): T | undefined{
        const itemFounded = this.items.find(predicate);
        if(!itemFounded) return  undefined;
        else return itemFounded
    }

    // findIndex(predicate: (item: T) => boolean): number: Tìm chỉ mục của một đối tượng dựa trên một điều kiện.
    findIndex(predicate: (item: T) => boolean): number{
        const index = this.items.findIndex(predicate);
        if(index != -1) return index;
        else return -1;
    }


    // remove(predicate: (item: T) => boolean): void: Xóa các đối tượng khỏi danh sách dựa trên điều kiện.

    remove(predicate: (item: T) => boolean): void {
        this.items = this.items.filter(item => !predicate(item));
    }

}


class AirlineManager{
    private flightRepo:Flight[] = [];
    private passengerRepo:Passenger[] = [];
    private bookingRepo: Booking[] = []


    addFlight(flight:Flight){
        this.flightRepo.push(flight);
    }
    addPassenger(name:string, passportNuber:string){

        const passenger = new Passenger(name, passportNuber);
        this.passengerRepo.push(passenger);

    }

    createBooking(PassengerId:number, flightNumber:string, numberOfTickets:number, weight:number): Booking | null {
        const pass = this.passengerRepo.find(a => a.passengerId === PassengerId);
        const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);

        if (!pass || !flight) return null;
        if (flight.bookedSeats + numberOfTickets > flight.capacity) return null;

        flight.bookSeat(numberOfTickets);
        const booking = new Booking(pass, flight, numberOfTickets);
        booking.totalCost = flight.calculateBaggageFee(weight) * numberOfTickets;
        this.bookingRepo.push(booking);
        return booking;

    }

    cancelBooking(bookingId:number){
        this.bookingRepo = this.bookingRepo.filter(b => b.bookingId !== bookingId);
    }


    listAvailableFlight(origin: string, destination: string){
        const avail = this.flightRepo.filter(f => !f.isFull() && f.origin === origin && f.destination === destination);
        avail.forEach(flight => {
            console.log(`${flight.flightNumber} ${flight.origin} ${flight.destination} ${flight.departure} cap=${flight.capacity} booked=${flight.bookedSeats}`);
        });
    }

    listBookingByPassenger(passID:number){
        const bookings = this.bookingRepo.filter(a => a.passenger.passengerId === passID);
        if (bookings.length === 0) { console.log('No bookings'); return; }
        bookings.forEach(b => {
            console.log(`Booking#${b.bookingId} Flight=${b.flight.flightNumber} Tickets=${b.numberOfTickets} Cost=${b.totalCost}`);
        });
    }
    calculatorTotalRevenue(){
        const total = this.bookingRepo.reduce((sum,b) => sum + b.totalCost, 0);
        console.log(`tong doanh thu: ${total}`);
        return total;
    }
    countFlightByType(){
        const acc = this.flightRepo.reduce((s, f) => {
            if (f.getType() === 1) s.domestic++; else s.international++;
            return s;
        }, { domestic: 0, international: 0 });
        console.log(`DomesticFlight: ${acc.domestic}`);
        console.log(`international: ${acc.international}`);
        return acc;
    }

    updateTime(fnId:string, newd:string){
        const fl = this.flightRepo.find(a => a.flightNumber === fnId);
        if(!fl) return;
        fl.departure = newd;
    }



    getFlightPassenger(FlightNumber:string){
        const pax = this.bookingRepo
            .filter(b => b.flight.flightNumber === FlightNumber)
            .map(b => b.passenger.getDetails());
        pax.forEach(p => console.log(p));
    }
}
// ================= CLI MENU (switch-case) =================


const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q: string) => new Promise<string>(res => rl.question(q, ans => res(ans.trim())));

const manager = new AirlineManager();

(async function main(){
    while (true) {
        console.log('\n===== AIRLINE MENU =====');
        console.log('1. Thêm hành khách mới');
        console.log('2. Thêm chuyến bay mới (nội địa/quốc tế)');
        console.log('3. Tạo giao dịch đặt vé');
        console.log('4. Hủy giao dịch đặt vé');
        console.log('5. Hiển thị chuyến bay còn trống theo điểm đi/đến');
        console.log('6. Hiển thị vé đã đặt của một hành khách');
        console.log('7. Tính tổng doanh thu của hãng');
        console.log('8. Đếm số lượng chuyến bay nội địa/quốc tế');
        console.log('9. Cập nhật giờ bay');
        console.log('10. Xem danh sách hành khách của một chuyến bay');
        console.log('0. Thoát');
        const choice = await ask('Chọn: ');
        switch (choice) {
            case '1': {
                const name = await ask('Tên hành khách: ');
                const passport = await ask('Số hộ chiếu: ');
                manager.addPassenger(name, passport);
                console.log('Đã thêm hành khách.');
                break;
            }
            case '2': {
                const type = await ask('Loại (1: Nội địa, 2: Quốc tế): ');
                const flightNumber = await ask('Mã chuyến bay: ');
                const origin = await ask('Điểm đi: ');
                const destination = await ask('Điểm đến: ');
                const departure = await ask('Giờ bay (yyyy-mm-dd hh:mm): ');
                const capacity = parseInt(await ask('Sức chứa: '), 10) || 0;
                const booked = 0;
                if (type === '1') {
                    manager.addFlight(new DomesticFlight(flightNumber, origin, destination, departure, capacity, booked));
                } else {
                    manager.addFlight(new internationalFlight(flightNumber, origin, destination, departure, capacity, booked));
                }
                console.log('Đã thêm chuyến bay.');
                break;
            }
            case '3': {
                const pid = parseInt(await ask('ID hành khách: '), 10);
                const fno = await ask('Mã chuyến bay: ');
                const tickets = parseInt(await ask('Số vé: '), 10) || 1;
                const weight = parseFloat(await ask('Khối lượng hành lý (kg) mỗi vé: ')) || 0;
                const bk = manager.createBooking(pid, fno, tickets, weight);
                console.log(bk ? `Đặt vé thành công. Mã: ${bk.bookingId}, Tổng tiền: ${bk.totalCost}` : 'Đặt vé thất bại.');
                break;
            }
            case '4': {
                const bid = parseInt(await ask('Mã giao dịch (bookingId): '), 10);
                manager.cancelBooking(bid);
                console.log('Đã hủy (nếu tồn tại).');
                break;
            }
            case '5': {
                const origin = await ask('Điểm đi: ');
                const destination = await ask('Điểm đến: ');
                manager.listAvailableFlight(origin, destination);
                break;
            }
            case '6': {
                const pid = parseInt(await ask('ID hành khách: '), 10);
                manager.listBookingByPassenger(pid);
                break;
            }
            case '7': {
                manager.calculatorTotalRevenue();
                break;
            }
            case '8': {
                manager.countFlightByType();
                break;
            }
            case '9': {
                const fno = await ask('Mã chuyến bay: ');
                const newTime = await ask('Giờ bay mới: ');
                manager.updateTime(fno, newTime);
                console.log('Đã cập nhật (nếu tồn tại).');
                break;
            }
            case '10': {
                const fno = await ask('Mã chuyến bay: ');
                manager.getFlightPassenger(fno);
                break;
            }
            case '0':
                console.log('Thoát.');
                rl.close();
                return;
            default:
                console.log('Lựa chọn không hợp lệ.');
        }
    }
})();