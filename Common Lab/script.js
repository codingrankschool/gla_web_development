// Get HTML elements
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const addBookBtn = document.getElementById("addBookBtn");
const bookList = document.getElementById("bookList");

// Load books from LocalStorage
let books = JSON.parse(localStorage.getItem("books")) || [];

// Save books in LocalStorage
function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books));
}

// Display all books
function displayBooks() {

    bookList.innerHTML = "";

    books.forEach(function(book, index) {

        // Create list item
        const li = document.createElement("li");

        // Display book details
        const info = document.createElement("div");
        info.className = "book-info";

        const title = document.createElement("strong");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = "Author: " + book.author;

        info.appendChild(title);
        info.appendChild(author);

        // Create Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "editBtn";

        editBtn.addEventListener("click", function() {
            editBook(index);
        });

        // Create Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteBtn";

        deleteBtn.addEventListener("click", function() {
            deleteBook(index);
        });

        // Add elements to list item
        li.appendChild(info);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        bookList.appendChild(li);
    });
}

// Add a new book
addBookBtn.addEventListener("click", function() {

    const title = bookTitle.value.trim();
    const author = bookAuthor.value.trim();

    if (title === "" || author === "") {
        alert("Please enter both book title and author!");
        return;
    }

    const newBook = {
        title: title,
        author: author
    };

    books.push(newBook);

    saveBooks();
    displayBooks();

    bookTitle.value = "";
    bookAuthor.value = "";
});

// Edit or update a book
function editBook(index) {

    const updatedTitle = prompt(
        "Enter updated book title:",
        books[index].title
    );

    if (updatedTitle === null || updatedTitle.trim() === "") {
        return;
    }

    const updatedAuthor = prompt(
        "Enter updated author name:",
        books[index].author
    );

    if (updatedAuthor === null || updatedAuthor.trim() === "") {
        return;
    }

    books[index].title = updatedTitle.trim();
    books[index].author = updatedAuthor.trim();

    saveBooks();
    displayBooks();
}

// Delete a book
function deleteBook(index) {

    books.splice(index, 1);

    saveBooks();
    displayBooks();
}

// Display saved books when page loads
displayBooks();