module.exports = (app) => {
    const tareas = require('../controllers/tarea.controller.js');
    // crear nueva tarea
    app.post('/tareas', tareas.create);
    // listar todos las tareas
    app.get('/tareas', tareas.findAll);
    // consultar una tarea  por id
    app.get('/tareas/:id', tareas.findOne);
    // actualizar una tarea  por id
    app.put('/tareas/:id', tareas.update);
    // eliminar una tarea  por id
    app.delete('/tareas/:id', tareas.delete);
    // Eliminar todas las tareas por idLista
    app.delete('/tareasEliminar/:idLista', tareas.deleteidLista);
}
   