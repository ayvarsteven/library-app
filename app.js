const myLibrary = (() => {
    const collection = []

    const _checkLibraryForExisting = (title) => {
        for(i = 0; i < collection.length; i++) {
            if (collection[i].title === title) {
                console.log(`This book is already in the library`)
                // return `This book is already in the library`
                // TODO - need to stop the program from executing, as of now it'll only log the message but still continue
                // use mediator pattern to communicate?
            }
        }
    }

    const _addBookToLibrary = () => {
        _checkLibraryForExisting(newBook.title)
        collection.push(newBook)
        console.log(collection)
    }

    const addBook = ({title, author, pages, read}) => {
        title,
        author,
        pages,
        read
        return {title, author, pages, read}
    }
    return { addBook, collection}
})()

myLibrary.addBook(
    'The Call of Cthulhu',
    'H.P. Lovecraft',
    420
)

myLibrary.addBook(
 'Alice in Wonderland',
 'Lewis Carroll',
 200,
)

myLibrary.addBook(
 'The Count of MonteCristo',
 'Alexandre Dumas',
 894
)
myLibrary.addBook(
    'The Art of War',
    'Sun Tzu',
    300
)

// TODO - push popular books into my library array using the proper methods. 
// myLibrary.createBook(title, author, author, pages); myLibrary array will be a private property only accessible by the my library method. Need 
// TODO - you shouldn't be able to push onto the array directly, should be locked away within a function only accessible by its API.

// ??? - Constructor isn't being used at all.

// TODO - create image for default books; connects images to default books. If the book title matches anything within the function then match it to one of default placeholder images. For Ex: book.title === 'The Art of War' -> loads art of war background image.

const bookContainer = document.querySelector('#book-container')
const submitBtn = document.querySelector('#submit-btn')
// const form = document.getElementById('add-new-book')
// form.addEventListener('submit', (event) => {
//     console.log(event)
//     event.preventDefault()
// })

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
