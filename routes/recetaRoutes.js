
const express = require('express');
const router = express.Router();
const recetaController = require('../controllers/recetaController');
const authController = require('../controllers/authController');

// Aplicar el middleware de autenticación a las rutas protegidas
router.post('/', authController.authenticate, recetaController.createReceta);
router.put('/:id', authController.authenticate, recetaController.updateReceta);
router.delete('/:id', authController.authenticate, recetaController.deleteReceta);

router.get('/', recetaController.getRecetas);

module.exports = router;


/*const express = require('express');
const recetaController = require('../controllers/recetaController');

const router = express.Router();

router.post('/', recetaController.createReceta);
router.get('/', recetaController.getRecetas);
router.put('/:id', recetaController.updateReceta);
router.delete('/:id', recetaController.deleteReceta);

module.exports = router;*/