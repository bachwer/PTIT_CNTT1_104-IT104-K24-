class booK {
    id;
    title;
    author;
    year;
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getBook() {
        return `Id: ${this.id} - title: ${this.title} - author: ${this.author} - year: ${this.year}`;
    }
}
class library {
    Books = [];
    addBookInL(newBook) {
        this.Books.push(newBook);
    }
    updateBook(id, title, author, year) {
        this.Books.forEach((book, index) => {
            if (book.id === id) {
                book.title = title;
                book.author = author;
                book.year = year;
            }
        });
    }
    deleteBook(id) {
        const index = this.Books.findIndex(book => book.id === id);
        if (index != -1)
            this.Books.splice(index, 1);
    }
    showAllBook() {
        this.Books.forEach((book) => {
            console.log(book.getBook());
        });
    }
}
const libraryA = new library();
const book1 = new booK(1, "aaa", "author A", 2000);
const book2 = new booK(2, "sss", "author S", 1923);
const book3 = new booK(3, "ddd", "author D", 1342);
const book4 = new booK(4, "ccc", "author C", 2023);
libraryA.addBookInL(book1);
libraryA.addBookInL(book2);
libraryA.addBookInL(book3);
libraryA.addBookInL(book4);
libraryA.showAllBook();
console.log("Updated id 3");
libraryA.updateBook(3, "rrr", "author R", 1023);
libraryA.showAllBook();
console.log("Deleted id 2");
libraryA.deleteBook(2);
libraryA.showAllBook();
export {};
