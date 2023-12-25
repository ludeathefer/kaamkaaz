const providerRouter = require("express").Router()
const {
  getPendingJobs,
  getActiveJobs,
  acceptRequest,
  getUser,
  getUsers,
  modifyUser,
} = require("../controllers/serviceProvider")

providerRouter.route("/serviceProvider/:userID").get(getUser);
providerRouter.route("/serviceProvider/modify/:userID").patch(modifyUser);
providerRouter.route('/servicerProvider/all').get(getUsers);


module.exports = providerRouter