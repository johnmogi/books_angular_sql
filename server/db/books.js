const dal = require("../dal");

async function getAllBooksAsync() {
  const sql = `SELECT * FROM items`;
  const books = await dal.executeAsync(sql);
  return books;
}
async function getOneBookAsync(id) {
    const sql = `SELECT * FROM items where bookID = ${id}`;
    const book = await dal.executeAsync(sql);
    return book;
  }
  //add book INSERT INTO `items` (`bookID`, `title`, `author`, `price`, `genres`, `image`) VALUES (NULL, 'demo book', 'demo author', '500', 'Horror, Sci fi', '1.jpg');


  async function addOneBookAsync(book) {

    const sql = `INSERT into items (title, author, price, genres, image) VALUES ( '${book.title}','${book.author}',${book.price},'${book.genres}','${book.image}')`;
    const info = await dal.executeAsync(sql);
    book.id = info.insertId;
    return book;
  }

 


module.exports = {
    getAllBooksAsync,
    getOneBookAsync,
    addOneBookAsync

}