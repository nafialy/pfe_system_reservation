const reservationModel = require("../models/reservation");

const createReservation = (req, res) => {
    const {
        date_reservation,
        heure_reservation,
        id_service
    } = req.body;

    const id_user = req.user.id_user;

    if (!date_reservation || !heure_reservation || !id_service) {
        return res.status(400).json({
            message: "Tous les champs sont obligatoires"
        });
    }

    const statut = "en attente";

    reservationModel.createReservation(
        date_reservation,
        heure_reservation,
        statut,
        id_user,
        id_service,
        (err, result) => {
            if (err) {
                console.error(err);

                return res.status(500).json({
                    message: "Erreur lors de la création de la réservation"
                });
            }

            res.status(201).json({
                message: "Réservation créée avec succès",
                id_reservation: result.insertId
            });
        }
    );
};

module.exports = {
    createReservation
};