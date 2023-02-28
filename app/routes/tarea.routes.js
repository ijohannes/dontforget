module.exports = (app) => {
    const tareas = require('../controllers/tarea.controller.js');
    // Create a new Product
    app.post('/tareas', tareas.create);
    // List all Products
    app.get('/tareas', tareas.findAll);
    // Get a single Product by id
    app.get('/tareas/:id', tareas.findOne);
    // Update a Product by id
    app.put('/tareas/:id', tareas.update);
    // Delete a Product by id
    app.delete('/tareas/:id', tareas.delete);

    app.delete('/tareasEliminar/:idLista', tareas.deleteidLista);
}
   