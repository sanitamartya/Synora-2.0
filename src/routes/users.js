const express = require("express");

const {
  createUser,
  getUsers,
  getUserById,
} = require("../controllers/usersController");

const { validateCreateUser } = require("../validators/userValidator");

const router = express.Router();

router.post("/", validateCreateUser, createUser);

router.get("/", getUsers);

router.get("/:id", getUserById);

module.exports = router;
