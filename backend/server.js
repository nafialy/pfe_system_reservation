require("dotenv").config();
const express = require("express");
const cors = require("cors");


const db = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const reservationRoutes = require("./routes/reservationRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/reservations", reservationRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Serveur backend démarré avec succès !");
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});