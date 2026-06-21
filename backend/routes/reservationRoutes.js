const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/authMiddleware");

const {
    createReservation
} = require("../controllers/reservationController");

router.post("/", verifyToken, createReservation);

module.exports = router;