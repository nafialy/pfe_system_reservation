const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = (req, res) => {
    const { nom, prenom, email, mot_passe, telephone } = req.body;

    if (!nom || !prenom || !email || !mot_passe || !telephone) {
        return res.status(400).json({
            message: "Tous les champs sont obligatoires"
        });
    }
    bcrypt.hash(mot_passe, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({
                message: "Erreur lors du chiffrement du mot de passe"
            });
        }

        User.create(
            {
                nom,
                prenom,
                email,
                mot_passe: hashedPassword,
                telephone
            },
            (err, result) => {
                if (err) {
                    return res.status(500).json({
                        message: "Erreur lors de l'inscription",
                        error: err
                    });
                }

                res.status(201).json({
                    message: "Utilisateur enregistré avec succès",
                    id: result.insertId
                });
            }
        );
    });
};
const loginUser = (req, res) => {
    const { email, mot_passe } = req.body;

    if (!email || !mot_passe) {
        return res.status(400).json({
            message: "Email et mot de passe obligatoires"
        });
    }

    User.findByEmail(email, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Erreur serveur",
                error: err
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Utilisateur introuvable"
            });
        }

        const user = results[0];

        bcrypt.compare(mot_passe, user.mot_passe, (err, isMatch) => {

            if (err) {
                return res.status(500).json({
                    message: "Erreur serveur"
                });
            }

            if (!isMatch) {
                return res.status(401).json({
                    message: "Mot de passe incorrect"
                });
            }
            const token = jwt.sign(
                {
                    id_user: user.id_user,
                    email: user.email
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "24h"
                }
            );

            res.status(200).json({
                message: "Connexion réussie",
                token,
                user: {
                    id_user: user.id_user,
                    nom: user.nom,
                    prenom: user.prenom,
                    email: user.email
                }
            });
        });
    });
}
const getProfile = (req, res) => {
    res.status(200).json({
        message: "Profil utilisateur récupéré avec succès",
        user: req.user
    });
};

module.exports = {
    registerUser,
    loginUser,
    getProfile
};