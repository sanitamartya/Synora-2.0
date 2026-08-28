const userRepository = require("../repositories/userRepository");

function createUser(name) {
  const users = userRepository.findAll();

  const user = {
    id: users.length + 1,
    name,
  };

  return userRepository.create(user);
}

function getUsers() {
  return userRepository.findAll();
}

function getUserById(id) {
  return userRepository.findById(id);
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
