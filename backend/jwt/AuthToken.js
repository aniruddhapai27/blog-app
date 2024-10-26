const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const createTokenAndSaveCookies = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // xss attacks protection
    secure: true,
    sameSites: "strict", //csrf attacks protection
  });
  await User.findByIdAndUpdate(userId, { token });
  return token;
};

module.exports = createTokenAndSaveCookies;
