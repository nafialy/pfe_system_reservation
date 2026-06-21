const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");

const {
    registerUser,
    loginUser,
    getProfile
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, getProfile);

module.exports = router;