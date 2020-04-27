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
  async function addOneBookAsync(book) {
    const sql = `INSERT into items (title, author, price, genres, image) VALUES ( '${book.title}','${book.author}',${book.price},'${book.genres}','${book.image}')`;
    const info = await dal.executeAsync(sql);
    book.id = info.insertId;
    return book;
  }
  
  async function deleteOneBookAsync(id) {
    const sql = `DELETE FROM items where bookID = ${id}`;
   await dal.executeAsync(sql);
  
  }
  
  async function updateFullBookAsync(book) {
    const sql = `UPDATE items SET title = '${book.title}', author = '${book.author}', price = '${book.price}', genres = '${book.genres}', image = '${book.image}' WHERE bookID = ${book.bookID}`;
    const info = await dal.executeAsync(sql);
    return info.affectedRows === 0 ? null : book;
  }



// async function updatePartialVacAsync(vac) {
//   let sql = "UPDATE vacations SET ";
//   if (vac.description) {
//     sql += `description = '${vac.description}',`;
//   }
//   if (vac.destination) {
//     sql += `destination = '${vac.destination}',`;
//   }
//   if (vac.picFileName) {
//     sql += `picFileName = '${vac.picFileName}',`;
//   }
//   if (vac.startDate) {
//     sql += `startDate = '${vac.startDate}',`;
//   }
//   if (vac.endDate) {
//     sql += `endDate = '${vac.endDate}',`;
//   }
//   if (vac.price) {
//     sql += `price = '${vac.price}',`;
//   }

//   sql = sql.substr(0, sql.length - 1);
//   sql += ` WHERE ProductID = ${vac.id}`;
//   const info = await dal.executeAsync(sql);
//   return info.affectedRows === 0 ? null : vac;
// }


module.exports = {
    getAllBooksAsync,
    getOneBookAsync,
    addOneBookAsync,
    deleteOneBookAsync,
    updateFullBookAsync

}