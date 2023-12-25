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
        requestedTo: providerID
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


