class book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getInFor() {
        return `Title: ${this.title} - Author: ${this.author}`;
    }
}
class library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        console.log("--library--");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}| ${book.getInFor()}`);
        });
    }
}
const book1 = new book("book 1", "author1");
const book2 = new book("book 2", "author2");
const book3 = new book("book 3", "author4");
const book4 = new book("book 4", "author3");
const book5 = new book("book 5", "author5");
const libraryM = new library();
libraryM.addBook(book1);
libraryM.addBook(book2);
libraryM.addBook(book3);
libraryM.addBook(book4);
libraryM.addBook(book5);
libraryM.showBooks();
export {};
