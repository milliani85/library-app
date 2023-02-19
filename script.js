const bookCards = document.querySelector('.book-cards');
const newBookButton = document.querySelector('.new-book');
const formContainer = document.querySelector('.form-container')
const overlay = document.querySelector('.overlay')

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


function pushBookToPage() {
    myLibrary.forEach(book => {
        const newBookCard = document.createElement('div');        
        newBookCard.innerHTML = `<h3>${book.title}</h3><h4>The Author: ${book.author}</h4><p>${book.pages} pages</p><p>Have read? ${book.read}</p>`
        bookCards.appendChild(newBookCard);
        })
}


newBookButton.addEventListener('click', () => {
    formContainer.classList.toggle('form-hidden')
    overlay.classList.toggle('overlay-on')
})


overlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay-on')) {
        formContainer.classList.add('form-hidden');
        overlay.classList.toggle('overlay-on');
    }
})

