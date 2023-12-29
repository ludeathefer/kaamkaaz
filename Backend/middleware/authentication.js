const jwt = require("jsonwebtoken");
const User = require("../models/ServiceProvider");
const { UnauthenticatedError } = require("./handleErrors");

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    console.log("Here!");
    next(new UnauthenticatedError("Missing JWT"));
    return;
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { userID, name } = decoded;
    req.user = { userID, name };
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = authenticate;
