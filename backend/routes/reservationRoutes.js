const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/authMiddleware");

const {
    createReservation,
    getUserReservations,
    cancelReservation
} = require("../controllers/reservationController");

router.post("/", verifyToken, createReservation);
router.get("/", verifyToken, getUserReservations);
router.delete("/:id", verifyToken, cancelReservation);

module.exports = router;