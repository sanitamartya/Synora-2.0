const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Synora server is running");
});

app.listen(3000, () => {
  console.log("Synora server listening on port 3000");
});
