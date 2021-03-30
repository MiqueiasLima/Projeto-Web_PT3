const express = require('express');
const routes = express.Router();

const Animal = require('./controllers/animalController');

//Rotas de Animal
routes.get('/',Animal.index);
routes.get('/api/animal',Animal.index);
routes.get('/api/animal.details/:_id',Animal.details);
routes.post('/api/animal',Animal.create);
routes.delete('/api/animal/:_id',Animal.delete);
routes.put('/api/animal',Animal.update);


module.exports = routes;
