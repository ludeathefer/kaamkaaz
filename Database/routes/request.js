const requestRouter = require('express').Router()
const {createRequest, getRequest, closeRequest}= require('../controllers/posts')

requestRouter.route('/request/:requestID').get(getRequest).patch(closeRequest)
requestRouter.route('/request').post(createRequest)

module.exports = requestRouter