const serviceModel = require("../models/service");

const getServices = (req, res) => {
    serviceModel.getAllServices((err, results) => {
        if (err) {
            console.error(err);

            return res.status(500).json({
                message: "Erreur lors de la récupération des services"
            });
        }

        res.status(200).json(results);
    });
};

module.exports = {
    getServices
};