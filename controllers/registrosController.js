const Registros = require('../models/registros');

//Primera acción: list
exports.list = async (req, res) => {
    try {
        const registros = await Registros.find({});
        res.json(registros);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};