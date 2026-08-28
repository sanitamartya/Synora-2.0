const userService = require("../services/userService");

async function createUser(request, response) {
  const user = await userService.createUser(request.body.name);

  response.status(201).json(user);
}

async function getUsers(request, response) {
  const users = await userService.getUsers();

  response.json(users);
}

async function getUserById(request, response) {
  const id = Number(request.params.id);

  const user = await userService.getUserById(id);

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
