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
      const { title, desc, image, pay, location } = req.body;
      newRequest = await Request.create({
        title,
        desc,
        createdBy: user._id,
        image,
        pay,
        location,
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
 getRequest, closeRequest, createRequest
};


// const closeRequest = async (req, res, next) => {
//   try {
//     const { requestID } = req.params;
//     const { rating, isComplete } = req.body;

//     const request = await Request.findById(requestID);
//     if (!request) next(new NotFoundError("Could not find request"));
//     else {
//       if (isComplete) {
//         const userID = request.acceptedBy;
//         if (request.createdBy !== req.body.user.userID) {
//           next(new UnauthenticatedError("Not authorized to delete"));
//         } else {
//           const paid = await Request.findOneAndDelete({ _id: jobID });
//           if (paid) {
//             await User.findByIdAndUpdate(
//               userID,
//               {
//                 $push: { ratings: rating },
//                 $push: { total: total + 1 },
//               },
//               { new: true }
//             );
//           } else {
//             await User.findByIdAndUpdate(
//               userID,
//               {
//                 $push: { ratings: rating },
//                 $push: { total: total + 1 },
//               },
//               { new: true }
//             );
//           }
//         }
//         res.status(200).json({ msg: "Job closed" });
//       } else {
//         if (job.createdBy !== req.body.user.userID) {
//           next(new UnauthenticatedError("Not authorized to delete"));
//         } else {
//           (await PaidJob.findOneAndDelete({ _id: jobID })) ||
//             (await CommunityJob.findOneAndDelete({ _id: jobID }));
//         }
//         res.json({ msg: "job deleted" });
//       }
//     }
//   } catch (err) {
//     next(err);
//   }
// };

// const assignApplicant = async (req, res, next) => {
//   try {
//     const { requestID } = req.params;
//     let request =
//       await Request.findOne({ _id: jobID })

//     if (!request) next(new NotFoundError("invalid job id"));
//     else {
//       (await CommunityJob.findByIdAndUpdate(
//         jobID,
//         { $push: { volunteers: req.body.user.userID } },
//         { new: true }
//       )) ||
//         PaidJob.findByIdAndUpdate(
//           jobID,
//           { $push: { applications: req.body.user.userID } },
//           { new: true }
//         );
//       res.status(200).json({ msg: "Applied to job" });
//     }
//   } catch (err) {
//     next(err);
//   }
// };