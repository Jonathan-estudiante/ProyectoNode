const express = require('express');

const router = express.Router();

const registrosController = require('../controllers/registrosController');

module.exports = function () {
    // get: /registros
    router.get('/registros', registrosController.list);

    return router;
};