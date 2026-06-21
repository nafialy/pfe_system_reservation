const db = require("../config/db");

const User = {
    create: (userData, callback) => {
        const sql = `
      INSERT INTO users
      (nom, prenom, email, mot_passe, telephone)
      VALUES (?, ?, ?, ?, ?)
    `;

        db.query(
            sql,
            [
                userData.nom,
                userData.prenom,
                userData.email,
                userData.mot_passe,
                userData.telephone
            ],
            callback
        );
    },
    findByEmail: (email, callback) => {
        const sql = "SELECT * FROM users WHERE email = ?";

        db.query(sql, [email], callback);
    }

};

module.exports = User;