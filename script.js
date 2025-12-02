// Function to change background color

function changeBackgroundColor() {
  const colors = ["white", "black"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

//Add event listener to the button
document.getElementById("btn1").addEventListener("click", changeBackgroundColor);

const apiUrl = "https://openlibrary.org/search.json?q=python+programming";
const bookList = document.getElementById("book-list");

async function fetchBooks() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const books = data.docs.slice(0, 10); // Get first 10 books

        books.forEach(book => {
            const title = book.title || "No Title";
            const author = book.author_name ? book.author_name.join(", ") : "Unknown Author";

            const bookElement = document.createElement("div");
            bookElement.classList.add("book");
            bookElement.innerHTML = `
                <h2>${title}</h2>
                <p>by ${author}</p>
            `;

            bookList.appendChild(bookElement);
        });

    } catch (error) {
        console.error("Error fetching books:", error);
    }
}

// Fetch books when the page loads
fetchBooks();