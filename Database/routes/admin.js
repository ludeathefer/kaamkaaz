const express = require("express");
const adminRouter = express.Router();

const { getUser, getUsers, modifyUser } = require("../controllers/admin");

adminRouter.route("/admin/user/verify/:userID").post(modifyUser);
adminRouter.route("/admin/user/").get(getUsers)
adminRouter.route("/admin/user/:userID").get(getUser)

module.exports = adminRouter;
