function getRealTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
}


// Định nghĩa lớp Account có thuộc tính public accountNumber, thuộc tính protected balance,
// thuộc tính protected history và thuộc tính protected status.
// Lớp có 3 phương thức deposit để nạp tiền, withdraw để rút tiền và showHistory để xem lịch sử giao dịch.
class Account{
    public accountNumber: number;
    protected balance: number = 0;
    protected history:string [] = [];
    protected status: boolean = false;

    constructor(accountNumber: number){
        this.accountNumber = accountNumber;
        this.history = [];
    }

    public deposit(money: number){
        this.balance += money;
        this.history.unshift(`action: +${money} Time: ${getRealTime()}`)

    }
    public withdraw(money: number){
       if(this.balance >= money){
           this.balance -= money;
           this.history.unshift(`action: -${money} Time: ${getRealTime()}`)

       }else{
           console.log("so du ko du")
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



//     Định nghĩa lớp con SavingAccount kế thừa lớp Account. Lớp SavingAccount có thêm thuộc tính interestRate.
//     Phương thức withdraw của lớp SavingAccount sẽ chỉ cho phép rút đến khi tiền trong tài khoản về 0.
//     Mỗi khi nạp hoặc rút tiền thì phải lưu vào thuộc tính history. Tiến hành tạo ra thực thể từ lớp, thực hiện nạp và rút tiền, cuối cùng in ra lịch sử giao dịch để kiểm tra.

class SavingAccount extends Account{
    interestRate:any = 0;

    constructor(accountNumber: number) {
        super(accountNumber);
    }


    public interestRateForYear(rate:number){
        this.balance = this.balance + (this.balance * rate)
    }

}



const Account1 = new SavingAccount(123123123);
Account1.showHistory();
Account1.showBalance();
Account1.deposit(1200)
Account1.showBalance();
Account1.withdraw(21312)
Account1.withdraw(1000)
Account1.showBalance();
Account1.deposit(123)
Account1.deposit(400)

Account1.showHistory();