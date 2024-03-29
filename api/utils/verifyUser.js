const { errorHandler } = require("./error");
const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (token) {
    console.log("bema is correct");
  } else {
    console.log("error happened!");
  }

  if (!token) return next(errorHandler(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Token is not valid!"));

    req.user = user;
    next();
  });
};
