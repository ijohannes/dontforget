const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    documento: {
        type: String,
        index: true,
        unique: true,
        required: true,
        trim: true,
        minlength: 6
    },
    nombres: {
        type: String,
        required: true,
        minlength: 10
    },
    correo: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 10
    },
    contrasena: {
        type: String,
        required: true,
        minlength: 6
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Usuario', UsuarioSchema);