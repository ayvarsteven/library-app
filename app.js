let myLibrary = [
    {
        title: 'The Call of Cthulhu',
        author: 'H. P. Lovecraft',
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

function displayBook() {
    myLibrary.forEach(book => {
        let newBook = document.createElement('div')

        let bookTitle = document.createElement('p')
        bookTitle.textContent = `${book.title}`

        let bookAuthor = document.createElement('p')
        bookAuthor.textContent = `${book.author}`

        let bookPages = document.createElement('p')
        bookPages.textContent = `${book.pages} pages`

        newBook.append(bookTitle, bookAuthor, bookPages)
        document.body.appendChild(newBook)
    })
}

displayBook()

function Book() {

}

function addBookToLibrary() {

}