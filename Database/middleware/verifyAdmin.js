const jwt = require("jsonwebtoken");
const User = require("../models/ServiceProvider");
const { UnauthenticatedError } = require("../middleware/handleErrors");

const verifyAdmin = async (req, res, next) => {
  const { secret } = req.body;
  if (secret === process.env.ADMIN_SECRET) {
    next();
  } else {
    next(new UnauthenticatedError("Unauthorized"));
  }
};
module.exports = verifyAdmin;
