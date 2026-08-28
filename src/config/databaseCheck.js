const pool = require("./database");

const checkDatabaseConnection = async () => {
  await pool.query("SELECT 1");
  console.log("Database connection verified");
};

module.exports = checkDatabaseConnection;
