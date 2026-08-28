const app = require("./app");
const { port } = require("./config/env");
const checkDatabaseConnection = require("./config/databaseCheck");

async function startServer() {
  await checkDatabaseConnection();

  app.listen(port, () => {
    console.log(`Synora server listening on port ${port}`);
  });
}

startServer();
