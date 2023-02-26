const mongoose = require('mongoose');

const ListaSchema = mongoose.Schema({
    documento_usuario: {
        type: String,
        index: true,
        unique: false,
        required: true,
        trim: true,
        minlength: 6
    },
    descripcion: {
        type: String,
        required: true,
        minlength: 10
    },
    estado: {
        type: Boolean,
        unique: false,
        required: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('lista', ListaSchema);