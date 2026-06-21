const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    console.log("Authorization :", authHeader);
    console.log("JWT_SECRET :", process.env.JWT_SECRET);

    if (!authHeader) {
        return res.status(401).json({
            message: "Accès refusé : token manquant"
        });
    }

    const token = authHeader.split(" ")[1];

    console.log("Token extrait :", token);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log("Token décodé :", decoded);

        req.user = decoded;

        next();
    } catch (error) {
        console.log("Erreur JWT :", error.message);

        return res.status(403).json({
            message: "Token invalide ou expiré"
        });
    }
};

module.exports = verifyToken;