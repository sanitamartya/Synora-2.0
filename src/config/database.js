const { Pool } = require("pg");
const { database } = require("./env");

const pool = new Pool({
  host: database.host,
  port: database.port,
  database: database.name,
  user: database.user,
  password: database.password,
});

module.exports = pool;
