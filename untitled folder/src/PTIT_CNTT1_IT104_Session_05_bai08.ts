class book{
    private id : number;
    public name: string;
    public author: string;
    constructor(id:number, name:string, author: string){
        this.id = id;
        this.name = name;
        this.author = author;
    }
    public getInfor():string{
       return `ID: ${this.id} - Name: ${this.name} - Author: ${this.author}`;
    }
}

class library {
   private books:book[] = [];



   public addBook(book1:book):void{
       this.books.push(book1);
   }

   public SearchBook(name:string):void{
       this.books.forEach((book, index) =>{
          if((book.name.includes(name))){
              console.log(`Da tim thay: ${index}| ${book.getInfor()}`)
          }
       })
   }


   public showBook():void {
       this.books.forEach((book, index) =>{
           console.log(`${index}| ${book.getInfor()}`)
       })
    }
}

const book1 = new book(5, "book 1", "author1")
const book2 = new book(2, "book 2", "author1")
const book3 = new book(3, "book 3", "author1")



const libraryM = new library();

libraryM.addBook(book1)
libraryM.addBook(book2)
libraryM.addBook(book3)
libraryM.showBook();
console.log(`-------------------`)
libraryM.SearchBook("book 2")

