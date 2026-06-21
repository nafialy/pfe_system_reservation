const db = require("../config/db");

const createReservation = (
    date_reservation,
    heure_reservation,
    statut,
    id_user,
    id_service,
    callback
) => {
    const sql = `
        INSERT INTO reservations
        (date_reservation, heure_reservation, statut, id_user, id_service)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            date_reservation,
            heure_reservation,
            statut,
            id_user,
            id_service
        ],
        callback
    );
};

module.exports = {
    createReservation
};