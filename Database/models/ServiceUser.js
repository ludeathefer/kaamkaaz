const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ServiceUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    maxlength: 70,
    minlength: 4,
  },
  password: {
    type: String,
    required: [true, "Password required"],
    minlength: 4,
    maxlength: 64,
  },
  email: {
    type: String,
    required: [true, "Email required"],
    unique: [true, "Account with the provided email already exists"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },

  
  avatar: {
    type: String,
    required: false,
  },
  ratings: {
    type: [Number],
  },
  incompleteJobs: {
    type: [String],
  },
  completedJobs: {
    type: [String],
  },
});

ServiceUserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

ServiceUserSchema.methods.createJWT = async function () {
  return jwt.sign(
    { userID: this._id, name: this.name },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
};
ServiceUserSchema.methods.verifyPassword = async function (enteredPassword) {
  const salt = await bcrypt.genSalt(10);
  enteredPassword = await bcrypt.hash(enteredPassword, salt);
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("ServiceUser", ServiceUserSchema);
