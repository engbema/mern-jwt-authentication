const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { errorHandler } = require("../utils/error");
exports.signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};
