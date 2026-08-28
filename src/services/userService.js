const userRepository = require("../repositories/userRepository");

const createUser = (name) => {
  const users = userRepository.findAll();

  const user = {
    id: users.length + 1,
    name,
  };

  return userRepository.create(user);
};

const getUsers = () => {
  return userRepository.findAll();
};

const getUserById = (id) => {
  return userRepository.findById(id);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
