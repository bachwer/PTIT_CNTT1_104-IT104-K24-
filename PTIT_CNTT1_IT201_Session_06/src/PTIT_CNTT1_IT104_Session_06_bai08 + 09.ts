// Book: Lớp sách với các thuộc tính:
//     id: ID sách.
//     title: Tiêu đề sách.
//     author: Tác giả sách.
//     stock: Số lượng sách còn lại trong thư viện.
//     status: Tình trạng sách (đang có sẵn, đã mượn...).
class Book{
    id:string;
    title: string;
    author: string;
    stock: number;
    status: string;
    constructor(id: string, title:string, author: string, stock:number, status:string){
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status
    }
}


// Member: Lớp thành viên của thư viện với các thuộc tính:
//     id: ID thành viên.
//     name: Tên thành viên.
//     contact: Thông tin liên hệ của thành viên.
//     lendedBooks: Mảng chứa các sách mà thành viên đang mượn.
//     status: Tình trạng thành viên (đang hoạt động, bị khóa...).
class Member{
    id: string;
    name:string;
    contact: string;
    LentBook: Book[];
    status: string;
    constructor(id: string, name:string, contact:string, lenderBook:Book[], status:string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.LentBook = lenderBook;
        this.status = status;
    }


    public lentBook(idBook: string, listBook:Book[]){
        const index = listBook.findIndex(book => book.id === idBook);
        if(index != 1){

            if(listBook[index]){

                listBook[index].status = "Borrowing"
                this.LentBook.push(listBook[index]);
            }


        }
    }

}



// LendedBook: Lớp sách mượn với các thuộc tính:
//     memberId: ID thành viên mượn sách.
//     bookId: ID sách mượn.
//     dueDate: Ngày trả sách.


class LentBook{
    memberId: string;
    bookID: string;
    dueDate: string;

    constructor(memberId:string, bookID:string, dueDate:string) {
        this.memberId = memberId;
        this.bookID = bookID;
        this.dueDate = dueDate;
    }

}



//     Library: Lớp thư viện với các thuộc tính:
//     books: Mảng chứa các sách trong thư viện.
//     members: Mảng chứa các thành viên của thư viện.
//     Trong lớp Library, xây dựng các phương thức:
//     addBook: Thêm một sách vào thư viện.
//     showBooks: Hiển thị tất cả sách hiện có trong thư viện.
class library {
    books:Book[];
    members: Member[];
    constructor(books:Book[], member:Member[]) {
        this.books = books;
        this.members = member;
    }

    public addBook(newBook:Book){
        this.books.push(newBook);
    }
    public showBook(){
        this.books.forEach(bk =>{
            console.log(`ID: ${bk.id} Title: ${bk.title} author: ${bk.author} stock: ${bk.stock} status: ${bk.status}`)
        })
    }


    public registerMember(NMB: Member){
        this.members.push(NMB);
    }

    public blockMember(id:string){
        this.members.forEach(me => {
            if(me.id === id){
                me.status = "Block"
            }
        })
    }

    public showMember(){
        this.members.forEach(me => {
            console.log(`ID: ${me.id} Name: ${me.name} Contact: ${me.contact} Status: ${me.status}`);

            if(me.LentBook.length > 0){
                console.log("Borrowing Book")
               me.LentBook.forEach(bk => {
                   console.log(`     borrowing Book :ID: ${bk.id} Title: ${bk.title} author: ${bk.author} stock: ${bk.stock} status: ${bk.status}`)
                   console.log()
               })
           }
        })
    }

}


const book1 = new Book("BK112", "EDC", "AY",30, "active")
const book2 = new Book("BK152", "TRMR", "AY",10, "active")
const book3 = new Book("BK132", "DW", "AY",33, "active")
const book4 = new Book("BK114", "DL", "AY",320, "active")
const book5 = new Book("BK151", "DA", "AY",340, "active")
const book6 = new Book("BK121", "BA", "AY",31, "active")
const book7 = new Book("BK132", "BAM", "AY",320, "active")
const book8 = new Book("BK142", "das", "AY",330, "active")
const mer1 = new Member("ME12", "Ha", "haha@gmail.com", [], "active");
const mer2 = new Member("ME13", "An", "an123@gmail.com", [], "active");
const mer3 = new Member("ME14", "Binh", "binh99@yahoo.com", [], "active");
const mer4 = new Member("ME15", "Chi", "chi_nguyen@gmail.com", [], "block");
const mer5 = new Member("ME16", "Dung", "dung.pro@outlook.com", [], "active");

const ListBook:Book[] = [book1];
const member:Member[] = [];
const libraryA = new library(ListBook, member);

libraryA.showBook();
libraryA.addBook(book2);
libraryA.addBook(book3);
libraryA.addBook(book4);
libraryA.addBook(book5);
libraryA.addBook(book6);
libraryA.addBook(book7);
libraryA.addBook(book8);
console.log("----------BOOK------------")
libraryA.showBook();

console.log("----------USER------------")
libraryA.registerMember(mer1)
libraryA.registerMember(mer2)
libraryA.registerMember(mer3)
libraryA.registerMember(mer4)
libraryA.registerMember(mer5)
console.log("---------LENT BOOK----------")
mer2.lentBook("BK151", libraryA.books);
mer2.lentBook("BK121", libraryA.books);
mer2.lentBook("BK132", libraryA.books);
libraryA.blockMember("ME12")
libraryA.showMember()



console.log("----------------------")
libraryA.showBook();


// Tạo một thực thể từ lớp Library, cùng với các thực thể từ lớp Book đã được định nghĩa. Sử dụng các phương thức đã xây dựng để tiến hành thêm sách và xem tất cả sách trong thư viện.
