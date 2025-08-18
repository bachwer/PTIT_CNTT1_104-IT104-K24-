"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
let pasId = 0;
let BookId = 0;
class Passenger {
    passengerId = pasId++;
    name;
    passport;
    constructor(name, passport) {
        this.name = name;
        this.passport = passport;
    }
    getDetails() {
        return `ID: ${this.passengerId} Name: ${this.name} Passport: ${this.passport}`;
    }
}
class Flight {
    flightNumber;
    origin;
    destination;
    departure;
    capacity;
    bookedSeats = 0;
    constructor(flightNumber, origin, destination, departure, capacity, bookedSeats) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departure = departure;
        this.capacity = capacity;
    }
    bookSeat(tickets) {
        this.bookedSeats += tickets;
    }
    isFull() {
        return this.bookedSeats >= this.capacity;
    }
}
class DomesticFlight extends Flight {
    constructor(flightNumber, origin, destination, departure, capacity, bookedSeats) {
        super(flightNumber, origin, destination, departure, capacity, bookedSeats);
    }
    getType() {
        return 1;
    }
    calculateBaggageFee(weight) {
        return 50000 * weight;
    }
}
class internationalFlight extends Flight {
    constructor(flightNumber, origin, destination, departure, capacity, bookedSeats) {
        super(flightNumber, origin, destination, departure, capacity, bookedSeats);
    }
    getType() {
        return 2;
    }
    calculateBaggageFee(weight) {
        return 250000 * weight;
    }
}
class Booking {
    bookingId = BookId++;
    passenger;
    flight;
    numberOfTickets;
    totalCost = 0;
    constructor(passenger, flight, numberOfTickets) {
        this.passenger = passenger;
        this.flight = flight;
        this.numberOfTickets = numberOfTickets;
    }
}
class Generic {
    items = [];
    // add(item: T): void: Thêm một đối tượng vào danh sách.
    add(item) {
        this.items.push(item);
    }
    // getAll(): T[]: Lấy ra toàn bộ danh sách các đối tượng.
    getAll() {
        return this.items;
    }
    // find(predicate: (item: T) => boolean): T | undefined: Tìm một đối tượng dựa trên một điều kiện.
    find(predicate) {
        const itemFounded = this.items.find(predicate);
        if (!itemFounded)
            return undefined;
        else
            return itemFounded;
    }
    // findIndex(predicate: (item: T) => boolean): number: Tìm chỉ mục của một đối tượng dựa trên một điều kiện.
    findIndex(predicate) {
        const index = this.items.findIndex(predicate);
        if (index != -1)
            return index;
        else
            return -1;
    }
    // remove(predicate: (item: T) => boolean): void: Xóa các đối tượng khỏi danh sách dựa trên điều kiện.
    remove(predicate) {
        this.items = this.items.filter(item => !predicate(item));
    }
}
class AirlineManager {
    flightRepo = [];
    passengerRepo = [];
    bookingRepo = [];
    addFlight(flight) {
        this.flightRepo.push(flight);
    }
    addPassenger(name, passportNuber) {
        const passenger = new Passenger(name, passportNuber);
        this.passengerRepo.push(passenger);
    }
    createBooking(PassengerId, flightNumber, numberOfTickets, weight) {
        const pass = this.passengerRepo.find(a => a.passengerId === PassengerId);
        const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
        if (!pass || !flight)
            return null;
        if (flight.bookedSeats + numberOfTickets > flight.capacity)
            return null;
        flight.bookSeat(numberOfTickets);
        const booking = new Booking(pass, flight, numberOfTickets);
        booking.totalCost = flight.calculateBaggageFee(weight) * numberOfTickets;
        this.bookingRepo.push(booking);
        return booking;
    }
    cancelBooking(bookingId) {
        this.bookingRepo = this.bookingRepo.filter(b => b.bookingId !== bookingId);
    }
    listAvailableFlight(origin, destination) {
        const avail = this.flightRepo.filter(f => !f.isFull() && f.origin === origin && f.destination === destination);
        avail.forEach(flight => {
            console.log(`${flight.flightNumber} ${flight.origin} ${flight.destination} ${flight.departure} cap=${flight.capacity} booked=${flight.bookedSeats}`);
        });
    }
    listBookingByPassenger(passID) {
        const bookings = this.bookingRepo.filter(a => a.passenger.passengerId === passID);
        if (bookings.length === 0) {
            console.log('No bookings');
            return;
        }
        bookings.forEach(b => {
            console.log(`Booking#${b.bookingId} Flight=${b.flight.flightNumber} Tickets=${b.numberOfTickets} Cost=${b.totalCost}`);
        });
    }
    calculatorTotalRevenue() {
        const total = this.bookingRepo.reduce((sum, b) => sum + b.totalCost, 0);
        console.log(`tong doanh thu: ${total}`);
        return total;
    }
    countFlightByType() {
        const acc = this.flightRepo.reduce((s, f) => {
            if (f.getType() === 1)
                s.domestic++;
            else
                s.international++;
            return s;
        }, { domestic: 0, international: 0 });
        console.log(`DomesticFlight: ${acc.domestic}`);
        console.log(`international: ${acc.international}`);
        return acc;
    }
    updateTime(fnId, newd) {
        const fl = this.flightRepo.find(a => a.flightNumber === fnId);
        if (!fl)
            return;
        fl.departure = newd;
    }
    getFlightPassenger(FlightNumber) {
        const pax = this.bookingRepo
            .filter(b => b.flight.flightNumber === FlightNumber)
            .map(b => b.passenger.getDetails());
        pax.forEach(p => console.log(p));
    }
}
// ================= CLI MENU (switch-case) =================
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise(res => rl.question(q, ans => res(ans.trim())));
const manager = new AirlineManager();
(async function main() {
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
                }
                else {
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
//# sourceMappingURL=BaiTH.js.map