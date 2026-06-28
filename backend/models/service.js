const db = require("../config/db");

const getAllServices = (callback) => {
    const sql = `
        SELECT
            id_service,
            nom_service,
            description,
            prix,
            duree,
            disponibilite
        FROM services
        WHERE disponibilite = 1
        ORDER BY nom_service ASC
    `;

    db.query(sql, callback);
};

module.exports = {
    getAllServices
};