"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Định nghĩa lớp Vehicle có 3 thuộc tính là name, speed và id.Các thuộc tính đều là protected.
// Lớp có 3 phương thức slowDown để giảm tốc, speedUp để tăng tốc và showSpeed để in ra tốc độ hiện tại.
class vehicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed -= 10;
    }
    speedUp() {
        this.speed += 10;
    }
    showSpeed() {
        console.log(this.speed);
    }
}
// Tạo ra 1 lớp Bicycle kế thừa từ lớp Vehicle và có thêm thuộc tính gear là số bánh răng và là private.
// Tạo ra 1 đối tượng từ lớp Bicycle, tiến hành tăng hoặc giảm tốc, in lại thông tin và kiểm tra kết quả.
class bycycle extends vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
const xe = new bycycle("bycycle", 20, "BYC12", 12);
xe.speedUp();
xe.showSpeed();
xe.speedUp();
xe.showSpeed();
xe.slowDown();
xe.showSpeed();
//# sourceMappingURL=PTIT_CNTT1_IT104_Session_07_bai02.js.map