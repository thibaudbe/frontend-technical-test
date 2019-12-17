const express = require("express");

const booksJSON = require("./books.json");
const authorsJSON = require("./authors.json");

const PORT = 3000;

const cache = {
  books: [],
  authors: []
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* --- BOOKS --- */

app.get("/books", (_, res) => {
  res.json(cache.books);
});

app.post("/books", (req, res) => {
  const { body } = req;

  if (
    body.title === undefined ||
    body.title === "" ||
    body.authorId === undefined ||
    body.authorId === "" ||
    typeof body.authorId !== "number"
  ) {
    res.status(400).json({ error: "Bad request" });
    return;
  }

  const foundAuthor = cache.authors.find(author => author.id === body.authorId);

  if (!foundAuthor) {
    res.status(404).json({ error: "Author not found" });
    return;
  }

  const lastBook = cache.books.slice(-1)[0] || { id: 10000 };

  const newBook = { ...body, id: lastBook.id + 1 };

  cache.books.push(newBook);

  res.json(newBook);
});

/* --- AUTHORS --- */

app.get("/authors", (_, res) => {
  res.json(cache.authors);
});

app.post("/authors", (req, res) => {
  const { body } = req;

  if (
    body.firstName === undefined ||
    body.firstName === "" ||
    body.lastName === undefined ||
    body.lastName === ""
  ) {
    res.status(400).json({ error: "Bad request" });
    return;
  }

  const lastAuthor = cache.authors.slice(-1)[0] || { id: 20000 };

  const newAuthor = { ...body, id: lastAuthor.id + 1 };

  cache.authors.push(newAuthor);

  res.json(newAuthor);
});

/* --- START SERVER --- */

app.listen(PORT, () => {
  // Initialize caches with json list
  cache.books = booksJSON;
  cache.authors = authorsJSON;

  console.log(`API listening on port ${PORT}`);
});
