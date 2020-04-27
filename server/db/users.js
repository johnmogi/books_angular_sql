const dal = require("../dal");
// INSERT INTO `users` (`userID`, `name`, `phone`, `email`, `password`) VALUES (NULL, 'john', '050-9382456', 'anguru@gmail.com', '1234');

async function getAllUsersAsync() {
  const sql = `SELECT * FROM users`;
  const users = await dal.executeAsync(sql);
  return users;
}
async function getOneUserAsync(id) {
    const sql = `SELECT * FROM users where userID = ${id}`;
    const user = await dal.executeAsync(sql);
    return user;
  }
  

module.exports = {
  getAllUsersAsync,
  getOneUserAsync

}