let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author} contains ${this.pages} pages, ${read}.`
    };
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary('The Hobbit', 'J.R.R.Tolkein', 295, 'read');

console.log(myLibrary);