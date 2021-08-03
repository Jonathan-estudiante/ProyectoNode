const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registroSchema = new Schema({
    codigo: {
        type: String,
        trim: true,
        unique: true,
    },
    producto: {
        type: String,
        trim: true,
    },
    descripcion: {
        type: String,
        trim: true,
    },
    precio_unitario: {
        type: String,
        trim: true,
    },
    precio_venta: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('productos_tiendas', registroSchema);