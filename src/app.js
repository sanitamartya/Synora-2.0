const express = require("express");
const requestLogger = require("./middleware/requestLogger");
const errorHandler = require("./middleware/errorHandler");
const router = require("./routes");

const app = express();

app.use(requestLogger);
app.use(express.json());

app.use(router);

app.use((request, response) => {
  response.status(404).json({
    error: "Route not found",
  });
});

app.use(errorHandler);

module.exports = app;
