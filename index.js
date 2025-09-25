function fetchBooks() {
  // Return the fetch so tests can detect it
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())  // Convert the response to JSON
    .then(booksData => {
      renderBooks(booksData);          // Pass the JSON to renderBooks
    })
    .catch(error => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
