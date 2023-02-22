const Usuario = require('../models/usuario.model.js');
// Create and save a new Usuario
// Create and save a new Usuario
exports.create = (req, res) => {
    // Validate if the request's body is empty
    // (does not include required data)
    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Usuario no puede ser vacio"
        });
    }
    
    // Create a new Usuario with request's data
    const usuario = new Usuario({
        documento: req.body.documento,
        nombres: req.body.nombres,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
    });
    
    // Save the Usuario in the database
    usuario.save()
    .then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong occurred while creating the record."
        });
    });
};
   

// Retrieve and list all Usuarioss
exports.findAll = (req, res) => {
    console.log("Listing all usuarios ... soon!");
};

// Get a single Usuario by its id
exports.findOne = (req, res) => {
    console.log("Getting a particular usuario ... soon!");
};

// Update a Usuario by its id
exports.update = (req, res) => {
    // Validate if the request's body is empty
    // (does not include required data)
    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
        message: "Usuario data can not be empty"
        });
    }

    // Find the Usuario and update it with the request body data
    Usuario.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price || 0,
        expiration: req.body.expiration || null
    }, { new: true })
    .then(usuario => {
        if(!usuario) {
            return res.status(404).send({
                message: "Usuario not found with id:" + req.params.id
            });
        }
        res.status(200).send(usuario);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Usuario not found with id:" + req.params.id
            });
        }
        return res.status(500).send({
            message: "Something wrong ocurred while updating the record with id:" + req.params.id
        });
    });
};

       

// Delete a Usuario by its id
exports.delete = (req, res) => {
    console.log("Deleting a particular usuario ... soon!");
};
   