const express = require('express');
const routes = express.Router();
const Usuarios = require('./controllers/usuarioController');

//Rotas de usuários
routes.get('/',Usuarios.index);
routes.get('/api/usuarios',Usuarios.index);
routes.get('/api/usuarios.details/:_id',Usuarios.details);
routes.post('/api/usuarios',Usuarios.create);
routes.delete('/api/usuarios/:_id',Usuarios.delete);
routes.put('/api/usuarios',Usuarios.update);


//Rotas de Animal



module.exports = routes;
