const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Synora server is running");
});

module.exports = app;
