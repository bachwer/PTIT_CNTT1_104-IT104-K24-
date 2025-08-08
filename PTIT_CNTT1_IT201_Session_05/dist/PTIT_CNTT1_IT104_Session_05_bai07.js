class book {
    book;
    constructor(book) {
        this.book = book;
    }
    showBook() {
        console.log(`id: ${this.book}`);
    }
    updateBook(value) {
        this.book = value;
    }
}
const book1 = new book(9);
const book2 = new book(1);
book1.showBook();
book2.showBook();
book1.updateBook(5);
book2.updateBook(5);
console.log(`-------------------`);
book1.showBook();
book2.showBook();
export {};
