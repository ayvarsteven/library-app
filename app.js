/* eslint-disable */

// TODO - 1A - create image for default books; connects images to default books. If the book title matches anything within the function then match it to one of default placeholder images. For Ex: book.title === 'The Art of War' -> loads art of war background image.

// TODO - 1B - integrate create card function as a method

const myLibrary = (() => {
  const collection = [];

    const libraryManager = function () {
      // mediator - the functions should not call each other instead the
      // mediator should communicate with each function directly
      // listen for add book
      // check library for existing
      // if no error, add book to library
    };

  /**
 * Checks library, if book is in collection return true
 * @param {object} book Book object being passed in for comparison
 * @returns true if the book exists in the library, else false
 */
  function checkLibraryForExisting(newBook) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].title === newBook.title) {
        return true;
      }
    }
  }

  /**
   * Adds book to library if the book isn't already in the library
   * @param {object} book New book object
   * @returns 
   */
  function addBookToLibrary(book) {
    const bookExistsInLibrary = checkLibraryForExisting(book);
    if (bookExistsInLibrary === true) return alert('This book is already in the library');
    collection.push(book);
    console.log(collection)
  }

  /**
   * Method for adding a new book to the library, returns object
   * @param {string} title Book Title
   * @param {string} author Book Author
   * @param {number} pages Number of pages in the book
   * @param {boolean} read True if read, else false
   */
  const addBook = (title, author, pages, read) => {
    const newBook = Object.create(null);
    newBook.title = title;
    newBook.author = author;
    newBook.pages = pages;
    newBook.read = read;
    addBookToLibrary(newBook);
    // return newBook
    // return {title, author, pages, read}
  };

  return { addBook, collection };
})();

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
        let bookAuthor = document.createElement('p')
        const btnContainer = document.createElement('div')
        const readBtn = document.createElement('button')
        const removeBtn = document.createElement('button')


        bookAuthor.textContent = `${book.author} | ${book.pages} Pages`
        bookTitle.textContent = `${book.title}`
        readBtn.textContent = 'READ'
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
