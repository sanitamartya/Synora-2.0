const express = require("express");
const { createUser } = require("../controllers/usersController");
const { validateCreateUser } = require("../validators/userValidator");

const router = express.Router();

router.post("/", validateCreateUser, createUser);

module.exports = router;
