const providerRouter = require("express").Router()
const {
  getPendingJobs,
  getActiveJobs,
  acceptRequest,
  getUser,
  getUsers,
  modifyUser,
} = require("../controllers/serviceProvider")

providerRouter.route("/providerRouter/:userID").get(getUser);
providerRouter.route("/providerRouter/modify/:userID").patch(modifyUser);
providerRouter.route('/providerRouter/all').get(getUsers);


module.exports = providerRouter