const express = require('express');
const routes = express.Router();

const Usuarios = require('./controllers/usuarioController');
const Animal = require('./controllers/animalController');

//Rotas de usuários
routes.get('/',Usuarios.index);
routes.get('/api/usuarios',Usuarios.index);
routes.get('/api/usuarios.details/:_id',Usuarios.details);
routes.post('/api/usuarios',Usuarios.create);
routes.delete('/api/usuarios/:_id',Usuarios.delete);
routes.put('/api/usuarios',Usuarios.update);


//Rotas de Animal
routes.get('/',Animal.index);
routes.get('/api/animal',Animal.index);
routes.get('/api/animal.details/:_id',Animal.details);
routes.post('/api/animal',Animal.create);
routes.delete('/api/animal/:_id',Animal.delete);
routes.put('/api/animal',Animal.update);


module.exports = routes;
