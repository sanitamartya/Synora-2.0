const express = require("express");
const usersRouter = require("./users");

const router = express.Router();

router.get("/", (request, response) => {
  response.send("Synora server is running");
});

router.post("/echo", (request, response) => {
  response.json(request.body);
});

router.use("/users", usersRouter);

module.exports = router;
