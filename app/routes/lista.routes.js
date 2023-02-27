module.exports = (app) => {
    const listas = require('../controllers/lista.controller.js');
    // Create a new Product
    app.post('/listas', listas.create);
    // List all Products
    app.get('/listas', listas.findAll);
    // Get a single Product by id
    app.get('/listas/:id', listas.findOne);
    // Update a Product by id
    app.put('/listas/:id', listas.update);
    // Delete a Product by id
    app.delete('/listas/:id', listas.delete); 
}
   