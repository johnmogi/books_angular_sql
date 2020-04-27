 
const express = require("express");
const booksLogic = require("../db/books");
const router = express.Router();

// GET http://localhost:3000/api/books
router.get("/", async (request, response) => {
    try {
      const books = await booksLogic.getAllBooksAsync();
      response.json(books);
    } catch (err) {
      response.status(500).send(err.message);
    }
  });
  // GET http://localhost:3000/api/books/:id
router.get("/:id", async (request, response) => {
    try {
        const id = +request.params.id
      const item = await booksLogic.getOneBookAsync(id);
      response.json(item);
    } catch (err) {
      response.status(500).send(err.message);
    }
  });

 // POST http://localhost:3000/api/books/
 router.post("/", async (request, response) => {

   const book = request.body
   try {
console.log(book)
    const addedBook = await booksLogic.addOneBookAsync(book);
    response.status(201).json(addedBook);
  } catch (err) {
    response.status(500).send(err.message);
  }
});


  module.exports = router;
