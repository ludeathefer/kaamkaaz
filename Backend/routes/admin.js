const express = require("express");
const adminRouter = express.Router();

const { getUser, getUsers, modifyUser } = require("../controllers/admin");
const  verifyAdmin = require("../middleware/verifyAdmin");


adminRouter.route("/admin/user/verify/:userID").post(verifyAdmin,modifyUser);
adminRouter.route("/admin/user/").get(verifyAdmin,getUsers)
adminRouter.route("/admin/user/:userID").get(verifyAdmin,getUser)

module.exports = adminRouter;
