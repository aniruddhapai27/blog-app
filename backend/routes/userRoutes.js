const express = require("express");
const {
  getAdmins,
  getMyProfile,
  login,
  logout,
  register,
} = require("../controllers/userController");
const { isAuthenticated } = require("../middleware/authUser.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/my-profile", isAuthenticated, getMyProfile);
router.get("/admins", getAdmins);

module.exports = router;
