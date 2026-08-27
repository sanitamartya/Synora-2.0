const express = require("express");
const requestLogger = require("./middleware/requestLogger");
const router = require("./routes");

const app = express();

app.use(requestLogger);
app.use(express.json());

app.use(router);

module.exports = app;
