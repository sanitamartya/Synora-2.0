require("dotenv").config();

const port = Number(process.env.PORT);

const database = {
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  name: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
};

module.exports = {
  port,
  database,
};
