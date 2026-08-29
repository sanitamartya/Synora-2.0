function info(message) {
  console.log(`[INFO] ${message}`);
}

function error(message, errorObject) {
  console.error(`[ERROR] ${message}`);

  if (errorObject) {
    console.error(errorObject);
  }
}

module.exports = {
  info,
  error,
};
