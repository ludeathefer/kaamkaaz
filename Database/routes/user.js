const userRouter = require('express').Router()
const {
  getUser,
  modifyUser,
} = require("../controllers/serviceUser");


userRouter.route("/serviceUser/:userID").get(getUser);
userRouter.route("/serviceUser/modify/:userID").patch(modifyUser);




module.exports = userRouter

module.exports =userRouter