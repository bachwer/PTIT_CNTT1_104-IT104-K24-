// updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number)

class book{
    id: number;
    title: string;
    author: string;
    year: number;
    constructor(id:number, title:string, author: string, year:number){
        this.id = id;
        this.title = title;
        this.author = author
        this.year = year;
    }
    public showBook():string{
        return `ID: ${this.id} - Title: ${this.title} - Author: ${this.author} - Year: ${this.year}`;
    }
}

class library{
    books : book[] = [];

    public addBookInLibrary(newBook:book ){
       this.books.push(newBook);
    }
    public updateInfor(Id:number,title:string, author: string, year:number ){
        this.books.forEach((book, index)  =>{
            if(book.id === Id){
                book.title = title;
                book.author =author;
                book.year = year;
            }
        })
    }
    public ShowALl(){
        this.books.forEach((book)  =>{
            console.log(book.showBook());
        })
    }

    public deleteBook(Id:number){
        // const index = this.books.findIndex(book => book.id === Id); or
        this.books.forEach((book, index)  =>{
            if(book.id === Id) this.books.splice(index, 1);
        })
    }
}

const libraryA1 = new library();

const book1 = new book(1, "aaa", "A", 2001);
const book2 = new book(2, "bbb", "B", 2002);
const book3 = new book(3, "ccc", "C", 2003);
const book4 = new book(4, "ddd", "D", 2004);



libraryA1.addBookInLibrary(book1);
libraryA1.addBookInLibrary(book2);
libraryA1.addBookInLibrary(book3);
libraryA1.addBookInLibrary(book4);
libraryA1.ShowALl();


console.log("Updated Id: 2")
libraryA1.updateInfor(2, "eee", "E", 1999);
libraryA1.ShowALl();

console.log("Deleted Id 3")
libraryA1.deleteBook(3);
libraryA1.ShowALl();