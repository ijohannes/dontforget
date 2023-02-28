module.exports = (app) => {
    const usuarios = require('../controllers/usuario.controller.js');
    // Crear un nuevo usuario
    app.post('/usuarios', usuarios.create);
    // listar todos los usuarios
    app.get('/usuarios', usuarios.findAll);
    // Obtener un solo un usuario por id
    app.get('/usuarios/:id', usuarios.findOne);
    // editar usuario por id
    app.put('/usuarios/:id', usuarios.update);
    // eliminar usuario por id
    app.delete('/usuarios/:id', usuarios.delete);    
    // Obtener un solo un usuario por id
    app.post('/login/',usuarios.login);    
        
}
   