const express = require("express");
// global.config = require("./config");
// const expressSession = require("express-session");
const cors = require("cors");

const { port } = require("./config");

const server = express();

const booksController = require("./controllers/books");
const usersController = require("./controllers/users");

server.use(cors({ origin: `http://localhost:3000`, credentials: true }));
server.use(express.json());
// server.use(
//   expressSession({
//     name: "VacationLoginCookie",
//     secret: "have-a-nice-vacation",
//     resave: true,
//     saveUninitialized: false
//   })
// );



server.use("/api/books", booksController);
server.use("/api/users", usersController);


server.listen(port, () =>
  console.log(`Server books running on port http://localhost:${port}`)
);