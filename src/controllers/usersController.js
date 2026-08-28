const userService = require("../services/userService");

function createUser(request, response) {
  const user = userService.createUser(request.body.name);

  response.status(201).json(user);
}

function getUsers(request, response) {
  const users = userService.getUsers();

  response.json(users);
}

function getUserById(request, response) {
  const id = Number(request.params.id);

  const user = userService.getUserById(id);

  if (!user) {
    return response.status(404).json({
      error: "User not found",
    });
  }

  response.json(user);
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
