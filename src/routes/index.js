const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.send("Synora server is running");
});

router.post("/echo", (request, response) => {
  response.json(request.body);
});

module.exports = router;
