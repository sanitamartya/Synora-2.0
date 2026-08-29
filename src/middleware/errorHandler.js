const logger = require("../utils/logger");

function errorHandler(error, request, response, next) {
  logger.error(`${request.method} ${request.originalUrl}`, error);

  response.status(500).json({
    error: "Internal server error",
  });
}

module.exports = errorHandler;
