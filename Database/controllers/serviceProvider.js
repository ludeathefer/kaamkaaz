const ServiceProvider = require("../models/ServiceProvider");
const Request = require("../models/Request");

const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} = require("../middleware/handleErrors");

const getUser = async (req, res, next) => {
  try {
    const { userID } = req.params;
    const user = await ServiceProvider.findOne({ _id: userID });
    if (!user) next(new NotFoundError("No such user"));
    else res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};


const acceptRequest = async (req, res, next) => {
  try {
    const { requestID } = req.params;
    let request = await Request.findOne({ _id: requestID });
    if (!request) next(new NotFoundError("invalid job id"));
    else {
     await Request.findByIdAndUpdate(
        requestID,
        { acceptedBy: req.body.user.userID },
        { new: true }
      );
      res.status(200).json({ msg: "Applied to job" });
    }
  } catch (err) {
    next(err);
  }
};


const getActiveJobs = async (req, res, next) =>{
    try{
    const activeJobs = await Request.find({acceptedBy: req.body.user.userID });
    res.status(200).json(active);
    }catch(err){next(err)}
}

const getPendingJobs = async (req, res, next) =>{
    try {
        const pendingRequests =  await Request.find({requestedTo : req.user.userID})
        res.json({pendingRequests})
    } catch (error) {next(error)
        
    }
}


module.exports = {getPendingJobs, getActiveJobs, acceptRequest, getUser}
