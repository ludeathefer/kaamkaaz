const ServiceUser = require("../models/ServiceUser");
const Job = require("../models/Request");

const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} = require("../middleware/handleErrors");

const getUser = async (req, res, next) => {
  try {
    const { userID } = req.params;
    const user = await ServiceUser.findOne({ _id: userID });
    if (!user) next(new NotFoundError("No such user"));
    else res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};



const modifyUser = async( req, res, next)=>{
  try {
    const {userID}= req.params;
    const user = await ServiceUser.findByIdAndUpdate(userID, req.body, {new:true})
    res.json({msg: "updated", new: user})
  } catch (error) {
    next(error)
  }
}




module.exports = { getUser, modifyUser}