const Usuario = require('../models/usuario.model.js');
//Crear y guardar una nuevo Usuario
exports.create = (req, res) => {
    // Validar si el cuerpo de la solicitud está vacío
    // (no incluye datos requeridos)
    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Usuario no puede ser vacio"
        });
    }
    
    // Create a new Tarea with request's data
    const usuario = new Usuario({
        documento: req.body.documento,
        nombres: req.body.nombres,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
    });
        
    // Crear una nueva Tarea con los datos de la solicitud
    usuario.save()
    .then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrió algo incorrecto al crear el registro."
        });
    });
};
   

// Recuperar y listar todos los Usuario
exports.findAll = (req, res) => {
    Usuario.find()
    .then(usuario => {
        res.status(200).send(usuario);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrió algo incorrecto al recuperar los registros."
        });
    });
};

// Obtener un solo usuario por su id
exports.findOne = (req, res) => {
    Usuario.findById(req.params.id)
    .then(usuario => {
        if(!usuario) {
            return res.status(404).send({
                message: "Tarea no encontrada con id:" + req.params.id
            });
        }
        res.status(200).send(usuario);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Usuario no encontrado con id:" + req.params.id
            });
        }
        return res.status(500).send({
            message: "Ocurrió algo incorrecto al recuperar el registro con id:"
    + req.params.id
        });
    });
};

// Actualizar un Usuario por su id
exports.update = (req, res) => {
    // Validar si el cuerpo de la solicitud está vacío
    // (no incluye datos requeridos)
    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Usuario los datos no pueden estar vacios"
        });
    }

    // Encuentra el Usuario y actualiza con los datos del cuerpo de la solicitud
    Usuario.findByIdAndUpdate(req.params.id, {
        documento: req.body.documento,
        nombres: req.body.nombres,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
    }, { new: true })
    .then(usuario => {
        if(!usuario) {
            return res.status(404).send({
                message: "Usuario no encontrada con id:" + req.params.id
            });
        }
        res.status(200).send(usuario);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Usuario no encontrada con id:" + req.params.id
            });
        }
        return res.status(500).send({
            message: "Ocurrió algo incorrecto al actualizar el registro con id:" + req.params.id
        });
    });
};

       
// Borrar un Usuario por su id
exports.delete = (req, res) => {
    Usuario.findByIdAndRemove(req.params.id)
    .then(usuario => {
        if(!usuario) {
            return res.status(404).send({
                message: "Usuario no encontrada con id:" + req.params.id
            });
        }
        res.status(200).send({message: "usuario eliminado con exito!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Usuario no encontrada con id:" + req.params.id
            });
        }
        return res.status(500).send({
            message: "Ocurrió algo incorrecto al eliminar el registro con id:" + req.params.id
        });
    });
};

// login usuario
exports.findOne = (req, res) => {
   
};
