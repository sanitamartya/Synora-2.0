const users = [];

const create = (user) => {
  users.push(user);

  return user;
};

const findAll = () => {
  return users;
};

const findById = (id) => {
  return users.find((user) => user.id === id);
};

module.exports = {
  create,
  findAll,
  findById,
};
