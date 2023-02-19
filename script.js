const bookCards = document.querySelector('.book-cards');
const newBookButton = document.querySelector('.new-book');
const formContainer = document.querySelector('.form-container');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.new-book-form');
const checkbox = document.querySelector('#read');



let myLibrary = [];


//Constructor for a new book.
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author} contains ${this.pages} pages, ${read}.`
    };
}


//Add new book to the library array.
function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}


//Creates book card and shows it on the page
function pushBookToPage() {
    myLibrary.forEach(book => {
        const newBookCard = document.createElement('div');
        const borderColor = borderClassList(book.read);
        newBookCard.classList.add(borderColor);
        newBookCard.innerHTML = `<h3>The Title: ${book.title}</h3><h4>The Author: ${book.author}</h4><p>Pages: ${book.pages}</p><button class="${book.read}">${book.read}</button><br><button class="remove-card-button">Remove</button>`
        bookCards.appendChild(newBookCard);
        myLibrary = [];
        })
}


//Set class for book container to toggle border.
function borderClassList(readStatus) {
    if (readStatus === 'Read') {
        return 'green-border'
    } else {
        return 'red-border'
    }
}


//Show form when New Book is clicked.
newBookButton.addEventListener('click', () => {
    formContainer.classList.toggle('form-hidden')
    overlay.classList.toggle('overlay-on')
})


//Hide form and overlay when area around form is clicked.
overlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay-on')) {
        formContainer.classList.add('form-hidden');
        overlay.classList.toggle('overlay-on');
    }
})


//Add book to page.
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = form.title.value;
    const author = form.author.value;
    const pages = form.pages.value;
    const read = isBookRead();
    addBookToLibrary(title, author, pages, read);
    pushBookToPage();
    if (e.target.type = 'submit') {
        formContainer.classList.add('form-hidden');
        overlay.classList.toggle('overlay-on');
    }
})


//Return book read status.
function isBookRead() {
    if (checkbox.checked) {
        return 'Read';
    } else {
        return 'Unread';
    }
}


//Remove book card and toggle read or unread.
bookCards.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-card-button')) {
        e.target.parentElement.remove()
    } else if (e.target.classList.contains('Read')) {
        e.target.classList = 'Unread'
        e.target.innerText = 'Unread'
        e.target.parentElement.classList = 'red-border'
    } else if (e.target.classList.contains('Unread')) {
        e.target.classList = 'Read'
        e.target.innerText = 'Read'
        e.target.parentElement.classList = 'green-border'
    }
})

