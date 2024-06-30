
const express = require('express');
const recetaController = require('../controllers/recetaController');

const router = express.Router();

router.post('/', recetaController.createReceta);
router.get('/', recetaController.getRecetas);
router.put('/:id', recetaController.updateReceta);
router.delete('/:id', recetaController.deleteReceta);

module.exports = router;
