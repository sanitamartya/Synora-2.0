const app = require("./app");
const { port } = require("./config/env");
const checkDatabaseConnection = require("./config/databaseCheck");
const logger = require("./utils/logger");

async function startServer() {
  try {
    await checkDatabaseConnection();

    app.listen(port, function () {
      logger.info(`Synora server listening on port ${port}`);
    });
  } catch (error) {
    logger.error("Failed to start Synora", error);
    process.exit(1);
  }
}

startServer();
