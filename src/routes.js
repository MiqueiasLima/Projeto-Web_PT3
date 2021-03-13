const express = require('express');
const routes = express.Router();
const Usuarios = require('./controllers/usuarioController');


routes.get('/',Usuarios.index);
routes.get('/api/usuarios',Usuarios.index);
routes.get('/api/usuarios.details/:_id',Usuarios.details);
routes.post('/api/usuarios',Usuarios.create);
routes.delete('/api/usuarios/:_id',Usuarios.delete);
routes.put('/api/usuarios',Usuarios.update);


module.exports = routes;
