const users = [];

function createUser(name) {
  const user = {
    id: users.length + 1,
    name,
  };

  users.push(user);

  return user;
}

function getUsers() {
  return users;
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
