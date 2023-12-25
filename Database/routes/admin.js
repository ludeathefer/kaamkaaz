const express = require("express");
const adminRouter = express.Router();

const { getUser, getUsers, modifyUser, login } = require("../controllers/admin");

adminRouter.route("/admin/user/verify/:userID").post(modifyUser);
adminRouter.route("/admin/user/").get(getUsers)
adminRouter.route("/admin/login/").post(login)
adminRouter.route("/admin/user/:userID").get(getUser)

module.exports = adminRouter;
