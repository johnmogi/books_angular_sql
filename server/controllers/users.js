 
const express = require("express");
const usersLogic = require("../db/users");
const sendError = require("../helpers/send-error");

const router = express.Router();

// GET http://localhost:3000/api/users/all
router.get("/all", async (request, response) => {
    try {
      const users = await usersLogic.getAllUsersAsync();
      response.json(users);
    } catch (err) {
      sendError(response, err);
    }
  });
  // GET http://localhost:3000/api/users/user/:id
router.get("/user/:id", async (request, response) => {
    try {
        const id = +request.params.id
      const user = await usersLogic.getOneUserAsync(id);
      response.json(user);
    } catch (err) {
      sendError(response, err);
    }
  });


  module.exports = router;
