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
const getUserReservations = (req, res) => {
    const id_user = req.user.id_user;

    reservationModel.getReservationsByUser(
        id_user,
        (err, results) => {
            if (err) {
                console.error(err);

                return res.status(500).json({
                    message: "Erreur lors de la récupération des réservations"
                });
            }

            res.status(200).json(results);
        }
    );
};
const cancelReservation = (req, res) => {
    const id_reservation = req.params.id;
    const id_user = req.user.id_user;

    reservationModel.deleteReservation(
        id_reservation,
        id_user,
        (err, result) => {
            if (err) {
                console.error(err);

                return res.status(500).json({
                    message: "Erreur lors de l'annulation de la réservation"
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Réservation introuvable"
                });
            }

            res.status(200).json({
                message: "Réservation annulée avec succès"
            });
        }
    );
};


module.exports = {
    createReservation,
    getUserReservations,
    cancelReservation
};