const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Synora server is running");
});

app.post("/echo", (request, response) => {
  response.json(request.body);
});

module.exports = app;
