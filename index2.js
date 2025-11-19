
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    
    issueBook() {
        if (this.isIssued) {
            console.log(`❌ Book "${this.title}" is already issued.`);
        } else {
            this.isIssued = true;
            console.log(`✅ Book "${this.title}" has been issued successfully.`);
        }
    }

  
    returnBook() {
        if (!this.isIssued) {
            console.log(`❌ Book "${this.title}" is not issued.`);
        } else {
            this.isIssued = false;
            console.log(`📗 Book "${this.title}" has been returned.`);
        }
    }
}


let b1 = new Book("The Alchemist", "Paulo Coelho", "101");
let b2 = new Book("Atomic Habits", "James Clear", "102", true);
let b3 = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "103");
let b4 = new Book("Wings of Fire", "A.P.J. Abdul Kalam", "104");


let books = [b1, b2, b3, b4];


function showAvailableBooks() {
    console.log("📚 Available Books:");
    let available = books.filter(book => !book.isIssued);

    available.forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`);
    });
}


function issueByISBN(isbn) {
    let book = books.find(b => b.ISBN === isbn);

    if (!book) {
        console.log("❌ Book not found!");
    } else {
        book.issueBook();
    }
}

showAvailableBooks();


issueByISBN("103");  
