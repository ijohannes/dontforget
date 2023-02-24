const mongoose = require('mongoose');

const TareaSchema = mongoose.Schema({
    idLista: {
        type: String,
        index: true,
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
        required: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Tarea', TareaSchema);