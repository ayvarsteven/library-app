let myLibrary = [
    {
        title: 'Call of Cthulhu',
        author: 'H.P. Lovecraft',
        pages: 420,
        read: false
    },

    {
        title: 'Alice in Wonderland',
        author: 'Lewis Carroll',
        pages: 200,
        read: false
    },

    {
        title: 'The Count of Monte Cristo',
        author: 'Alexandre Dumas',
        pages: 894,
        read: false
    },

    {
        title: 'The Art of War',
        author: 'Sun Tzu',
        pages: 288,
        read: true
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

// displayBook()

function Book() {

}

function addBookToLibrary() {

}