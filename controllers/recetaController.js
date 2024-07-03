
const Receta = require('../models/Receta');
const Ingrediente = require('../models/Ingrediente'); // Importar el modelo Ingrediente
const sequelize = require('../data/db'); // Importar sequelize para transacciones

exports.createReceta = async (req, res) => {
  try {
    const { nombre, descripcion, ingredientes } = req.body;
    const receta = await Receta.create(
      { nombre, descripcion, ingredientes },
      { include: { model: Ingrediente, as: 'ingredientes' } }
    );
    res.status(201).json(receta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRecetas = async (req, res) => {
  try {
    const recetas = await Receta.findAll({
      include: { model: Ingrediente, as: 'ingredientes' }
    });
    res.status(200).json(recetas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateReceta = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { nombre, descripcion, ingredientes } = req.body;
    await Receta.update(
      { nombre, descripcion },
      { where: { id: req.params.id }, transaction: t }
    );
    // Eliminar ingredientes existentes y agregar nuevos
    await Ingrediente.destroy({ where: { recetaId: req.params.id }, transaction: t });
    const newIngredientes = ingredientes.map(ing => ({ ...ing, recetaId: req.params.id }));
    await Ingrediente.bulkCreate(newIngredientes, { transaction: t });

    await t.commit();
    res.status(200).json({ message: 'Receta actualizada correctamente' });
  } catch (error) {
    await t.rollback();
    res.status(400).json({ error: error.message });
  }
};

exports.deleteReceta = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    await Ingrediente.destroy({ where: { recetaId: req.params.id }, transaction: t });
    await Receta.destroy({ where: { id: req.params.id }, transaction: t });
    await t.commit();
    res.status(204).send();
  } catch (error) {
    await t.rollback();
    res.status(400).json({ error: error.message });
  }
};
