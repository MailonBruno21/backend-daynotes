const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationsController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController')


//Rota Annotations
routes.get('/annotations', AnnotationController.read)
routes.post('/annotations', AnnotationController.create)
routes.delete('/annotations/:id', AnnotationController.delete)


//Rota Priority
routes.get('/priorities', PriorityController.read)
routes.put('/priorities/:id', PriorityController.update)

//Rota Contents
routes.put('/content/:id', ContentController.update)

module.exports = routes