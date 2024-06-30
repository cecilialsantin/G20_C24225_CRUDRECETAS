
const express = require('express');
const ingredienteController = require('../controllers/ingredienteController');

const router = express.Router();

router.post('/', ingredienteController.createIngrediente);
router.post('/variosings', ingredienteController.createIngredientes)
router.get('/', ingredienteController.getIngredientes);
router.put('/:id', ingredienteController.updateIngrediente);
router.delete('/:id', ingredienteController.deleteIngrediente);

module.exports = router;
