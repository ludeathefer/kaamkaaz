const providerRouter = require("express").Router()
const {
  getPendingJobs,
  getActiveJobs,
  acceptRequest,
  getUser,
  getUsers,
  modifyUser,
} = require("../controllers/serviceProvider")

providerRouter.route("/provider/:userID").get(getUser);
providerRouter.route("/provider/modify/:userID").patch(modifyUser);
providerRouter.route('/provider/').get(getUsers);


module.exports = providerRouter