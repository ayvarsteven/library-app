let myLibrary = [
    
];

const bookContainer = document.querySelector('#book-container')
const submitBtn = document.querySelector('#submit-btn')


function tempFunct() {
    const newBookFormDialog = document.querySelector('[data-modal="modal-1"]')
    const newBookForm = document.querySelector('#add-new-book')
    const newBookBtn = document.querySelector('#new-book')
    const closeBtn = document.querySelector('.close-btn')

    newBookBtn.addEventListener('click', () => {
        newBookFormDialog.showModal();
    })

    closeBtn.addEventListener('click', () => {
        newBookFormDialog.close()
    })
}

tempFunct()

function createBookCard() {
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

createBookCard()

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    const form = document.querySelector('#add-new-book')
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const pages = document.querySelector('#pages').value
    const read = document.querySelector('#myToggle').checked

    myLibrary.push({title, author, pages, read})
    form.reset();
    createBookCard()
    }

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const newBookFormDialog = document.querySelector('[data-modal="modal-1"]')
    addBookToLibrary()
    newBookFormDialog.close()
})
