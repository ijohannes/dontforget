const Lista = require('../models/lista.model.js');
//const TareaC = require('../controllers/tarea.controller.js');
// Create and save a new Lista
// Create and save a new Lista
exports.create = (req, res) => {
    // Validate if the request's body is empty
    // (does not include required data)
    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Lista no puede ser vacio"
        });
    }
    
    // Create a new Lista with request's data
    const lista = new Lista({
        documento_usuario: req.body.documento_usuario,
        descripcion: req.body.descripcion,
        estado: req.body.estado,
    });
    
    // Save the Lista in the database
    lista.save()
    .then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong occurred while creating the record."
        });
    });
};
   

// Retrieve and list all Listas
exports.findAll = (req, res) => {
    Lista.find()
    .then(listas => {
        res.status(200).send(listas);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong occurred while retrieving the records."
        });
    });
};

// Get a single Lista by its id
exports.findOne = (req, res) => {
    Lista.findById(req.params.id)
    .then(lista => {
        if(!lista) {
            return res.status(404).send({
                message: "Lista not found with id:" + req.params.id
            });
        }
        res.status(200).send(lista);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Lista not found with id:" + req.params.id
            });
        }
        return res.status(500).send({
            message: "Something wrong ocurred while retrieving the record with id:"
    + req.params.id
        });
    });
};

// Update a Lista by its id
exports.update = (req, res) => {
    // Validate if the request's body is empty
    // (does not include required data)
    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
        message: "Lista data can not be empty"
        });
    }

    // Find the Lista and update it with the request body data
    Lista.findByIdAndUpdate(req.params.id, {
        documento_usuario: req.body.documento_usuario,
        descripcion: req.body.descripcion,
        estado: req.body.estado
    }, { new: true })
    .then(lista => {
        if(!lista) {
            return res.status(404).send({
                message: "Lista not found with id:" + req.params.id
            });
        }
        res.status(200).send(lista);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Lista not found with id:" + req.params.id
            });
        }
        return res.status(500).send({
            message: "Something wrong ocurred while updating the record with id:" + req.params.id
        });
    });
};

       

// Delete a Lista by its id
exports.delete = (req, res) => {
    Lista.findByIdAndRemove(req.params.id)
    .then(lista => {
        if(!lista) {
            return res.status(404).send({
                message: "Lista no encontrada con id:" + req.params.id
            });
        }
            res.status(200).send({message: "Lista eliminada con exito!"});
 

    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Lista no encontrada id:" + req.params.id
            });
        }
        return res.status(500).send({
            message: "Ocurrio algo incorrecto al eliminar el registro con id:" + req.params.id
        });
    });
    
};
   