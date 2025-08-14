// Định nghĩa lớp Account có các thuộc tính id, userName, password, isLogin, role và phương thức login.
//     Phương thức logout kiểm tra isLogin nếu là true thì thông báo đăng xuất thành công và cập nhật isLogin thành false. Nếu isLogin là false thì không làm gì cả.

class Account{
    id: string;
    userName: string;
    password: string;
    isLogin: boolean
    role: string;

    constructor(id:string, userName:string, password:string, role:string){
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }

    public logout(){
        if(this.isLogin) {
            this.isLogin = false;
            console.log("ok! logout")
        }
    }
}




//     Định nghĩa lớp userAcc kế thừa lớp Account.
//     Lớp userAcc có thêm thuộc tính status.
//     Phương thức login của lớp userAcc sẽ kiểm tra status của người dùng,
//     nếu status là active thì cho phép đăng nhập và cập nhật thuộc tính isLogin thành true.
//     nếu status là banned thì thông báo tài khoản đã bị khóa.


class userAcc extends Account{
    status: string;
    constructor(id:string, userName:string, password:string, role:string, status: string){
        super(id, userName, password, role)
            this.status = status;
    }

    public login(){
        if(this.status === "banned"){
            console.log("tài khoản đã bị khóa.")
            this.isLogin = false;
        }else{
            if(!this.isLogin){
                this.isLogin = true;
                console.log(this.isLogin)
            }
        }
    }

}

const user1 = new userAcc("21", "user123", "a12331", "admin", "banned");
user1.login();


const user2 = new userAcc("21", "user123", "a12331", "admin", "active");
user2.login();

user2.logout()