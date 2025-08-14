function getRealTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
}

class Account{
    public accountNumber: number;
    protected balance: number = 0;
    protected history:string [] = [];
    protected status: boolean = true;

    constructor(accountNumber: number){
        this.accountNumber = accountNumber;
        this.history = [];
    }
}


class checkingAccount extends Account{
    overdraftLimit: number;
    overdraft:number = 0;

    constructor(accountNumber:number,overdraftLimit:number) {
        super(accountNumber)
        this.overdraftLimit =overdraftLimit;
    }


    public deposit(money: number){
        this.balance += money;
        this.history.unshift(`action: +${money} Time: ${getRealTime()}`)

    }
    public withdraw(money: number){
        if(this.overdraft + money >= this.overdraftLimit){
            console.log("Vua Qua han muc")
        }else{
            if(this.balance >= money){
                this.balance -= money;
                this.overdraft += money;
                this.history.unshift(`action: -${money} Time: ${getRealTime()}`)

            }else{
                console.log("so du ko du")
            }
        }


    }

    public showBalance(){
        console.log(this.balance);
    }
    public showHistory(){
        this.history.forEach(his => {
            console.log(his)
        })
    }
}







// Định nghĩa lớp con CheckingAccount kế thừa lớp Account.




// Lớp CheckingAccount có thêm thuộc tính overdraftLimit.
//     Phương thức withdraw của lớp CheckingAccount thì cho phép rút vượt quá số tiền trong tài khoản cho đến overdraftLimit.
//     Mỗi khi nạp hoặc rút tiền thì phải lưu vào thuộc tính history. Tiến hành tạo ra thực thể lớp, thực hiện nạp và rút tiền, cuối cùng in ra lịch sử giao dịch để kiểm tra.



const Account1 = new checkingAccount(12312312, 20000);
Account1.showHistory();
Account1.showBalance();
Account1.deposit(12000)

Account1.showBalance();
Account1.withdraw(212)
Account1.withdraw(1000)
Account1.showBalance();
Account1.deposit(123)
Account1.deposit(400)
Account1.withdraw(300000)

Account1.showHistory();