const Tarea = require('../models/tarea.model.js');
//Crear y guardar una nueva Tarea
exports.create = (req, res) => {
    // Validar si el cuerpo de la solicitud está vacío
    // (no incluye datos requeridos)
    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Tarea no puede ser vacio"
        });
    }
    
    // Create a new Tarea with request's data
    const tarea = new Tarea({
        idLista: req.body.idLista,
        descripcion: req.body.descripcion,
        estado: req.body.estado,
    });
        
    // Crear una nueva Tarea con los datos de la solicitud
    tarea.save()
    .then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrió algo incorrecto al crear el registro."
        });
    });
};
   

// Recuperar y listar todas las tareas
exports.findAll = (req, res) => {
    Tarea.find()
    .then(tareas => {
        res.status(200).send(tareas);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrió algo incorrecto al recuperar los registros."
        });
    });
};

// Obtener una sola Tarea por su id
exports.findOne = (req, res) => {
    Tarea.findById(req.params.id)
    .then(tarea => {
        if(!tarea) {
            return res.status(404).send({
                message: "Tarea no encontrada con id:" + req.params.id
            });
        }
        res.status(200).send(tarea);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Tarea no encontrada con id:" + req.params.id
            });
        }
        return res.status(500).send({
            message: "Ocurrió algo incorrecto al recuperar el registro con id:"
    + req.params.id
        });
    });
};

// Actualizar una Tarea por su id
exports.update = (req, res) => {
    // Validar si el cuerpo de la solicitud está vacío
    // (no incluye datos requeridos)
    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
        message: "Tarea los datos no pueden estar vacios"
        });
    }

    // Encuentra la Tarea y actualízala con los datos del cuerpo de la solicitud
    Tarea.findByIdAndUpdate(req.params.id, {
        idLista: req.body.idLista,
        descripcion: req.body.descripcion,
        estado: req.body.estado
    }, { new: true })
    .then(tarea => {
        if(!tarea) {
            return res.status(404).send({
                message: "Tarea no encontrada con id:" + req.params.id
            });
        }
        res.status(200).send(tarea);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Tarea no encontrada con id:" + req.params.id
            });
        }
        return res.status(500).send({
            message: "Ocurrió algo incorrecto al actualizar el registro con id:" + req.params.id
        });
    });
};

       
// Borrar una Tarea por su id
exports.delete = (req, res) => {
    Tarea.findByIdAndRemove(req.params.id)
    .then(tarea => {
        if(!tarea) {
            return res.status(404).send({
                message: "Tarea no encontrada con id:" + req.params.id
            });
        }
        res.status(200).send({message: "Tarea eliminada con exito!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Tarea no encontrada con id:" + req.params.id
            });
        }
        return res.status(500).send({
            message: "Ocurrió algo incorrecto al eliminar el registro con id:" + req.params.id
        });
    });
};
   
// Borrar una Tarea por su idLista
exports.deleteidLista = (req,res) => {
    Tarea.deleteMany({idLista:req.params.idLista})
     .then(tarea => {
         if(!tarea) {
             return res.status(404).send({
                 message: "Tarea no encontrada con id:" + id
             });
         }
         res.status(200).send({message: "Tarea eliminada con exito!"});
     }).catch(err => {
         if(err.kind === 'ObjectId' || err.name === 'NotFound') {
             return res.status(404).send({
                 message: "Tarea no encontrada con id:" + id
             });
         }
         return res.status(500).send({
             message: "Ocurrió algo incorrecto al eliminar la tarea id lista:" + id
         });
     });
 };
 