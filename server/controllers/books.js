 
const express = require("express");
const booksLogic = require("../db/books");
const sendError = require("../helpers/send-error");

const router = express.Router();

// GET http://localhost:3000/api/books
router.get("/", async (request, response) => {
    try {
      const books = await booksLogic.getAllBooksAsync();
      response.json(books);
    } catch (err) {
      sendError(response, err);
    }
  });
  // GET http://localhost:3000/api/books/:id
router.get("/:id", async (request, response) => {
    try {
        const id = +request.params.id
      const item = await booksLogic.getOneBookAsync(id);
      response.json(item);
    } catch (err) {
      sendError(response, err);
    }
  });

 // POST http://localhost:3000/api/books/
 router.post("/", async (request, response) => {
  // (title, author, price, genres, image)
   const book = request.body
   if(!book.title || !book.author || !book.price || !book.genres || !book.image){
    response.status(403).json({value: "one of the fields is missing"});
    return;
   }
   try {
    const addedBook = await booksLogic.addOneBookAsync(book);
    response.status(201).json(addedBook);
  } catch (err) {
    sendError(response, err);
  }
});
// check deletion again
router.delete("/:id", async (request, response) => {
  try {
    const id = +request.params.id;
    const book = await booksLogic.deleteOneBookAsync(id);
    response.status(200).json(book);
    // response.status(200);
  } catch (err) {
    sendError(response, err);

  }
});

router.put('/update', async (request, response) => {
  try {
    const book = request.body
    if(!book.title || !book.author || !book.price || !book.genres || !book.image || !book.bookID){
      response.status(403).json({value: "one of the fields is missing"});
      return;
     }

      // const book = JSON.parse(request.body.book);

      // if (request.files) {
      //     const file = request.files.image;
      //     fs.unlinkSync(`../Client/public/assets/images/vacations/${vacation.image}`);
      //     const extension = file.name.substr(file.name.lastIndexOf('.'));
      //     file.mv('../Client/public/assets/images/vacations/' + randomName + extension);
      //     vacation.image = randomName + extension;
      // }

      const updatedBook = await booksLogic.updateFullBookAsync(book);
      response.json(updatedBook);

      if (updatedBook === null) {
          response.sendStatus(404);
          return;
      }
  } catch (error) {
    response.status(500).send(error);
  }
});

  module.exports = router;
