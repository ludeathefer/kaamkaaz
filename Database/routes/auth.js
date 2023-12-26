const express= require('express')
const authRouter = express.Router()


const {register, login} = require("../controllers/auth")
const {adminLogin} = require("../controllers/admin")

authRouter.route('/auth/register').post(register)
authRouter.route('/admin/login').post(adminLogin)
authRouter.route('/auth/login').post(login)
authRouter.route("/hello").get((req, res)=>res.json({msg:"endpoint"}))


module.exports = authRouter