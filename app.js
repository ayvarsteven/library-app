/* eslint-disable no-console */
/* eslint-disable */

// TODO - 1A - create image for default books; connects images to default books. If the book title matches anything within the function then match it to one of default placeholder images. For Ex: book.title === 'The Art of War' -> loads art of war background image.

// TODO - 1B - integrate create card function as a method

const myLibrary = (() => {
  const collection = [];

  function libraryManager(title, author, pages, read) {
    const newBook = Object.create(libraryManager.prototype);
    newBook.title = title;
    newBook.author = author;
    newBook.pages = pages;
    newBook.read = read;
    const bookExistsInLibrary = checkLibraryForExisting(newBook);
    if (bookExistsInLibrary === true) return alert('This book is already in the library');
    addBookToLibrary(newBook);
    console.log(newBook);
    console.log(collection);
    return newBook;

      // mediator - the functions should not call each other instead the
      // mediator should communicate with each function directly
      // listen for add book
      // check library for existing
      // if no error, add book to library
  }
  libraryManager.prototype = {
    addBookToLibrary(book) {
      const bookExistsInLibrary = checkLibraryForExisting(book);
      if (bookExistsInLibrary === true) return alert('This book is already in the library');
      collection.push(book);
      console.log(collection);
    },
    checkLibraryForExisting(newBook) {
      for (let i = 0; i < collection.length; i++) {
        if (collection[i].title === newBook.title) {
          return true;
        }
      }
    },
    logCollection() {
      console.log(collection)
    }
    };

    libraryManager.prototype.addBook = function() {
      const newBook = Object.create(null);
      newBook.title = title;
      newBook.author = author;
      newBook.pages = pages;
      newBook.read = read;
      return newBook
    }

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

  return { libraryManager };
})();

myLibrary.addBook(
  'The Call of Cthulhu',
  'H.P. Lovecraft',
  420,
);

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


// ??? - Constructor isn't being used at all.

// TODO - create image for default books; connects images to default books. If the book title matches anything within the function then match it to one of default placeholder images. For Ex: book.title === 'The Art of War' -> loads art of war background image.

const bookContainer = document.querySelector('#book-container')
const submitBtn = document.querySelector('#submit-btn')
// const form = document.getElementById('add-new-book')
// form.addEventListener('submit', (event) => {
//     console.log(event)
//     event.preventDefault()
// })

// 1B
function createBookCard() {
  myLibrary.forEach((book) => {
    const newBook = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const btnContainer = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    bookAuthor.textContent = `${book.author} | ${book.pages} Pages`;
    bookTitle.textContent = `${book.title}`;
    readBtn.textContent = 'READ';
    removeBtn.textContent = 'REMOVE';

    newBook.classList.add('book');
    bookTitle.classList.add('book-card__title');
    bookAuthor.classList.add('book-card__details');
    readBtn.classList.add('book-card__read-btn');
    removeBtn.classList.add('book-card__remove-btn');

    btnContainer.append(readBtn, removeBtn);
    newBook.append(bookTitle, bookAuthor, btnContainer);
    bookContainer.append(newBook);
  });
}
