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
const getReservationsByUser = (id_user, callback) => {
    const sql = `
        SELECT
            r.id_reservation,
            r.date_reservation,
            r.heure_reservation,
            r.statut,
            s.nom_service,
            s.prix,
            r.date_creation
        FROM reservations r
        JOIN services s
            ON r.id_service = s.id_service
        WHERE r.id_user = ?
        ORDER BY r.date_creation DESC
    `;

    db.query(sql, [id_user], callback);
};

const deleteReservation = (id_reservation, id_user, callback) => {
    const sql = `
        DELETE FROM reservations
        WHERE id_reservation = ?
        AND id_user = ?
    `;

    db.query(sql, [id_reservation, id_user], callback);
};


module.exports = {
    createReservation,
    getReservationsByUser,
    deleteReservation
};
