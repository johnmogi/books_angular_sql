const mysql = require("mysql");
// const { mysql } = require("./config");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "q1w2e3",
  database: "books"
});
connection.connect(err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("We're connected to Books on MySQL.");
});
function executeAsync(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}
module.exports = {
  executeAsync
};