const ServiceProvider = require("../models/ServiceProvider");
const ServiceUser = require("../models/ServiceUser");
const bcrypt = require("bcryptjs");
const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} = require("../middleware/handleErrors");

const register = async (req, res, next) => {
  try {
    const { name, email, password, provider } = req.body;
    const alreadyExists =
      (await ServiceProvider.findOne({ email })) ||
      (await ServiceUser.findOne({ email }));
    if (alreadyExists) {
      next(new BadRequestError("Account with the email already exists"));
    } else {
      let user;
      if (provider) {
        user = await ServiceProvider.create({ name, email, password });
      } else {
        user = await ServiceUser.create({ name, email, password });
      }
      const token = await user.createJWT();

      res
        .status(200)
        .json({ name: user.name, token, userID: user._id, isOrg: user.isOrg });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password: enteredPassword } = req.body;
    const user =
      (await ServiceProvider.findOne({ email })) ||
      (await ServiceUser.findOne({ email }));
    if (!user) {
      next(new NotFoundError("Account with the email doesn't exists"));
    } else {
      const verified = await bcrypt.compare(enteredPassword, user.password);
      if (!verified) {
        next(new UnauthenticatedError("Wrong password"));
      } else {
        const token = await user.createJWT();
        res.status(200).json({
          name: user.name,
          token,
          userID: user._id,
          isOrg: user.isOrg,
        });
      }
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { register, login };
