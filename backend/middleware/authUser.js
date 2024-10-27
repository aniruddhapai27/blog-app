const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

//Authentication
exports.isAuthenticated = async (req, res, next) => {
  try {
    console.log("req: ");
    console.log(req.cookies);
    const token = req.cookies.jwt;
    console.log("Middleware : ", token);
    if (!token) {
      return res.status(401).json({ error: "User not authenticated" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error occuring in Authentication: " + error);
    return res.status(401).json({ error: "User not authenticated" });
  }
};

//Authorization
exports.isAdmin = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ error: `User with given role ${req.user.role} not allowed` });
    }
    next();
  };
};
