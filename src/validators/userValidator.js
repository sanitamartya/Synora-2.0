function validateCreateUser(request, response, next) {
  const { name } = request.body;

  if (typeof name !== "string" || name.trim() === "") {
    return response.status(400).json({
      error: "Name is required and must be a non-empty string",
    });
  }

  next();
}

module.exports = {
  validateCreateUser,
};
