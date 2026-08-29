const logger = require("../utils/logger");

function requestLogger(request, response, next) {
  logger.info(`${request.method} ${request.originalUrl}`);

  next();
}

module.exports = requestLogger;
