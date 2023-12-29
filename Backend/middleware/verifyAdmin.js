const jwt = require("jsonwebtoken");
const User = require("../models/ServiceProvider");
const { UnauthenticatedError } = require("./handleErrors");

const verifyAdmin = async (req, res, next) => {
  const { secret } = req.body;
  if (secret === process.env.ADMIN_SECRET) {
    next();
  } else {
    next(new UnauthenticatedError("Unfromhereauthorized"));
  }
};
module.exports = verifyAdmin;
