

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





// Định nghĩa lớp adminAcc kế thừa lớp Account.
//     Lớp adminAcc có thêm phương thức banUser.
//     Phương thức banUser sẽ có tham số là id của 1 đối tượng được khởi tạo từ userAcc.
//     Phương thức sẽ cập nhật thuộc tính status của user được truyền vào thành banned.

class adminAcc extends userAcc{
    constructor(id:string, userName:string, password:string, role:string, status: string){
        super(id, userName, password, role,status);
    }

    public updateStatusBan(user:userAcc){
        if(user.status !== "banned"){
            user.status = "banned";
        }else{
            console.log("banned roi")
        }
    }

}

const admin = new adminAcc('123','adminTran', "asddas", "admin", "active");



const user2 = new userAcc("21", "user123", "a12331", "admin", "active");
user2.login();
user2.logout()


console.log('banned')
admin.updateStatusBan(user2);

user2.login();