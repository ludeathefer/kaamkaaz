const Request = require("../models/Request");
const ServiceProvider = require("../models/ServiceProvider");
const ServiceUser = require("../models/ServiceUser");
const {
  UnauthenticatedError,
  NotFoundError,
} = require("../middleware/handleErrors");

const getRequests = async (req, res, next) => {
  try {
    const requests = await Request.find({});
    res.json({ requests });
  } catch (err) {
    next(err);
  }
};

const getRequest = async (req, res, next) => {
  try {
    const request = await Request.findById(req.params.jobID);
    res.json(request);
  } catch (err) {
    next(err);
  }
};

const createRequest = async (req, res, next) => {
  const user = await ServiceUser.findById(req.body.user.userID);
  let newJob;
  if (user) {
    if (user.isVerified === true) {
      const { title, desc, image, pay, location, providerID } = req.body;
      newRequest = await Request.create({
        title,
        desc,
        createdBy: user._id,
        image,
        pay,
        location,
        requestedTo: providerID,
      });
      res.status(200).json({
        msg: "request Created",
        id: newRequest._id,
      });
    } else {
      res.status(404).json({ msg: "not created" });
    }
  } else {
    res.status(404).json({ msg: "not found" });
  }
};


const closeRequest = async (req, res, next) =>{
    try{
      const {requestID}= req.params;
      const {rating, isComplete} = req.body;

      const request = await Request.findById(requestID);

      if(!request) next(new NotFoundError('Could not find request'))
      else{
          if(isComplete){
            const providerID = request.acceptedBy;
            if (request.createdBy !==req.body.user.userID){
              next(new UnauthenticatedError("Not authorized to delete") )
            }
            else{
              await Request.findByIdAndUpdate(requestID, {isComplete: true}, {new:true})
              await ServiceProvider.findByIdAndUpdate(providerID, {$push: { ratings: rating },$push: { completedJobs: requestID },},{new: true} )

            }
          }
          else{
            if(isComplete){
            if (request.createdBy !==req.body.user.userID){
              next(new UnauthenticatedError("Not authorized to delete") )
            }
            else{
              await Request.findByIdAndDelete(requestID);
            }
          }
      }
    }}catch(err){next(err)}
  }

module.exports = {
 createRequest, getRequest, closeRequest, createRequest
};
