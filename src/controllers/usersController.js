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

module.exports = {
  createUser,
};
