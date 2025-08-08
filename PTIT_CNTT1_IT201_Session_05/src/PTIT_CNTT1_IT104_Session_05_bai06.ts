class book {
    private readonly title : string;
    private readonly author : string;
    constructor(title:string, author: string){
        this.title = title;
        this.author = author;
    }
    public getInFor():string {
        return `Title: ${this.title} - Author: ${this.author}`
    }
}


class library {
    private books: book[] = [];

    public addBook(book:book): void{
        this.books.push(book)
    }

    public showBooks():void {
        console.log("--library--")
        this.books.forEach((book, index) =>{

            console.log(`${index + 1}| ${book.getInFor()}`)


        })
    }
}
const book1 = new book("book 1", "author1")
const book2 = new book("book 2", "author2")
const book3 = new book("book 3", "author4")
const book4 = new book("book 4", "author3")
const book5 = new book("book 5", "author5")

const libraryM = new library();

libraryM.addBook(book1)
libraryM.addBook(book2)
libraryM.addBook(book3)
libraryM.addBook(book4)
libraryM.addBook(book5)
libraryM.showBooks()

