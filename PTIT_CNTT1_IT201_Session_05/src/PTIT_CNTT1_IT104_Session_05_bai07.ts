class book {
    private book : number;

    constructor(book:number){
        this.book = book;
    }
    public showBook():void{
        console.log(`id: ${this.book}`)
    }

    public updateBook(value: number):void{
        this.book = value;
    }
}

const book1 = new book(9)
const book2 = new book(1)
book1.showBook()
book2.showBook()
book1.updateBook(5);
book2.updateBook(5);
console.log(`-------------------`)

book1.showBook()
book2.showBook()