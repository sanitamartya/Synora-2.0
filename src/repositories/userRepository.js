const pool = require("../config/database");

async function create(name) {
  const result = await pool.query(
    `
      INSERT INTO users (name)
      VALUES ($1)
      RETURNING id, name
    `,
    [name],
  );

  return result.rows[0];
}

async function findAll() {
  const result = await pool.query(
    `
      SELECT id, name
      FROM users
      ORDER BY id
    `,
  );

  return result.rows;
}

async function findById(id) {
  const result = await pool.query(
    `
      SELECT id, name
      FROM users
      WHERE id = $1
    `,
    [id],
  );

  return result.rows[0];
}

module.exports = {
  create,
  findAll,
  findById,
};
