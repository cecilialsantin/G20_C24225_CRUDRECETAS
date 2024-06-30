
const Ingrediente = require('../models/Ingrediente');

exports.createIngrediente = async (req, res) => {
  try {
    const ingrediente = await Ingrediente.create(req.body);
    res.status(201).json(ingrediente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createIngredientes = async (req, res) => {
    try {
        const ingredientes = await Ingrediente.bulkCreate(req.body);
        res.status(201).json(ingredientes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getIngredientes = async (req, res) => {
  try {
    const ingredientes = await Ingrediente.findAll();
    res.status(200).json(ingredientes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateIngrediente = async (req, res) => {
  try {
    const ingrediente = await Ingrediente.update(req.body, { where: { id: req.params.id } });
    res.status(200).json(ingrediente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteIngrediente = async (req, res) => {
  try {
    await Ingrediente.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
