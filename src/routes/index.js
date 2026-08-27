const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.send("Synora server is running");
});

router.get("/error", (request, response) => {
  throw new Error("Intentional test error");
});

router.post("/echo", (request, response) => {
  response.json(request.body);
});

module.exports = router;
