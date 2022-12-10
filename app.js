let myLibrary = [
    {
        title: 'Steven Ayvar',
        author: 'Steven Ayvar',
        pages: 2000
    }
];

const bookContainer = document.querySelector('#book-container')

function displayBook() {
    myLibrary.forEach(book => {
        let newBook = document.createElement('div')

        let bookTitle = document.createElement('p')
        bookTitle.textContent = `${book.title}`

        let bookAuthor = document.createElement('p')
        bookAuthor.textContent = `${book.author} | ${book.pages} Pages`

        const btnContainer = document.createElement('div')

        const readBtn = document.createElement('button')
        readBtn.textContent = 'READ'

        const removeBtn = document.createElement('button')
        removeBtn.textContent = 'REMOVE'

        newBook.classList.add('book')
        bookTitle.classList.add('book-card__title')
        bookAuthor.classList.add('book-card__details')
        readBtn.classList.add('book-card__read-btn')
        removeBtn.classList.add('book-card__remove-btn')
        
        btnContainer.append(readBtn, removeBtn)
        newBook.append(bookTitle, bookAuthor, btnContainer)
        bookContainer.append(newBook)
    })
}

displayBook()

function Book() {

}

function addBookToLibrary() {

}