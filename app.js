/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
// /* eslint-disable */

// TODO - connect form elements with logic

const bookContainer = document.querySelector('#book-container');
const submitBtn = document.querySelector('#submit-btn');
const form = document.getElementById('add-new-book');
form.addEventListener('submit', (event) => {
  console.log(event);
  event.preventDefault();
});

const myLibrary = (() => {
  const collection = [];

  /**
   *
   * @param {string} title Book title
   * @param {string} author Book author
   * @param {number} pages Number of pages in the book
   * @param {boolean} read True if book is read, else false
   * @returns object with book properties
   */
  function libraryManager(title, author, pages, read) {
    const newBook = Object.create(null);
    newBook.title = title;
    newBook.author = author;
    newBook.pages = pages;
    newBook.read = read;
    const bookExistsInLibrary = checkLibraryForExisting(newBook);
    if (bookExistsInLibrary === true) return alert('This book is already in the library');
    addBookToLibrary(newBook);
    createBookCard();
    return newBook;
  }

  /**
 * Checks library, if book is in collection return true
 * @param {object} book Book object being passed in for comparison
 * @returns true if the book exists in the library, else false
 */
  function checkLibraryForExisting(newBook) {
    for (let i = 0; i < collection.length; i += 1) {
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
  }

  function createBookCard() {
    collection.forEach((book) => {
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

  return { libraryManager };
})();

// // test to see if program stops when you try to add a duplicate book
// myLibrary.libraryManager(
//   'The Call of Cthulhu',
//   'H.P. Lovecraft',
//   420,
// );

myLibrary.libraryManager(
  'The Call of Cthulhu',
  'H.P. Lovecraft',
  420,
);

myLibrary.libraryManager(
  'Alice in Wonderland',
  'Lewis Carroll',
  200,
);

myLibrary.libraryManager(
  'The Count of MonteCristo',
  'Alexandre Dumas',
  894,
);

myLibrary.libraryManager(
  'The Art of War',
  'Sun Tzu',
  300,
);
