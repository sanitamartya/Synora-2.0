const userRepository = require("../repositories/userRepository");

async function createUser(name) {
  return userRepository.create(name);
}

async function getUsers() {
  return userRepository.findAll();
}

async function getUserById(id) {
  return userRepository.findById(id);
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
