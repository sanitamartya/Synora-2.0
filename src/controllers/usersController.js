const users = [];
console.log();
function createUser(request, response) {
  const user = {
    id: users.length + 1,
    name: request.body.name,
  };

  users.push(user);

  response.status(201).json(user);
}

function getUsers(request, response) {
  response.json(users);
}

function getUserById(request, response) {
  const id = Number(request.params.id);

  const user = users.find((user) => user.id === id);

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
