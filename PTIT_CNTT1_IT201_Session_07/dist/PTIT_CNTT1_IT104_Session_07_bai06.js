"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    userName;
    password;
    isLogin;
    role;
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("ok! logout");
        }
    }
}
class userAcc extends Account {
    status;
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "banned") {
            console.log("tài khoản đã bị khóa.");
            this.isLogin = false;
        }
        else {
            if (!this.isLogin) {
                this.isLogin = true;
                console.log(this.isLogin);
            }
        }
    }
}
// Định nghĩa lớp adminAcc kế thừa lớp Account.
//     Lớp adminAcc có thêm phương thức banUser.
//     Phương thức banUser sẽ có tham số là id của 1 đối tượng được khởi tạo từ userAcc.
//     Phương thức sẽ cập nhật thuộc tính status của user được truyền vào thành banned.
class adminAcc extends userAcc {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role, status);
    }
    updateStatusBan(user) {
        if (user.status !== "banned") {
            user.status = "banned";
        }
        else {
            console.log("banned roi");
        }
    }
}
const admin = new adminAcc('123', 'adminTran', "asddas", "admin", "active");
const user2 = new userAcc("21", "user123", "a12331", "admin", "active");
user2.login();
user2.logout();
console.log('banned');
admin.updateStatusBan(user2);
user2.login();
//# sourceMappingURL=PTIT_CNTT1_IT104_Session_07_bai06.js.map