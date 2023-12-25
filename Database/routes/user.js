const userRouter = require('express').Router()
const {modifyUser, deleteUser, getUser} = require("../controllers/user")


userRouter.route("/serviceUser/:userID").get(getUser);
userRouter.route("/serviceUser/modify").patch(modifyUser);
userRouter.route("/serviceUser/delete").delete(deleteUser);




module.exports =userRouter