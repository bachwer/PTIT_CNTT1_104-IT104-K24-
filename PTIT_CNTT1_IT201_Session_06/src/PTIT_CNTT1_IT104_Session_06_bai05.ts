// Tạo interface changeSpeed với các phương thức:
//     speedUp: Tăng tốc độ.
//     slowDown: Giảm tốc độ.
//     stop: Dừng phương tiện.

interface changeSpeed{
    speedUp():void;
    slowDown():void;
    stop():void;
}



//     Định nghĩa lớp Vehicle và thực hiện implements interface changeSpeed với thuộc tính private speed để lưu trữ tốc độ của phương tiện.
class vehicle implements changeSpeed {
    private speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    public slowDown() {
        if (this.speed > 5) {
            this.speed = this.speed + 5;
            console.log(`Toc do: ${this.speed}`)
        } else {
            console.log("Toc do cham rr")
        }
    }

    public speedUp() {
        if (this.speed) {
            this.speed = this.speed + 5;
            console.log(`Toc do: ${this.speed}`)
        }
    }
    public stop() {
        this.speed = 0;
        console.log(`Toc do: ${this.speed}`)
    }


}




//     Xây dựng các phương thức trong lớp Vehicle để thay đổi thuộc tính speed, bao gồm:
//     slowDown: Giảm tốc độ.
//     stop: Đưa tốc độ về 0.
//     speedUp: Tăng tốc độ.




//     Tạo một thực thể từ lớp Vehicle và gọi các phương thức thay đổi tốc độ. Sau mỗi phương thức, in thông tin về trạng thái của tốc độ để kiểm tra kết quả.

const ve = new vehicle(50);
console.log("Tang")
ve.speedUp()
ve.speedUp()
ve.speedUp()

console.log("Giam")
ve.slowDown()
ve.slowDown()
ve.slowDown()
ve.slowDown()
ve.slowDown()
ve.slowDown()

ve.stop()
