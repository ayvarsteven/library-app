const myLibrary = [
    {
        title: 'The Call of Cthulhu',
        author: 'H.P. Lovecraft',
        pages: 420
    },
    {
        title: 'Alice in Wonderland',
        author:'Lewis Carroll',
        pages: 200,
    },
    {
        title: 'The Count of MonteCristo',
        author: 'Alexandre Dumas',
        pages: 894
    },
    {
        title: 'The Art of War',
        author: 'Sun Tzu',
        pages: 300
    }
]




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

const checkLibraryForExisting = (title) => {
    for(i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === title) {
            console.log(`This book is already in the library`)
            return `This book is already in the library`
            // TODO - need to stop the program from executing, as of now it'll only log the message but still continue
        }
    }
}
