
const Receta = require('../models/Receta');

exports.createReceta = async (req, res) => {
  try {
    const receta = await Receta.create(req.body);
    res.status(201).json(receta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRecetas = async (req, res) => {
  try {
    const recetas = await Receta.findAll();
    res.status(200).json(recetas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateReceta = async (req, res) => {
  try {
    const receta = await Receta.update(req.body, { where: { id: req.params.id } });
    res.status(200).json(receta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteReceta = async (req, res) => {
  try {
    await Receta.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
